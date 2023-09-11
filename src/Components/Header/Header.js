import Link from "next/link";

import styles from './Header.module.scss';

import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.line}></div>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
        <div className={styles.navLinks}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/tokenomics">Tokenomics</Link>
                <Link href="/buy">How To Buy</Link>
        </div>
            <div style={{color:'white',fontSize:'1em', position: 'absolute', backgroundColor:'#1e0f84',textAlign:'center',
        inset: '0 75% 0 0'}}>
                <p> ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ </p>
                <p> ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ </p>
                <p> ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ </p>
                </div>

            <div className={styles.socialLinks}>
                <a href="#" id={styles.dex}><span><img src='/icons/dextools.svg' alt='DexTools' /></span></a>
                <a href="#" id={styles.uniswap}><span><img src='/icons/uniswap.svg' alt='Uniswap' /></span></a>
                <a href="#" id={styles.twitter}><span><FaXTwitter /></span></a>
                <a href="#" id={styles.telegram}><span><FaTelegramPlane /></span></a>
            </div>

        </header>
    );
}