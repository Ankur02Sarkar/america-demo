"use client";
import Link from "next/link";

import styles from './Header.module.scss';

import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'
import { useState } from "react";

export default function Header() {
    const [zIndex, setZIndex] = useState(5);

    return (
        <header className={styles.header} style={{zIndex: zIndex}}>
            <img src="/images/flag-stars.svg" />

            <div className={styles.navContainer}>
                <div className={styles.lines}></div>

                <div className={styles.navLinks}>
                    <Link href="/#roadmap">Roadmap</Link>
                    <Link href="/#tokenomics">Tokenomics</Link>
                    <Link href="/#buy">How To Buy</Link>
                    <Link href="/declaration">Declaration</Link>
                    <span href="#links" id={styles.dropDownLink} onMouseEnter={() => setZIndex(10)} onMouseLeave={() => setZIndex(5)}>
                        Links <img src="/images/dropdown.svg" />
                        
                        <div className={styles.dropDown}>
                            <a href="https://thefed.io" target="_Blank">thefed.io</a>
                            <a href="https://americafuckyeah.xyz" target="_Blank">americafuckyeah.xyz</a>
                            <a href="https://jeffreybezos.xyz" target="_Blank">jeffreybezos.xyz</a>
                            <a href="https://americorp.xyz" target="_Blank">americorp.xyz</a>
                            <a href="https://gamestop.cc" target="_Blank">gamestop.cc</a>
                            <a href="https://jeromepowell.xyz" target="_Blank">jeromepowell.xyz</a>
                            <a href="https://jimcramer.xyz" target="_Blank">jimcramer.xyz</a>
                            <a href="https://bbcnewsnorthamerica.com" target="_Blank">bbcnewsnorthamerica</a>
                            <a href="https://joebiden.cc" target="_Blank">joebiden.cc</a>
                            <a href="https://burgerkingsnackwrap.com" target="_Blank">burgerkingsnackwrap.com</a>
                            <a href="https://cathiewoods.xyz" target="_Blank">cathiewoods.xyz</a>
                            <a href="https://cnnnewsamerica.com" target="_Blank">cnnnewsamerica.com</a>
                            <a href="https://markzuckerberg.cc" target="_Blank">markzuckerberg.cc</a>
                            <a href="https://drphil.cc" target="_Blank">drphil.cc</a>
                            <a href="https://f0rbesnews.com" target="_Blank">f0rbesnews.com</a>
                        </div>
                    </span>

                </div>

                <div className={styles.socialLinks}>
                    <a href="#" id={styles.telegram}><span><FaTelegramPlane /></span></a>
                    <a href="#" id={styles.twitter}><span><FaXTwitter /></span></a>
                    <a href="#" id={styles.dex}><span><img src='/icons/dextools.svg' alt='DexTools' /></span></a>
                    <a href="#" id={styles.uniswap}><span><img src='/icons/uniswap.svg' alt='Uniswap' /></span></a>
                </div>

            </div>

        </header>
    );
}