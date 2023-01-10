import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/images/logo.png";
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-5 backz">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src={logo}
        alt="logo-image"
        priority
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
        <h2 className="phoneNumber">call +91 11-69020000 for reservation</h2>
      </div>
    </div>
  );
};

export default Home;
