import Link from "next/link";

import styles from './Header.module.scss';

import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'

export default function Header() {
    return (
        <header className={styles.header}>
            <p className={styles.stars}> ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ </p>

            <div className={styles.navContainer}>
                <div className={styles.lines}></div>

                <div className={styles.navLinks}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/tokenomics">Tokenomics</Link>
                    <Link href="/buy">How To Buy</Link>
                </div>

                <div className={styles.socialLinks}>
                    <a href="#" id={styles.dex}><span><img src='/icons/dextools.svg' alt='DexTools' /></span></a>
                    <a href="#" id={styles.uniswap}><span><img src='/icons/uniswap.svg' alt='Uniswap' /></span></a>
                    <a href="#" id={styles.twitter}><span><FaXTwitter /></span></a>
                    <a href="#" id={styles.telegram}><span><FaTelegramPlane /></span></a>
                </div>
            </div>

        </header>
    );
}