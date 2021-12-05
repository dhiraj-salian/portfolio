import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:math' as math;

class GradientBorderCircleAvatar extends StatelessWidget {
  const GradientBorderCircleAvatar({
    Key? key,
    required this.borderSize,
    required this.radius,
    required this.assetImage,
    required this.colors,
  }) : super(key: key);

  final double borderSize;
  final double radius;
  final ImageProvider<Object> assetImage;
  final List<Color> colors;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Padding(
        padding: EdgeInsets.all(borderSize),
        child: CircleAvatar(
          radius: radius,
          backgroundImage: assetImage,
        ),
      ),
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        gradient: LinearGradient(
          colors: colors,
        ),
      ),
    );
  }
}

class IconAvatar extends StatelessWidget {
  const IconAvatar(
      {Key? key, required this.name, required this.path, required this.link})
      : super(key: key);

  final String name;
  final String path;
  final String link;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () async {
        if (await canLaunch(link)) {
          launch(link);
        }
      },
      customBorder: const CircleBorder(),
      child: Container(
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(
            color: Colors.white24,
            width: 0.6,
          ),
        ),
        child: CircleAvatar(
          backgroundColor: const Color.fromRGBO(23, 21, 30, 1),
          maxRadius: 50,
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Image.asset(
              path,
              semanticLabel: name,
            ),
          ),
        ),
      ),
    );
  }
}

class RotatingIconAvatar extends StatelessWidget {
  const RotatingIconAvatar(
      {Key? key, required this.name, required this.path, required this.link})
      : super(key: key);

  final String name;
  final String path;
  final String link;

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder(
      child: IconAvatar(
        name: name,
        path: path,
        link: link,
      ),
      duration: const Duration(
        seconds: 1,
        milliseconds: 500,
      ),
      tween: Tween<double>(
        begin: 0,
        end: 8 * math.pi,
      ),
      curve: Curves.easeInOut,
      builder: (_, double angle, Widget? myChild) {
        return Transform.rotate(
          angle: angle,
          child: myChild,
        );
      },
    );
  }
}
