import 'package:flutter/material.dart';
import 'profile.dart';
import 'projects.dart';
import 'socials.dart';

import 'common.dart';

class PortfolioPage extends StatelessWidget {
  const PortfolioPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
          future: Future.wait([readPersonalData(), readSocialData()]),
          initialData: const [null, []],
          builder: (BuildContext context, AsyncSnapshot<dynamic> data) {
            dynamic personal = data.data[0], socials = data.data[1];
            return GestureDetector(
              onVerticalDragUpdate: (details) {
                int sensitivity = 8;
                if (details.delta.dy < -sensitivity) {
                  Navigator.of(context)
                      .push(createProjectRoute(const ProjectsPage()));
                }
              },
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    if (personal != null)
                      ExpandingProfile(
                        name: personal['name'],
                        description: personal['description'],
                        image: personal['image'],
                        borderSize: 5,
                        radius: 100,
                      ),
                    const SizedBox(
                      height: 30,
                    ),
                    Socials(
                      socials: socials,
                    ),
                  ],
                ),
              ),
            );
          }),
      backgroundColor: Theme.of(context).colorScheme.background,
    );
  }
}
