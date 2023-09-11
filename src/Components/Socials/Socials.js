import styles from './Socials.module.scss';

import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'

export default function Socials () {
    return (
        <div className={styles.socialWindow}>
            <div className={styles.header}>
                <h2>Links.exe</h2>
            </div>

            <div className={styles.iconContainer}>
                <a href="#" id={styles.dex}>
                    <span><img src='/icons/dextools.svg' alt='DexTools' /></span>
                    DexTools
                </a>
                <a href="#" id={styles.uniswap}>
                    <span><img src='/icons/uniswap.svg' alt='Uniswap' /></span>
                    Uniswap
                </a>
                <a href="#" id={styles.twitter}>
                    <span><FaXTwitter /></span>
                    X
                </a>
                <a href="#" id={styles.telegram}>
                    <span><FaTelegramPlane /></span>
                    Telegram
                </a>
            </div>
        </div>
    )
}