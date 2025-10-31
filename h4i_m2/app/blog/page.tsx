import styles from "./blog.module.css";
import blogs from "../blogData";
import Image from "next/image";
import Link from "next/link";
import BlogPreview from "@/components/BlogPreview";

export default function BlogPage() {
  return (
    <main>
      <h1 className={styles.pageTitle}>Blog</h1>
      <div className={styles.blogContainer}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogCard}>
            <BlogPreview
              key={index}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              slug={blog.slug}
            />
            {/* <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <Link href={`/${blog.slug}`} className = {styles.blogLink}>Read More →</Link> */}
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        © 2025 Riya Zingade&apos;s Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}
