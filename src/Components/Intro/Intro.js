"use client";
import { useState } from "react";

import styles from "./Intro.module.scss";

export default function Intro() {
  const [hide, setHide] = useState(false);
  const [smile, setSmile] = useState(false);

  return (
    <div className={styles.introScreen} id={hide ? styles.hide : null}>
      
      <div className={styles.container}>
        <img src={smile ? "/intro-smile.webp" : "/intro.webp"} useMap="#image-map" style={styles.introImg} />

        <div className={styles.btnContainer}>
          <span>
            <a 
              href="#yes" 
              id="yes"
              onClick={() => setHide(true)}
              onMouseEnter={() => setSmile(true)}
              onMouseLeave={() => setSmile(false)}
            >
              Yes
            </a>
            <a href="https://www.uscis.gov/citizenship/apply-for-citizenship" target="_Blank">No</a>
          </span>
        </div>
      </div>

      <div className={styles.eagles}>
        <div className={styles.eagleRow}>
          {[...Array(8).keys()].map((i) => (
            <div className={styles.slider} key={i}>
              {[...Array(15).keys()].map((j) => (
                <img key={j} src="/eagle.webp" />
              ))}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );

}