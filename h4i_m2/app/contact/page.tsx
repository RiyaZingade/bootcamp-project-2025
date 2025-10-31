import styles from "./contact.module.css";

export default function ContactPage() {
    return(
        <main>
            <h1 className={styles.pageTitle}>Contact</h1>
            <form className={styles.contactForm}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" required />
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" required />
                
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your message..." required></textarea>
                
                <input type="submit" value="Submit" />
            </form>
        </main>
    );
}