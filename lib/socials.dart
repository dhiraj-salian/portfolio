import 'package:flutter/material.dart';

import 'common.dart';

class Socials extends StatelessWidget {
  const Socials({
    Key? key,
    required this.socials,
  }) : super(key: key);

  final List socials;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      alignment: WrapAlignment.center,
      spacing: 20,
      children: [
        for (var social in socials)
          RotatingIconAvatar(
            name: social['name'],
            path: social['path'],
            link: social['link'],
          )
      ],
    );
  }
}
