import 'package:flutter/material.dart';

import 'dart:math' as math;

import '../util/common.dart';

class IconAvatar extends StatelessWidget {
  const IconAvatar({
    Key? key,
    required this.name,
    required this.icon,
    required this.link,
  }) : super(key: key);

  final String name;
  final String icon;
  final String link;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () => launchUrl(link),
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
              icon,
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
    required this.icon,
    required this.link,
  }) : super(key: key);

  final String name;
  final String icon;
  final String link;

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder(
      child: IconAvatar(
        name: name,
        icon: icon,
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
    required this.icon,
    required this.link,
  }) : super(key: key);

  final String name;
  final String icon;
  final String link;

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder(
      child: IconAvatar(
        name: name,
        icon: icon,
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
