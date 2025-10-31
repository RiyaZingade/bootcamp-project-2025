import styles from "./resume.module.css"

export default function ResumePage() {
  return (
      <main>
      <h1 className = {styles.pageTitle}>Resume</h1>
      <a href="resume.pdf" download >Open Resume</a>
      <div className={styles.resume}>
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.entry}>
                <h3 className = {styles.entryTitle}>Bachelor of Science in Software Engineering</h3>
                <p className = {styles.entryInfo}>California Polytechnic University, San Luis Obispo | Expected Graduation: May 2029</p>
            </div>
        </section>
<section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.entry}>
                <h3 className={styles.entryTitle}>Mathematics Instructor</h3>
                <p className={styles.entryInfo}>Mathnasium | Sep 2024 – May 2025</p>
                <p className={styles.entryDescription}>Taught algebra, geometry, and precalculus to middle/high school students. Improved student performance through individualized instruction.</p>
            </div>
            <div className={styles.entry}>
                <h3 className={styles.entryTitle}>App Developer</h3>
                <p className={styles.entryInfo}>Mazah App Development Group | Dec 2023 – Present</p>
                <p className={styles.entryDescription}>Awarded $10,000 National Geographic Slingshot Grant for innovative app concept. Developing back-end recipe features with API integration. Collaborating on mobile app design and functionality.</p>
            </div>
            <div className={styles.entry}>
                <h3 className={styles.entryTitle}>Intro to Java Instructor</h3>
                <p className={styles.entryInfo}>Dec 2023 – Mar 2024</p>
                <p className={styles.entryDescription}>Taught ~10 students over 10 weeks. Presented lecture slides, gave live coding demonstrations, and provided debugging support.</p>
            </div>
            <div className={styles.entry}>
                <h3 className={styles.entryTitle}>STEM Instructor</h3>
                <p className={styles.entryInfo}>InspiriGirls | Feb 2024 – Mar 2024</p>
                <p className={styles.entryDescription}>Designed projects, coursework, quizzes, and assignments for a 4-week program. Taught ~20 students in foundational computer science concepts.</p>
            </div>
            <div className={styles.entry}>
                <h3 className={styles.entryTitle}>Junior Academy Intern</h3>
                <p className={styles.entryInfo}>New York Academy of Sciences (NYAS) | 2023</p>
                <p className={styles.entryDescription}>Completed a 10-week global challenge on Ethical AI. Designed BiasShield, a framework integrating bias detection, fairness metrics, and transparent user feedback.</p>
            </div>
            <div className={styles.entry}>
                <h3 className={styles.entryTitle}>AI/ML Scholar</h3>
                <p className={styles.entryInfo}>Inspirit AI Program | Summer 2023</p>
                <p className={styles.entryDescription}>Studied supervised learning, neural networks, and computer vision. Applied ML to analyze telescope imagery for exoplanet discovery.</p>
            </div>
            <div className={styles.entry}>
                <h3 className={styles.entryTitle}>Web Developer Intern</h3>
                <p className={styles.entryInfo}>Creative Minds | Dec 2022 – Feb 2023</p>
                <p className={styles.entryDescription}>Updated and maintained Wix-based websites. Gained experience with HTML/CSS and UI customization.</p>
            </div>
        </section>

        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <ul className={styles.skillList}></ul>
        </section>

        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.entry}>
                <h3 className={styles.entryTitle}></h3>
                <p className={styles.entryInfo}></p>
                <p className={styles.entryDescription}></p>
            </div>
        </section>

        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Coursework</h2>
            <ul className={styles.courseList}></ul>
        </section>
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Activities</h2>
        </section>

        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Awards</h2>
        </section>

        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Interests</h2>
        </section>

        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>References</h2>
        </section>
      </div>
      {/* <footer className={styles.footer}>© 2025 Riya Zingade's Personal Website | All Rights Reserved</footer> */}

    </main>



  );
}