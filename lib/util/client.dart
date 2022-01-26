import 'package:flutter/services.dart';

import 'dart:convert';

Future<dynamic> getProjects() async {
  final String response =
      await rootBundle.loadString('assets/data/projects.json');
  final data = await json.decode(response);
  return data;
}

Future<dynamic> getSocials() async {
  final String response =
      await rootBundle.loadString('assets/data/socials.json');
  final data = await json.decode(response);
  return data;
}

Future<dynamic> getPersonal() async {
  final String response =
      await rootBundle.loadString('assets/data/personal.json');
  final data = await json.decode(response);
  return data;
}
