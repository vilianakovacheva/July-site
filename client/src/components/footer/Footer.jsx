import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="footer">
            <div className={styles.container}>
                <div className={styles["logo-footer"]}>
                    <img src="./images/logo.png" alt="July Morning" />
                </div>
                <div className={styles.contacts}>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="./images/instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://dribbble.com/" target="_blank">
                        <img src="./images/dribble.png" alt="Dribble" />
                    </a>
                </div>
                <p className={styles.rights}>2024 July Morning. All rights reserved.</p>
            </div>
        </footer>

    );
}