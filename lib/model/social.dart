class Social {
  String name;
  String icon;
  String link;

  Social(this.name, this.icon, this.link);

  Social.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        icon = json['icon'],
        link = json['link'];

  Map<String, dynamic> toJson() => {
        'name': name,
        'icon': icon,
        'link': link,
      };
}
