import styles from "./portfolio.module.css"
import Image from "next/image";

export default function PortfolioPage() {
    return(
        <main>
            <h1 className={styles.pageTitle}>Portfolio</h1>
            <div className={styles.project}>
                <div className={styles.projectDetails}>
                    <Image
                        src="/img2.png"
                        alt="project"
                        width={400}
                        height={240}
                        className={styles.image}
                    />
                    <p className={styles.projectName}>Personal Website</p>
                    <p className={styles.projectDescription}>A website that showcases all of my projects throughout these last couple of years.</p>
                    <a href="#" className={styles.projectLink}>LEARN MORE</a>
                </div>
                
                <div className={styles.projectDetails}>
                    <Image
                        src="/img2.png"
                        alt="project"
                        width={400}
                        height={240}
                        className={styles.image}
                    />
                    <p className={styles.projectName}>Another Project</p>
                    <p className={styles.projectDescription}>Description of another amazing project I've worked on.</p>
                    <a href="#" className={styles.projectLink}>LEARN MORE</a>
                </div>
            </div>
        </main>
    );
}