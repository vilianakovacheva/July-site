import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = () => {
        setShowSidebar(true);
      };
    
      const handleHideSidebar = () => {
        setShowSidebar(false);
      };
    return (
            <nav>
                <ul style={{ display: showSidebar ? 'flex' : 'none' }} className={styles.sidebar}>
                    <li onClick={handleHideSidebar}>
                        <Link to="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={26}
                                viewBox="0 96 960 960"
                                width={26}
                            >
                                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <a href="#footer">Контакти</a>
                    </li>
                    <li>
                        <Link to="/about">За нас</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/" className={styles.logo}>
                            <img src="./images/logo.png" alt="" />
                        </Link>
                    </li>
                    <li className={styles.hideOnMobile}>
                        <a href="#footer">Контакти</a>
                    </li>
                    <li className={styles.hideOnMobile}>
                        <Link to="/about">За нас</Link>
                    </li>
                    <li className={styles["menu-button"]} onClick={handleShowSidebar}>
                        <Link to="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height={26}
                                viewBox="0 96 960 960"
                                width={26}
                            >
                                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </nav>

    );
}