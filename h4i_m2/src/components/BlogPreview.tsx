import Image from "next/image";
import Link from "next/link";
import styles from "../../app/blog/blog.module.css";

type BlogProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

export default function BlogPreview({ title, description, image, slug }: BlogProps) {
  return (
    <div className={styles.blogCard}>
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className={styles.blogImage}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={`/${slug}`} className={styles.blogLink}>
        Read More →
      </Link>
    </div>
  );
}
