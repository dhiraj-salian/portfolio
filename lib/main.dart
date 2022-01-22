import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:portfolio/socials.dart';

import 'profile.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'portfolio',
      home: PortfolioPage(),
    );
  }
}

class PortfolioPage extends StatefulWidget {
  const PortfolioPage({Key? key}) : super(key: key);

  @override
  State<PortfolioPage> createState() => _PortfolioPageState();
}

class _PortfolioPageState extends State<PortfolioPage> {
  List _socials = [];
  var _personal;

  @override
  void initState() {
    super.initState();
    readSocialData();
    readPersonalData();
  }

  Future<void> readSocialData() async {
    final String response =
        await rootBundle.loadString('assets/data/social.json');
    final data = await json.decode(response);
    setState(() {
      _socials = data;
    });
  }

  Future<void> readPersonalData() async {
    final String response =
        await rootBundle.loadString('assets/data/personal.json');
    final data = await json.decode(response);
    setState(() {
      _personal = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            children: [
              if (_personal != null)
                ExpandingProfile(
                  name: _personal['name'],
                  description: _personal['description'],
                  image: _personal['image'],
                  borderSize: 5,
                  radius: 100,
                ),
              const SizedBox(
                height: 30,
              ),
              Socials(
                socials: _socials,
              ),
            ],
          ),
        ),
      ),
      backgroundColor: const Color.fromARGB(255, 15, 14, 21),
    );
  }
}
