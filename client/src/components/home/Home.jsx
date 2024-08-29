import styles from './Home.module.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className={styles.forms}>
                <div className={styles.form1}>
                    <img src="./images/form1.png" alt="form1" />
                </div>
                <div className={styles.form2}>
                    <img src="./images/form2.png" alt="form2" />
                </div>
                <div className={styles.form3}>
                    <img src="./images/form3.png" alt="form3" />
                </div>
                <div className={styles.form4}>
                    <img src="./images/form4.png" alt="form4" />
                </div>
            </div>
            <section className={styles.introduction}>
                <div className={styles["introduction-content"]}>
                    <h1 className={styles.hello}>Здравейте, ние сме July Morning!</h1>
                    <h2 className={styles.who}>
                        Отбор от <br /> SUPERлятна академия
                    </h2>
                    <Link to="/about" className={styles["button-about"]}>
                        За нас
                    </Link>
                </div>
            </section>
            <section className={styles.skills}>
                <div className={styles.container}>
                    <h2>Нашите умения</h2>
                    <div className={styles["skills-list"]}>
                        <div className={styles.skill}>
                            <a
                                href="https://bg.wikipedia.org/wiki/Adobe_Photoshop"
                                target="_blank"
                            >
                                <img src="./images/photoshop.png" alt="Photoshop" />
                            </a>
                        </div>
                        <div className={styles.skill}>
                            <a
                                href="https://en.wikipedia.org/wiki/Adobe_InDesign"
                                target="_blank"
                            >
                                <img src="./images/adobe-indesign.png" alt="Adobe indesign" />
                            </a>
                        </div>
                        <div className={styles.skill}>
                            <a
                                href="https://bg.wikipedia.org/wiki/Adobe_Illustrator"
                                target="_blank"
                            >
                                <img src="./images/adobe-illustrator.png" alt="Adobe Illustrator" />
                            </a>
                        </div>
                        <div className={styles.skill}>
                            <a href="https://bg.wikipedia.org/wiki/JavaScript" target="_blank">
                                <img src="./images/javascript.png" alt="JavaScript" />
                            </a>
                        </div>
                        <div className={styles.skill}>
                            <a href="https://bg.wikipedia.org/wiki/HTML" target="_blank">
                                <img src="./images/html.png" alt="html" />
                            </a>
                        </div>
                        <div className={styles.skill}>
                            <a href="https://bg.wikipedia.org/wiki/CSS" target="_blank">
                                <img src="./images/css.png" alt="css" />
                            </a>
                        </div>
                        <div className={styles.skill}>
                            <a
                                href="https://bg.wikipedia.org/wiki/React_(%D1%83%D0%B5%D0%B1_%D1%84%D1%80%D0%B5%D0%B9%D0%BC%D1%83%D1%8A%D1%80%D0%BA)"
                                target="_blank"
                            >
                                <img src="./images/react.png" alt="react" />
                            </a>
                        </div>
                        <div className={styles.skill}>
                            <a href="https://bg.wikipedia.org/wiki/Node.js" target="_blank">
                                <img src="./images/nodejs.png" alt="nodejs" />
                            </a>
                        </div>
                        <div className={styles.skill}>
                            <a
                                href="https://en.wikipedia.org/wiki/Google_Analytics"
                                target="_blank"
                            >
                                <img src="./images/googleAnalytics.png" alt="Google Analytics" />
                            </a>
                        </div>
                        <div className={styles.skill}>
                            <a href="https://bg.wikipedia.org/wiki/Google_Ads" target="_blank">
                                <img src="./images/googleAds.png" alt="Google Ads" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}