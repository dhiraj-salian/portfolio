import 'package:flutter/material.dart';

import 'common.dart';

class AnimatedProfile extends StatelessWidget {
  const AnimatedProfile({
    Key? key,
    required this.name,
  }) : super(key: key);

  final String name;

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder(
      child: Profile(
        name: name,
      ),
      duration: const Duration(
        seconds: 1,
        milliseconds: 500,
      ),
      tween: Tween<double>(
        begin: 0,
        end: 1,
      ),
      curve: Curves.easeIn,
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
  }) : super(key: key);

  final String name;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        const GradientBorderCircleAvatar(
          borderSize: 5,
          radius: 150.0,
          assetImage: AssetImage('assets/images/me.jpg'),
          colors: [
            Color.fromRGBO(213, 112, 34, 1),
            Color.fromRGBO(168, 0, 111, 1)
          ],
        ),
        Text(
          name,
          style: const TextStyle(
            fontFamily: 'DancingScript',
            color: Colors.white70,
            fontSize: 110,
          ),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
