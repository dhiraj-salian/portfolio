import 'package:flutter/material.dart';

import 'common.dart';

import 'package:url_launcher/url_launcher.dart';

class ProjectsPage extends StatelessWidget {
  const ProjectsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
          future: readProjectData(),
          initialData: const [],
          builder: (BuildContext context, AsyncSnapshot<dynamic> projects) {
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
                          for (var project in projects.data)
                            ProjectCard(
                                projectTitle: project['title'],
                                projectDescription: project['description'],
                                backgroundImage: AssetImage(project['image']),
                                demoUrl: project['demoUrl'],
                                blogUrl: project['blogUrl']),
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

class ProjectCard extends StatelessWidget {
  const ProjectCard({
    Key? key,
    required this.projectTitle,
    required this.projectDescription,
    required this.backgroundImage,
    this.demoUrl,
    this.blogUrl,
  }) : super(key: key);

  final String projectTitle;

  final String projectDescription;

  final String? demoUrl;

  final String? blogUrl;

  final ImageProvider<Object> backgroundImage;

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(20)),
      ),
      clipBehavior: Clip.antiAliasWithSaveLayer,
      color: const Color.fromRGBO(23, 21, 30, 1),
      child: Container(
        width: 500,
        constraints: const BoxConstraints(
          maxHeight: 300,
          maxWidth: 400,
        ),
        child: Column(
          children: [
            Expanded(
              flex: 11,
              child: Container(
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: backgroundImage,
                    fit: BoxFit.cover,
                  ),
                ),
                child: Opacity(
                  opacity: 0.55,
                  child: Container(
                    decoration: BoxDecoration(
                      gradient: getGradient(context),
                      backgroundBlendMode: BlendMode.colorBurn,
                    ),
                  ),
                ),
              ),
            ),
            Expanded(
              flex: 9,
              child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      projectTitle,
                      style: Theme.of(context).textTheme.headline3,
                    ),
                    const Spacer(),
                    Text(
                      projectDescription,
                      style: Theme.of(context).textTheme.bodyText1,
                      overflow: TextOverflow.ellipsis,
                      maxLines: 3,
                    ),
                    const Spacer(),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        if (demoUrl != null)
                          TextButton(
                            onPressed: () async {
                              if (await canLaunch(demoUrl!)) {
                                launch(demoUrl!);
                              }
                            },
                            child: const Text('TRY IT'),
                          ),
                        if (blogUrl != null)
                          TextButton(
                            onPressed: () async {
                              if (await canLaunch(blogUrl!)) {
                                launch(blogUrl!);
                              }
                            },
                            child: const Text('KNOW MORE'),
                          ),
                      ],
                    )
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
