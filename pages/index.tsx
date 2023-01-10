import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import background from "../assets/images/back.png";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-5 backz">
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

      <Image
        src={logo}
        alt="logo-image"
        className="logoImage"
        height="300"
        width="400"
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
