"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'

import styles from './Footer.module.scss';

import { IoHomeSharp, IoInformationCircleSharp } from 'react-icons/io5';
import { PiCoinsFill } from 'react-icons/pi';
import { FaQuestionCircle } from 'react-icons/fa';

export default function Footer ({isLoggedIn}) {
    const path = usePathname();
    return (
        <footer className={styles.footerContainer}>
            <button className={styles.startBtn}>BOGGED</button>
            <Link href="/" id={isLoggedIn && path === '/' ? styles.open : null}><span><IoHomeSharp id={styles.home}/> Home</span></Link>
            <Link href="/about" id={isLoggedIn && path === '/about' ? styles.open : null}><span><IoInformationCircleSharp id={styles.about}/> About</span></Link>
            <Link href="/tokenomics" id={isLoggedIn && path === '/tokenomics' ? styles.open : null}><span><PiCoinsFill id={styles.token}/> Tokenomics</span></Link>
            <Link href="/buy" id={isLoggedIn && path === '/buy' ? styles.open : null}><span><FaQuestionCircle id={styles.buy}/> How to Buy</span></Link>
        </footer>
    )
} 