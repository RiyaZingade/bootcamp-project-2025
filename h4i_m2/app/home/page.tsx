import styles from "./home.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
      <main>
        <h1 className = {styles.pageTitle}>Welcome!</h1>

        <div className={styles.about}>
          <div className={styles.aboutImage}>
            <Image
              src="/picture.jpg"
              alt="me"
              width={400}
              height={300}
              className={styles.image}
            />
          </div>

          <div className={styles.aboutText}>
            <p>
              <b>Hello!</b> My name is <b>Riya Zingade</b>, and I am a first-year
              student at Cal Poly SLO majoring in <b>Software Engineering.</b>
            </p>
            <p>
              I am coming from <b>homestead High School</b> in <b>Cupertino, CA.</b>
            </p>
          </div>
        </div>
		<footer>
        © 2025 Riya Zingade&apos;s Personal Website | All Rights Reserved
      </footer>
      </main>



  );
}
