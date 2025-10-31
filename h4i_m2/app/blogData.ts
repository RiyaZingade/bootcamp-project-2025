export type Blog = {
	title: string;
	description: string;
    image: string;
    slug: string;
};

const blogs: Blog[] = [
	{
		title: "TypeScript Basics",
		description: "first blog post",
        image: "/img1.jpg",
        slug: "blog1.html"
	},
	{
		title: "post2",
		description: "second blog post",
        image: "/img2.jpg",
        slug: "blog2.html"
	},
];

export default blogs; //allow us to access this data anywhere
