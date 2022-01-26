import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

ThemeData getThemeData() {
  ThemeData base = ThemeData.dark();
  return base.copyWith(
    colorScheme: base.colorScheme.copyWith(
      primary: const Color.fromRGBO(168, 0, 111, 1.0),
      secondary: const Color.fromRGBO(213, 112, 34, 1),
      background: const Color.fromARGB(255, 15, 14, 21),
      surface: const Color.fromRGBO(23, 21, 30, 1),
      onBackground: Colors.white54,
      onSurface: Colors.white70,
    ),
    textTheme: base.textTheme.copyWith(
      headline1: base.textTheme.headline1!.copyWith(
        fontFamily: 'DancingScript',
        fontSize: 50,
      ),
      headline2: base.textTheme.headline2!.copyWith(
        fontSize: 30,
      ),
      headline3: base.textTheme.headline3!.copyWith(
        fontSize: 20,
      ),
      bodyText1: base.textTheme.bodyText1!.copyWith(
        fontSize: 14,
      ),
    ),
  );
}

Route createProjectRoute(Widget destinationPage) {
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => destinationPage,
    transitionDuration: const Duration(
      seconds: 1,
    ),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      const begin = Offset(0.0, 1.0);
      const end = Offset.zero;
      const curve = Curves.ease;

      var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));

      return SlideTransition(
        position: animation.drive(tween),
        child: child,
      );
    },
  );
}

LinearGradient getGradient(BuildContext context) {
  return LinearGradient(
    colors: [
      Theme.of(context).colorScheme.secondary,
      Theme.of(context).colorScheme.primary,
    ],
  );
}

dynamic launchUrl(String link) async {
  if (await canLaunch(link)) {
    launch(link);
  }
}

Widget getProgressIndicator(BuildContext context) {
  return const Center(
    child: CircularProgressIndicator(),
  );
}
