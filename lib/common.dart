import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:math' as math;

ThemeData getThemeData() {
  ThemeData base = ThemeData.dark();
  return base.copyWith(
    colorScheme: base.colorScheme.copyWith(
      primary: const Color.fromRGBO(168, 0, 111, 1.0),
      secondary: const Color.fromRGBO(213, 112, 34, 1),
      background: const Color.fromARGB(255, 15, 14, 21),
      surface: const Color.fromRGBO(23, 21, 30, 1),
      onBackground: Colors.white54,
      onSurface: Colors.white70,
    ),
    textTheme: base.textTheme.copyWith(
      headline1: base.textTheme.headline1!.copyWith(
        fontFamily: 'DancingScript',
        fontSize: 50,
      ),
      headline2: base.textTheme.headline2!.copyWith(
        fontSize: 30,
      ),
      headline3: base.textTheme.headline3!.copyWith(
        fontSize: 20,
      ),
      bodyText1: base.textTheme.bodyText1!.copyWith(
        fontSize: 14,
      ),
    ),
  );
}

Route createProjectRoute(Widget destinationPage) {
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => destinationPage,
    transitionDuration: const Duration(
      seconds: 1,
    ),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      const begin = Offset(0.0, 1.0);
      const end = Offset.zero;
      const curve = Curves.ease;

      var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));

      return SlideTransition(
        position: animation.drive(tween),
        child: child,
      );
    },
  );
}

LinearGradient getGradient(BuildContext context) {
  return LinearGradient(
    colors: [
      Theme.of(context).colorScheme.secondary,
      Theme.of(context).colorScheme.primary,
    ],
  );
}

Future<dynamic> readProjectData() async {
  final String response =
  await rootBundle.loadString('assets/data/projects.json');
  final data = await json.decode(response);
  return data;
}

Future<dynamic> readSocialData() async {
  final String response =
  await rootBundle.loadString('assets/data/socials.json');
  final data = await json.decode(response);
  return data;
}

Future<dynamic> readPersonalData() async {
  final String response =
  await rootBundle.loadString('assets/data/personal.json');
  final data = await json.decode(response);
  return data;
}

class GradientBorderCircleAvatar extends StatelessWidget {
  const GradientBorderCircleAvatar({
    Key? key,
    required this.borderSize,
    required this.radius,
    required this.assetImage,
    required this.gradient,
  }) : super(key: key);

  final double borderSize;
  final double radius;
  final ImageProvider<Object> assetImage;
  final Gradient gradient;

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
        gradient: gradient,
      ),
    );
  }
}

class IconAvatar extends StatelessWidget {
  const IconAvatar({
    Key? key,
    required this.name,
    required this.path,
    required this.link,
  }) : super(key: key);

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
          maxRadius: 30,
          child: Padding(
            padding: const EdgeInsets.all(10.0),
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
  const RotatingIconAvatar({
    Key? key,
    required this.name,
    required this.path,
    required this.link,
  }) : super(key: key);

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

class ExpandingIconAvatar extends StatelessWidget {
  const ExpandingIconAvatar({
    Key? key,
    required this.name,
    required this.path,
    required this.link,
  }) : super(key: key);

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
        end: 1,
      ),
      curve: Curves.easeInOut,
      builder: (_, double value, Widget? myChild) {
        return Transform.scale(
          scale: value,
          child: Opacity(
            opacity: value,
            child: myChild,
          ),
        );
      },
    );
  }
}
