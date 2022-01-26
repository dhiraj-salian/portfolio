import 'package:flutter/material.dart';

import '../model/social.dart';
import 'icon_avatar.dart';

class Socials extends StatelessWidget {
  const Socials({
    Key? key,
    required this.socials,
  }) : super(key: key);

  final List<Social> socials;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20.0),
      child: Wrap(
        alignment: WrapAlignment.center,
        spacing: 20,
        runSpacing: 10,
        children: [
          for (Social social in socials)
            ExpandingIconAvatar(
              name: social.name,
              icon: social.icon,
              link: social.link,
            )
        ],
      ),
    );
  }
}
