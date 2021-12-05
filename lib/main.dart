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

  @override
  void initState() {
    super.initState();
    readSocialData();
  }

  Future<void> readSocialData() async {
    final String response =
        await rootBundle.loadString('assets/data/social.json');
    final data = await json.decode(response);
    setState(() {
      _socials = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            children: [
              const AnimatedProfile(
                name: 'Dhiraj Salian',
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
