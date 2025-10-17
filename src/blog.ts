type Blog = {
	title: string;
	description: string;
    image: string;
    slug: string;
};

const blogs: Blog[] = [
	{
		title: "TypeScript Basics",
		description: "first blog post",
        image: "img1.jpg",
        slug: "blog1.html"
	},
	{
		title: "post2",
		description: "second blog post",
        image: "img2.jpg",
        slug: "blog2.html"
	},
];

const blogContainer = document.getElementById('blog-container')!;

blogs.forEach(blog => {
	const blogPost= document.createElement('div');

    const link = document.createElement('a');
    link.href = blog.slug;
    link.classList.add('blog-link');

    const title = document.createElement('h1');
    title.textContent = blog.title;
    blogPost.appendChild(title);

    const img = document.createElement('img');
    img.src = blog.image;
    blogPost.appendChild(img);

    const para = document.createElement('p');
    para.textContent = blog.description;
    blogPost.appendChild(para);

    blogContainer.appendChild(blogPost);
});