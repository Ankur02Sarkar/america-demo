"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.scss';
import useSound from 'use-sound';
import { MdOutlinePlayCircle, MdPauseCircleOutline } from 'react-icons/md';

export default function Home() {
  const video = useRef(null);
  const audios = ['/mp3/Trump.mp3', '/mp3/Obama_BG.mp3', '/mp3/The_Emperorr.mp3', '/mp3/Joe_with_BG.mp3'];

  const [isMuted, setIsMuted] = useState(false);
  const [tempMuted, setTempMuted] = useState(false);
  const [testinomial, setTestinomial] = useState(false);

  const [trumpPlay, { pause: trumpPause }] = useSound(audios[0], {
    volume: 1,
    onend: () => pauseTestinomial()
  });

  const [obamaPlay, { pause: obamaPause }] = useSound(audios[1], {
    volume: 1,
    onend: () => pauseTestinomial()
  });

  const [emperorPlay, { pause: emperorPause }] = useSound(audios[2], {
    volume: 1,
    onend: () => pauseTestinomial()
  });

  const [joePlay, { pause: joePause }] = useSound(audios[3], {
    volume: 1,
    onend: () => pauseTestinomial()
  });

  function playTestinomial(id) {
    if (testinomial) pauseTestinomial();

    setTempMuted(true);
    setTestinomial(id);

    switch (id) {
      case 'trump': trumpPlay(); break;
      case 'obama': obamaPlay(); break;
      case 'emperor': emperorPlay(); break;
      case 'joe': joePlay(); break;
    }
  }

  function pauseTestinomial() {
    switch (testinomial) {
      case 'trump': trumpPause(); break;
      case 'obama': obamaPause(); break;
      case 'emperor': emperorPause(); break;
      case 'joe': joePause(); break;
    }

    setTempMuted(false);
    setTestinomial(false);
  }

  function playVideo(e) {
    if (e.srcElement.id === 'yes') {
      video.current.play();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", playVideo);
    video.current.play();

    return () => {
      document.removeEventListener("mousedown", playVideo);
    };
  }, []);

  return (
    <main className={styles.home}>
      <section className={styles.videoSection}>
        <div className={styles.topBar}>
          {/* <img src="/images/gif/machineGun.gif" alt="machine gun" id={styles.gun} /> */}
          <img src="/images/hands.png" alt="trump hands" id={styles.hands} />
          <img src="/images/trump.png" alt="trump" id={styles.trump} />
        </div>
        <video src={'/america.mp4'} loop={true} ref={video} muted={isMuted || tempMuted} />
        <button className={styles.muteBtn} onClick={() => setIsMuted(!isMuted)}>
          <img src={isMuted ? "/icons/unmute.svg" : "/icons/mute.svg"} />
        </button>
        <div className={styles.bottomBar}>
          <img src="/images/soldier.png" alt="soldier" id={styles.soldier} />
          <div className={styles.rocketContainer}>
            <img src="/images/rocket.png" alt="rocket" id={styles.rocket} />
          </div>
          <img src="/images/gif/explosion.gif" alt="explosion" id={styles.explosion} />
          <img src="/images/gif/laden.gif" alt="laden" id={styles.laden} />
        </div>
      </section>

      <section className={styles.memeSection}>
        <img src="/images/meme.svg" />
        <div className={styles.filter}></div>
        <img src="/images/plane.png" alt="plane" id={styles.jet} />
      </section>

      <section className={styles.testinomialSection}>
        <div className={styles.filter}></div>

        <h1>IOO <img src="/icons/percentage.svg" alt="percentage" /> Real Testimonial</h1>

        <div className={styles.testinomialContainer}>
          <div className={styles.testinomial}>
            <img src="/images/testinomials/trump-face.png" alt="trump" />
            <button onClick={() => { testinomial === 'trump' ? pauseTestinomial() : playTestinomial('trump') }}>
              {testinomial === 'trump' ? <MdPauseCircleOutline /> : <MdOutlinePlayCircle />}
            </button>
          </div>
          <div className={styles.testinomial}>
            <img src="/images/testinomials/obama-face.png" alt="obama" />
            <button onClick={() => { testinomial === 'obama' ? pauseTestinomial() : playTestinomial('obama') }}>
              {testinomial === 'obama' ? <MdPauseCircleOutline /> : <MdOutlinePlayCircle />}
            </button>
          </div>
          <div className={styles.testinomial}>
            <img src="/images/testinomials/borat-face.png" alt="borat" />
            <button><MdOutlinePlayCircle /></button>
          </div>
          <div className={styles.testinomial}>
            <img src="/images/testinomials/joe-face.png" alt="joe" />
            <button onClick={() => { testinomial === 'joe' ? pauseTestinomial() : playTestinomial('joe') }}>
              {testinomial === 'joe' ? <MdPauseCircleOutline /> : <MdOutlinePlayCircle />}
            </button>
          </div>
          <div className={styles.testinomial}>
            <img src="/images/testinomials/wizard-face.png" alt="wizard" />
            <button onClick={() => { testinomial === 'emperor' ? pauseTestinomial() : playTestinomial('emperor') }}>
              {testinomial === 'emperor' ? <MdPauseCircleOutline /> : <MdOutlinePlayCircle />}
            </button>
          </div>
        </div>
      </section>

      <div className={styles.explosions}>
        <img src="/images/gif/explosions.gif" alt="divider" />
      </div>

      <section className={styles.gallerySection}>
        <img src="/images/gif/gallery-1.gif" />
        <img src="/images/gif/gallery-2.gif" />
        <img src="/images/gif/gallery-3.gif" />
        <img src="/images/gif/gallery-4.gif" />
      </section>

      <h1 style={{ color: 'white', fontSize: '2rem', textAlign: 'center', fontWeight: '400' }}>Sponsored By</h1>
      <div className={styles.logoStrip}>
        <div className={styles.logoContainer}>
          <div className={styles.sliderContainer}>
            {[...Array(3).keys()].map((i) => (
              <div className={styles.slider} key={i}>
                <img src="/images/logos/image-0.png" alt="logo" />
                <img src="/images/logos/lockheedmartin-logo.png" alt="logo" />
                <img src="/images/logos/image-1.png" alt="logo" />
                <img src="/images/logos/walmart-logo.png" alt="logo" />
                <img src="/images/logos/image-2.png" alt="logo" />
                <img src="/images/logos/image-4.png" alt="logo" />
                {/* <img src="/images/logos/apple-logo.png" alt="logo" /> */}
                <img src="/images/logos/image-5.png" alt="logo" />
                <img src="/images/logos/image-6.png" alt="logo" />
                <img src="/images/logos/tesla-logo.png" alt="logo" />
                <img src="/images/logos/image-7.png" alt="logo" />
                <img src="/images/logos/image-8.png" alt="logo" />
                <img src="/images/logos/boeing-logo.png" alt="logo" />
                <img src="/images/logos/image-9.png" alt="logo" />
                <img src="/images/logos/image-10.png" alt="logo" />
                <img src="/images/logos/image-11.png" alt="logo" />
                <img src="/images/logos/rtx-logo.png" alt="logo" />
                <img src="/images/logos/image-12.png" alt="logo" />
                <img src="/images/logos/image-13.png" alt="logo" />
                <img src="/images/logos/image-14.png" alt="logo" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
