import 'package:flutter/material.dart';

class GradientBorderCircleAvatar extends StatelessWidget {
  const GradientBorderCircleAvatar({
    Key? key,
    required this.borderSize,
    required this.radius,
    required this.assetImage,
    required this.gradient,
  }) : super(key: key);

  final double borderSize;
  final double radius;
  final ImageProvider<Object> assetImage;
  final Gradient gradient;

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
        gradient: gradient,
      ),
    );
  }
}
