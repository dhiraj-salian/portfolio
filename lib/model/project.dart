class Project {
  String title;
  String description;
  String image;
  String? demoUrl;
  String? blogUrl;

  Project(this.title, this.description, this.image, this.demoUrl, this.blogUrl);

  Project.fromJson(Map<String, dynamic> json)
      : title = json['title'],
        description = json['description'],
        image = json['image'],
        demoUrl = json['demoUrl'],
        blogUrl = json['blogUrl'];

  Map<String, dynamic> toJson() => {
        'title': description,
        'description': description,
        'image': image,
        'demoUrl': demoUrl,
        'blogUrl': blogUrl,
      };
}
