import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogs from "../blogData"; // your blog data
import styles from "./blog.module.css"; // create this CSS module (below)

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Blog</h1>
      <div className={styles.blogContainer}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogCard}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className={styles.blogImage}
            />
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <Link href={`/${blog.slug}`} className={styles.readMore}>
              Read More →
            </Link>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        © 2025 Riya Zingade&apos;s Personal Website | All Rights Reserved
      </footer>
    </main>
  );
}
