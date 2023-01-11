import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import background from "../assets/images/back.png";
import birdRight from "../assets/images/right-bird.png";
import birdLeft from "../assets/images/left-bird.png";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const [isDesktop, setDesktop] = React.useState(false);
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 1430) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
    if (window.innerWidth < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    const updateMedia = () => {
      if (window.innerWidth > 1430) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
      if (window.innerWidth < 500) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden overflow-x-hidden  items-center justify-center backz ">
      <Head>
        <title>Royal-China</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080707" />
        <meta name="msapplication-navbutton-color" content="#080707" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#080707" />
      </Head>
      <div className="bgwrap">
        <Image
          src={background}
          alt="back-image"
          placeholder="blur"
          quality={100}
          fill
          sizes="120vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      {isDesktop ? (
        <>
          <motion.div
            animate={{
              x: 600,
              y: -600,
              transitionEnd: {
                display: "none",
              },
            }}
            transition={{
              ease: "easeOut",
              duration: 18,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              position: "fixed",
              top: "30%",
              left: 0,
            }}
          >
            <Image
              src={birdRight}
              height={300}
              priority
              width={300}
              quality={100}
              alt="bird-img"
            />
          </motion.div>
          <motion.div
            animate={{
              x: -400,
              y: 700,
              transitionEnd: {
                display: "none",
              },
            }}
            transition={{
              ease: "easeOut",
              duration: 18,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              position: "fixed",
              top: "40%",
              right: 0,
            }}
          >
            <Image
              src={birdLeft}
              height={430}
              priority
              width={430}
              quality={100}
              alt="bird-img"
            />
          </motion.div>
        </>
      ) : null}

      <Image
        src={logo}
        alt="logo-image"
        className="logoImage"
        priority
        height={isMobile ? 100 : 300}
        width={isMobile ? 200 : 400}
      />

      <h1 className="flex min-w-fit header">website under maintenance</h1>
      <h1 className="flex min-w-fit  header">we'll be back soon!</h1>

      <h2 className="flex min-w-fit text-center subtext">
        our restaurant is open for service
      </h2>
      <div className="phoneBox m-5">
        <h3 className="phoneNumber">call +91 11-69020000 for reservation</h3>
      </div>
    </div>
  );
};

export default Home;
