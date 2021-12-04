import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Dhiraj Salian',
      theme: ThemeData(),
      home: const PortfolioPage(),
    );
  }
}

class PortfolioPage extends StatelessWidget {
  const PortfolioPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: TweenAnimationBuilder(
        child: const Profile(),
        duration: const Duration(seconds: 1, milliseconds: 500),
        tween: Tween<double>(begin: 0, end: 1),
        builder: (_, double value, Widget? myChild) {
          return Transform.scale(
            scale: value,
            child: Opacity(
              opacity: value,
              child: myChild,
            ),
          );
        },
      ),
      backgroundColor: const Color.fromARGB(255, 15, 14, 21),
    );
  }
}

class Profile extends StatefulWidget {
  const Profile({
    Key? key,
  }) : super(key: key);

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  List _socials = [];

  @override
  void initState() {
    readJson();
  }

  Future<void> readJson() async {
    final String response =
        await rootBundle.loadString('assets/data/social.json');
    final data = await json.decode(response);
    setState(() {
      _socials = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: <Widget>[
          const Spacer(
            flex: 1,
          ),
          const GradientBorderCircleAvatar(
            borderSize: 5,
            radius: 150.0,
            assetImage: AssetImage('assets/images/me.jpg'),
            colors: [
              Color.fromRGBO(213, 112, 34, 1),
              Color.fromRGBO(168, 0, 111, 1)
            ],
          ),
          const Text(
            "Dhiraj Salian",
            style: TextStyle(
              fontFamily: 'DancingScript',
              color: Colors.white70,
              fontSize: 120,
            ),
          ),
          const Spacer(
            flex: 1,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              for (var social in _socials)
                IconAvatar(
                  name: social['name'],
                  path: social['path'],
                  link: social['link'],
                )
            ],
          ),
          const Spacer(
            flex: 1,
          ),
        ],
      ),
    );
  }
}

class IconAvatar extends StatelessWidget {
  const IconAvatar(
      {Key? key, required this.name, required this.path, required this.link})
      : super(key: key);

  final String name;
  final String path;
  final String link;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () async {
        if (await canLaunch(link)) {
          launch(link);
        }
      },
      customBorder: const CircleBorder(),
      child: Container(
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(
            color: Colors.white24,
            width: 0.6,
          ),
        ),
        child: CircleAvatar(
          backgroundColor: const Color.fromRGBO(23, 21, 30, 1),
          radius: 50,
          child: Image.asset(
            path,
            semanticLabel: name,
            width: 50,
          ),
        ),
      ),
    );
  }
}

class GradientBorderCircleAvatar extends StatelessWidget {
  const GradientBorderCircleAvatar({
    Key? key,
    required this.borderSize,
    required this.radius,
    required this.assetImage,
    required this.colors,
  }) : super(key: key);

  final double borderSize;
  final double radius;
  final ImageProvider<Object> assetImage;
  final List<Color> colors;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Padding(
        padding: EdgeInsets.all(borderSize),
        child: CircleAvatar(
          radius: radius,
          backgroundImage: assetImage,
        ),
      ),
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        gradient: LinearGradient(
          colors: colors,
        ),
      ),
    );
  }
}
