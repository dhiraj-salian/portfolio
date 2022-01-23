import 'package:flutter/material.dart';

import 'common.dart';

class ExpandingProfile extends StatelessWidget {
  const ExpandingProfile({
    Key? key,
    required this.name,
    required this.description,
    required this.image,
    required this.borderSize,
    required this.radius,
  }) : super(key: key);

  final String name;

  final String description;

  final String image;

  final double borderSize;

  final double radius;

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder(
      child: Profile(
        name: name,
        description: description,
        image: image,
        borderSize: borderSize,
        radius: radius,
      ),
      duration: const Duration(
        milliseconds: 850,
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

class Profile extends StatelessWidget {
  const Profile({
    Key? key,
    required this.name,
    required this.description,
    required this.image,
    this.borderSize = 5,
    this.radius = 100,
  }) : super(key: key);

  final String name;

  final String description;

  final String image;

  final double borderSize;

  final double radius;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        GradientBorderCircleAvatar(
          borderSize: borderSize,
          radius: radius,
          assetImage: AssetImage(image),
          gradient: getGradient(context),
        ),
        const SizedBox(
          height: 20,
        ),
        Text(
          name,
          style: Theme.of(context).textTheme.headline1,
          textAlign: TextAlign.center,
        ),
        const SizedBox(
          height: 20,
        ),
        Text(
          description,
          style: Theme.of(context).textTheme.headline2,
          textAlign: TextAlign.center,
        )
      ],
    );
  }
}
