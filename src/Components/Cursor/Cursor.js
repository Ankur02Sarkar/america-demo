"use client";

import { useState } from 'react';
import styles from './Cursor.module.scss';

import useCursor from '@/src/Hooks/useCursor';

export default function Cursor() {
    const cursor = useCursor();

    var cursorStyle = {
        transform: `translate(calc(${cursor.x}px - 8rem), calc(${cursor.y}px + 0.75rem)) rotate(-45deg)`
    };


    return (
        <div className={styles.cursorContainer}>
            <div className={styles.cursor} style={cursorStyle}>
                <img src="/gun.png" alt="gun" className={styles.cursorGun} />
                <img src="/muzzle.png" alt="muzzle" className={styles.muzzle} id={cursor.down ? styles.flash : null} />
            </div>
        </div>
    )
}