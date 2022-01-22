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
    return Padding(
      padding: const EdgeInsets.all(20.0),
      child: Wrap(
        alignment: WrapAlignment.center,
        spacing: 20,
        children: [
          for (var social in socials)
            ExpandingIconAvatar(
              name: social['name'],
              path: social['path'],
              link: social['link'],
            )
        ],
      ),
    );
  }
}
