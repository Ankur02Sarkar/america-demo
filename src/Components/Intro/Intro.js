"use client";

import { useState } from "react";
import styles from "./Intro.module.scss";

export default function Intro() {
  const [hide, setHide] = useState(false);
  return (
    <div className={styles.introScreen} id={hide ? styles.hide : null}>
      <div className={styles.container}>
      <h1>Are You American ?</h1>
      <div className={styles.btnContainer}>
        <a href="#" onClick={() => setHide(true)} id="yes">Yes</a>
        <a href="https://www.google.com" id="no" >No</a>
        </div>
        </div>
      </div>
  );

}