import 'package:flutter/material.dart';

import '../model/personal.dart';
import '../component/profile_avatar.dart';
import '../util/common.dart';

class ExpandingProfile extends StatelessWidget {
  const ExpandingProfile({
    Key? key,
    required this.personal,
    required this.borderSize,
    required this.radius,
  }) : super(key: key);

  final Personal personal;

  final double borderSize;

  final double radius;

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder(
      child: Profile(
        personal: personal,
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
    required this.personal,
    this.borderSize = 5,
    this.radius = 100,
  }) : super(key: key);

  final Personal personal;

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
          assetImage: AssetImage(personal.image),
          gradient: getGradient(context),
        ),
        const SizedBox(
          height: 20,
        ),
        Text(
          personal.name,
          style: Theme.of(context).textTheme.headline1,
          textAlign: TextAlign.center,
        ),
        const SizedBox(
          height: 20,
        ),
        Text(
          personal.description,
          style: Theme.of(context).textTheme.headline2,
          textAlign: TextAlign.center,
        )
      ],
    );
  }
}
