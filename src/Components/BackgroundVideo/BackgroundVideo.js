"use client";

import { useEffect, useRef } from 'react';
import styles from './BackgroundVideo.module.scss';

export default function BackgroundVideo() {
    const video = useRef(null);

    function playVideo (e) {
        if(e.srcElement.id === 'yes'){
            video.current.play();
            console.log(e)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", playVideo);

        return () => {
            document.removeEventListener("mousedown", playVideo);
        };
    }, []);

    return (
        <div className={styles.videoContainer}>
            <video src={'/america.mp4'} loop={true} ref={video} />
        </div>
    )
}