"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.scss";
import useSound from "use-sound";
import { MdOutlinePlayCircle, MdPauseCircleOutline } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  const video = useRef(null);
  const audios = [
    "/mp3/Trump.mp3",
    "/mp3/Obama_BG.mp3",
    "/mp3/Borat.mp3",
    "/mp3/The_Emperorr.mp3",
    "/mp3/Joe_with_BG.mp3",
  ];

  const [isMuted, setIsMuted] = useState(false);
  const [tempMuted, setTempMuted] = useState(false);
  const [testinomial, setTestinomial] = useState(false);

  const [trumpPlay, { pause: trumpPause }] = useSound(audios[0], {
    volume: 1,
    onend: () => pauseTestinomial(),
  });

  const [obamaPlay, { pause: obamaPause }] = useSound(audios[1], {
    volume: 1,
    onend: () => pauseTestinomial(),
  });

  const [boratPlay, { pause: boratPause }] = useSound(audios[2], {
    volume: 1,
    onend: () => pauseTestinomial(),
  });

  const [emperorPlay, { pause: emperorPause }] = useSound(audios[3], {
    volume: 1,
    onend: () => pauseTestinomial(),
  });

  const [joePlay, { pause: joePause }] = useSound(audios[4], {
    volume: 1,
    onend: () => pauseTestinomial(),
  });

  function playTestinomial(id) {
    if (testinomial) pauseTestinomial();

    setTempMuted(true);
    setTestinomial(id);

    switch (id) {
      case "trump":
        trumpPlay();
        break;
      case "obama":
        obamaPlay();
        break;
      case "borat":
        boratPlay();
        break;
      case "emperor":
        emperorPlay();
        break;
      case "joe":
        joePlay();
        break;
    }
  }

  function pauseTestinomial() {
    switch (testinomial) {
      case "trump":
        trumpPause();
        break;
      case "obama":
        obamaPause();
        break;
      case "borat":
        boratPause();
        break;
      case "emperor":
        emperorPause();
        break;
      case "joe":
        joePause();
        break;
    }

    setTempMuted(false);
    setTestinomial(false);
  }

  function playVideo(e) {
    if (e.srcElement.id === "yes") {
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
          <img
            src="/images/gif/trumpeyeroll.gif"
            alt="trump"
            id={styles.trump}
          />
        </div>
        <video
          src={"/america.mp4"}
          loop={true}
          ref={video}
          muted={isMuted || tempMuted}
        />
        <button className={styles.muteBtn} onClick={() => setIsMuted(!isMuted)}>
          <img src={isMuted ? "/icons/unmute.svg" : "/icons/mute.svg"} />
        </button>
        <div className={styles.bottomBar}>
          <img src="/images/soldier.png" alt="soldier" id={styles.soldier} />
          <div className={styles.rocketContainer}>
            <img src="/images/rocket.png" alt="rocket" id={styles.rocket} />
          </div>
          <img
            src="/images/gif/explosion.gif"
            alt="explosion"
            id={styles.explosion}
          />
          <img src="/images/gif/laden.gif" alt="laden" id={styles.laden} />
        </div>
      </section>

      <section className={styles.memeSection}>
        <div className={styles.filter}></div>
        <img src="/images/meme.svg" />
        <div className={styles.messageBox}>
          <img src="/images/box.svg" alt="box" />
          <p>
            <a href="#">CLICK HERE</a> FOR THE FAT STIMMY
          </p>
        </div>
        <img src="/images/plane.png" alt="plane" id={styles.jet} />
      </section>

      <section className={styles.testinomialSection}>
        <div className={styles.filter}></div>

        <h1>
          IOO <img src="/icons/percentage.svg" alt="percentage" /> Real
          Testimonial
        </h1>

        <div className={styles.testinomialContainer}>
          <div className={styles.testinomial}>
            <img src="/images/testinomials/wizard-face.png" alt="wizard" />
            <button
              onClick={() => {
                testinomial === "emperor"
                  ? pauseTestinomial()
                  : playTestinomial("emperor");
              }}
            >
              {testinomial === "emperor" ? (
                <MdPauseCircleOutline />
              ) : (
                <MdOutlinePlayCircle />
              )}
            </button>
          </div>
          <div className={styles.testinomial}>
            <img src="/images/testinomials/obama-face.png" alt="obama" />
            <button
              onClick={() => {
                testinomial === "obama"
                  ? pauseTestinomial()
                  : playTestinomial("obama");
              }}
            >
              {testinomial === "obama" ? (
                <MdPauseCircleOutline />
              ) : (
                <MdOutlinePlayCircle />
              )}
            </button>
          </div>
          <div className={styles.testinomial}>
            <img src="/images/testinomials/borat-face.png" alt="borat" />
            <button
              onClick={() => {
                testinomial === "borat"
                  ? pauseTestinomial()
                  : playTestinomial("borat");
              }}
            >
              {testinomial === "borat" ? (
                <MdPauseCircleOutline />
              ) : (
                <MdOutlinePlayCircle />
              )}
            </button>
          </div>
          <div className={styles.testinomial}>
            <img src="/images/testinomials/joe-face.png" alt="joe" />
            <button
              onClick={() => {
                testinomial === "joe"
                  ? pauseTestinomial()
                  : playTestinomial("joe");
              }}
            >
              {testinomial === "joe" ? (
                <MdPauseCircleOutline />
              ) : (
                <MdOutlinePlayCircle />
              )}
            </button>
          </div>
          <div className={styles.testinomial}>
            <img src="/images/testinomials/trump-face.png" alt="trump" />
            <button
              onClick={() => {
                testinomial === "trump"
                  ? pauseTestinomial()
                  : playTestinomial("trump");
              }}
            >
              {testinomial === "trump" ? (
                <MdPauseCircleOutline />
              ) : (
                <MdOutlinePlayCircle />
              )}
            </button>
          </div>
        </div>
      </section>

      <div className={styles.explosions}>
        <img src="/images/gif/explosions.gif" alt="divider" />
      </div>

      <section className={styles.main}>
        <div className={styles.roadmap} id="roadmap">
          <h1>Roadmap</h1>

          <div className={styles.content}>
            <div className={styles.phase}>
              <div className={styles.title}>
                <h1 className={styles.titleHeading}>Phase 1</h1>
                <img src="/images/gif/explosion.gif" alt="explosion" />
              </div>
              <div className={styles.box}>
                <p>- $USD Token Launches</p>
                <p>- $USD Website Launches</p>
                <p>- $USD Reaches 1,000 Degen Hodlers</p>
                <p>- $USD Lists on CG and CMC</p>
                <p>- $USD on your Social Feed</p>
                <p>- #Buy$USD Starts Trending on Twitter</p>
              </div>
            </div>

            <div className={styles.phase}>
              <div className={styles.title}>
                <h1 className={styles.titleHeading}>Phase 2</h1>
                <img src="/images/gif/explosion.gif" alt="explosion" />
              </div>
              <div className={styles.box}>
                <p>- $USD Token Launches</p>
                <p>- $USD Website Launches</p>
                <p>- $USD Reaches 1,000 Degen Hodlers</p>
                <p>- $USD Lists on CG and CMC</p>
                <p>- $USD on your Social Feed</p>
                <p>- #Buy$USD Starts Trending on Twitter</p>
              </div>
            </div>

            <div className={styles.phase}>
              <div className={styles.title}>
                <h1 className={styles.titleHeading}>Phase 3</h1>
                <img src="/images/gif/explosion.gif" alt="explosion" />
              </div>
              <div className={styles.box}>
                <p>- $USD Token Launches</p>
                <p>- $USD Website Launches</p>
                <p>- $USD Reaches 1,000 Degen Hodlers</p>
                <p>- $USD Lists on CG and CMC</p>
                <p>- $USD on your Social Feed</p>
                <p>- #Buy$USD Starts Trending on Twitter</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tokenomics} id="tokenomics">
          <h1>Tokennomics</h1>
          <div className={styles.grid} style={{ textAlign: "center" }}>
            <div className={styles.box}>
              <p className={styles.akira}>O%</p>
              <p>BUY TAX</p>
            </div>

            <div className={styles.box}>
              <p className={styles.akira}>O%</p>
              <p>SELL TAX</p>
            </div>

            <div className={styles.box} style={{ gridColumn: "-1/1" }}>
              <p>SUPPLY</p>
              <p style={{ textAlign: "start" }} className={styles.akira}>
                IOO,OOO,OOO,OOO,OO (9O% ADDED TO UNISWAP)
              </p>
            </div>
          </div>
        </div>

        <div className={styles.buy} id="buy">
          <h1>How To Buy</h1>

          <div className={styles.grid}>
            <div className={styles.box}>
              <p>Step 1</p>
              <p className={styles.para}>
                Download Metamask or wallet of your choice from the app store or
                Google Play store for free. Desktop users, download the Google
                Chrome extension by going to metamask.io.
              </p>
            </div>

            <div className={styles.box}>
              <p>Step 2</p>
              <p className={styles.para}>
                Have ETH in your wallet to switch to $USD. If you don't have any
                ETH, you can buy directly on Metamask, transfer from another
                wallet, or buy on another exchange and send it to your wallet.
              </p>
            </div>

            <div className={styles.box}>
              <p>Step 3</p>
              <p className={styles.para}>
                Switch ETH for $USD. We have 0% taxes so you don't need to worry
                about buying with a specific slippage, although you may need to
                use slippage during times of market volatility.
              </p>
            </div>

            <div className={styles.box}>
              <p>Step 4</p>
              <p>Prepare for $USD</p>
              <p className={styles.para}>
                Contract Address: <br />
                OxOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div>
          <img src="/images/gallery/meme-1.png" alt="gallery" />
          <img src="/images/gallery/meme-1.gif" alt="gallery" />
        </div>
        <div>
          <img src="/images/gallery/meme-2.png" alt="gallery" />
          <img src="/images/gallery/meme-2.gif" alt="gallery" />
        </div>
        <div>
          <img src="/images/gallery/meme-3.png" alt="gallery" />
          <img src="/images/gallery/meme-3.gif" alt="gallery" />
        </div>
        <div>
          <img src="/images/gallery/meme-4.png" alt="gallery" />
          <img src="/images/gallery/meme-4.gif" alt="gallery" />
        </div>
        <div>
          <img src="/images/gallery/meme-5.png" alt="gallery" />
          <img src="/images/gallery/meme-5.gif" alt="gallery" />
        </div>
      </section>

      <h1
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "400",
        }}
      >
        Sponsored By
      </h1>
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
