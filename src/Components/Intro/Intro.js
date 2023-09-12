"use client";
import { useState } from "react";

import styles from "./Intro.module.scss";

export default function Intro() {
  const [hide, setHide] = useState(false);
  const [smile, setSmile] = useState(false);

  return (
    <div className={styles.introScreen} id={hide ? styles.hide : null}>
      
      <div className={styles.container}>
        <img src={smile ? "/intro-smile.png" : "/intro-text.png"} useMap="#image-map" />

        <map name="image-map">
          <area
            id="yes"
            alt="yes"
            href="#yes"
            coords="665,396,644,460,711,481,732,419"
            shape="poly"
            onMouseEnter={() => setSmile(true)}
            onMouseLeave={() => setSmile(false)}
            onClick={() => setHide(true)}
          />
          <area
            id="no"
            alt="no"
            href="https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization"
            target="_Blank"
            coords="777,434,753,496,818,520,838,456"
            shape="poly"
          />
        </map>
      </div>

      <div className={styles.eagles}>
        <div className={styles.eagleRow}>
          {[...Array(8).keys()].map((i) => (
            <div className={styles.slider} key={i}>
              {[...Array(15).keys()].map((j) => (
                <img key={j} src="/eagle.png" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}