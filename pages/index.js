import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Kerk Zhan</title>
        <meta name="description" content="Portfolio of Kerk Zhan" />
        <link rel="icon" href="/blob.svg" />
      </Head>

      <section className="kp-layout-section kp-stack-128">
        <div className="kp-layout-hero fade-in">
          <div className="kp-hero-description">
            <b> Boon Kerk Zhan </b>(b. 1997, Malaysia)
            <p>
              Don't worry, this isn't one of those{" "}
              <span style={{ fontStyle: "italic" }}>
                "Hi, I'm{" "}
                <span style={{ textDecoration: "underline" }}>
                  {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
                </span>{" "}
              </span>
              👋" introductions.
            </p>
            <p>
              Frontend developer, game designer, and tech enthusiast. My hobbies
              include{" "}
              <Link href="/about">
                <a className="kp-text-link">climbing rocks</a>
              </Link>
              .
            </p>
            <p>
              I enjoy building intuitive and dynamic experiences that leave a
              lasting memory. Right now, I am learning how to create{" "}
              <strong>design systems</strong> for a more streamlined approach to
              web development.
            </p>
            <p>
              Check out my other{" "}
              <Link href="/work">
                <a className="kp-text-link">work</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
