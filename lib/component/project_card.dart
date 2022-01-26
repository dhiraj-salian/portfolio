import 'package:flutter/material.dart';

import '../model/project.dart';
import '../util/common.dart';

class ProjectCard extends StatelessWidget {
  const ProjectCard({
    Key? key,
    required this.project,
  }) : super(key: key);

  final Project project;

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
                    image: AssetImage(project.image),
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
                      project.title,
                      style: Theme.of(context).textTheme.headline3,
                    ),
                    const Spacer(),
                    Text(
                      project.description,
                      style: Theme.of(context).textTheme.bodyText1,
                      overflow: TextOverflow.ellipsis,
                      maxLines: 3,
                    ),
                    const Spacer(),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        if (project.demoUrl != null)
                          TextButton(
                            onPressed: () => launchUrl(project.demoUrl!),
                            child: const Text('TRY IT'),
                          ),
                        if (project.blogUrl != null)
                          TextButton(
                            onPressed: () => launchUrl(project.blogUrl!),
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
