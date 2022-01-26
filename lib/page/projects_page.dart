import 'package:flutter/material.dart';

import '../model/project.dart';
import '../component/project_card.dart';
import '../util/common.dart';
import '../util/client.dart';

class ProjectsPage extends StatelessWidget {
  const ProjectsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
          future: getProjects(),
          builder: (BuildContext context, AsyncSnapshot<dynamic> data) {
            if (!data.hasData) {
              return getProgressIndicator(context);
            }
            List<Project> projects =
                List<Project>.from(data.data.map((p) => Project.fromJson(p)));
            return SingleChildScrollView(
              child: Center(
                child: Column(
                  children: [
                    const SizedBox(
                      height: 20.0,
                    ),
                    Text(
                      'Projects',
                      style: Theme.of(context).textTheme.headline1,
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(
                      height: 40.0,
                    ),
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: Wrap(
                        alignment: WrapAlignment.center,
                        spacing: 15,
                        runSpacing: 15,
                        children: [
                          for (Project project in projects)
                            ProjectCard(project: project,)
                        ],
                      ),
                    ),
                    const SizedBox(
                      height: 40.0,
                    )
                  ],
                ),
              ),
            );
          }),
      backgroundColor: Theme.of(context).colorScheme.background,
    );
  }
}
