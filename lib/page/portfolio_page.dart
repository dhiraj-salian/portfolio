import 'package:flutter/material.dart';

import 'projects_page.dart';
import '../model/personal.dart';
import '../model/social.dart';
import '../component/profile.dart';
import '../component/socials.dart';
import '../util/common.dart';
import '../util/client.dart';

class PortfolioPage extends StatelessWidget {
  const PortfolioPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
          future: Future.wait([getPersonal(), getSocials()]),
          builder: (BuildContext context, AsyncSnapshot<dynamic> data) {
            if (!data.hasData) {
              return getProgressIndicator(context);
            }
            Personal personal = Personal.fromJson(data.data[0]);
            List<Social> socials =
                List<Social>.from(data.data[1].map((s) => Social.fromJson(s)));
            return GestureDetector(
              onVerticalDragUpdate: (details) {
                int sensitivity = 10;
                if (details.delta.dy < -sensitivity) {
                  Navigator.of(context)
                      .push(createProjectRoute(const ProjectsPage()));
                }
              },
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Spacer(flex: 8),
                    ExpandingProfile(
                      personal: personal,
                      borderSize: 5,
                      radius: 100,
                    ),
                    const SizedBox(
                      height: 30,
                    ),
                    Socials(
                      socials: socials,
                    ),
                    const Spacer(flex: 8),
                    const Icon(Icons.keyboard_arrow_up_rounded),
                    const Text('Swipe Up for Projects'),
                    const Spacer(flex: 1),
                  ],
                ),
              ),
            );
          }),
      backgroundColor: Theme.of(context).colorScheme.background,
    );
  }
}
