var blogs = [
    {
        title: "TypeScript Basics",
        description: "Different aspects/characteristics of Typescript",
        image: "img1.jpg",
        slug: "blog1.html",
    },
    {
        title: "post2",
        description: "second blog post",
        image: "img2.png",
        slug: "blog2.html",
    },
];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogPost = document.createElement('div');

    var link = document.createElement('a');
    link.href = blog.slug;

    var title = document.createElement('h1');
    title.textContent = blog.title;
    link.appendChild(title);

    var img = document.createElement('img');
    img.src = "../" + blog.image;
    link.appendChild(img);

    var para = document.createElement('p');
    para.textContent = blog.description;
    link.appendChild(para);

    blogPost.appendChild(link);

    blogContainer.appendChild(blogPost);
});
