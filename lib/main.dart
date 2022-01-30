import 'package:flutter/material.dart';

import 'page/portfolio_page.dart';
import 'util/common.dart';

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
      home: const PortfolioPage(),
      theme: getThemeData(),
    );
  }
}
