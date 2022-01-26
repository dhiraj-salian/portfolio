class Personal {
  String name;
  String description;
  String image;

  Personal(this.name, this.description, this.image);

  Personal.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        description = json['description'],
        image = json['image'];

  Map<String, dynamic> toJson() => {
        'name': name,
        'description': description,
        'image': image,
      };
}
