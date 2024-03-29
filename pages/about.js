import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import cats from "../images/cats.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>About | Kerk Zhan</title>
        <meta name="description" content="Portfolio of Kerk Zhan" />
        <link rel="icon" href="/blob.svg" />
      </Head>

      <section className="kp-layout-section kp-layout-about fade-in">
        <div className="kp-stack-32">
          <h1 className="kp-stack-4">The Past.</h1>
          <p className="kp-stack-32">
            Growing up, I fell in love with retro games. The technical skill required in both art
            and programming inspired me. At a young age of 10, I began my journey into creating{" "}
            <a
              href="https://www.artstation.com/kayzed"
              target="_blank"
              rel="noopener noreferrer"
              className="kp-text-link"
            >
              pixel art
            </a>
            .
          </p>
          <p>
            Eventually, I would find myself picking up Game Programming in college to pursue that
            passion. However, during an internship, I was introduced to web development and the rest
            was history!
          </p>
        </div>
        <div className="kp-stack-32">
          <h1>The Present.</h1>
          <p className="kp-stack-32">
            Today, I am still furthering my knowledge of web development everyday. Right now, I am
            working on creating a database for local bouldering spots that rock climbers can use as
            a guidebook for information. You can check out my other{" "}
            <Link href="/work" className="kp-text-link">
              projects
            </Link>{" "}
            too.
          </p>

          <p className="kp-stack-32">
            As for hobbies, I spend my free time doing indoor rock climbing to keep healthy. I also
            love a good camping trip in nature to unwind!
          </p>
          <p className="kp-stack-32">Did I mention I have 3 cats? 😺</p>
          <div className="kp-img-container-fluid kp-stack-16">
            <Image src={cats} alt="photo of cats" layout="fill" objectFit="contain" />
          </div>
          <figcaption>(From front) Meet Genji, Finn, and Oliver!</figcaption>
        </div>
        <div>
          <h1>The Future.</h1>
          <p className="kp-stack-16">This is where you come in. </p>{" "}
          <Link href="/contact" className="kp-btn-resume">
            Get in touch.
          </Link>
        </div>
      </section>
    </>
  );
}
