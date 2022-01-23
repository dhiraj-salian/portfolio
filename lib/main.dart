import 'package:flutter/material.dart';

import 'common.dart';
import 'portfolio.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'portfolio',
      home: const PortfolioPage(),
      theme: getThemeData(),
    );
  }
}
