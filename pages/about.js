import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

import bumpLogo from "../images/bump-logo.svg";
import unitarLogo from "../images/unitar-logo.svg";
import lvlupLogo from "../images/lvlup-logo.svg";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>About | Kerk Zhan</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/blob.svg" />
        </Head>

        {/* <div className="kp-line"></div> */}
        <section className="kp-layout-section kp-stack-128">
          <div className="kp-layout-hero">
            <Fade>
              <p className="kp-hero-description">
                <strong> Boon Kerk Zhan </strong>(b. 1997, Malaysia)
                {/* is an <strong>independent web developer</strong> who loves
                exploring technology and its ever evolving state. */}
                <br />
                <br />
                Don't worry, this isn't one of those{" "}
                <span style={{ fontStyle: "italic" }}>
                  "Hi, I'm{" "}
                  <span style={{ textDecoration: "underline" }}>
                    {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
                  </span>{" "}
                </span>
                👋" introductions.
                <br />
                <br />
                Frontend developer, game designer, and tech enthusiast. I enjoy
                building intuitive and dynamic experiences that leave a lasting
                memory. I also like to{" "}
                <a className="kp-text-link">climb rocks</a>.
                <br /> <br />
                Right now, I am learning how to create{" "}
                <strong>design systems</strong> for a more streamlined approach
                to web development. You can learn more about me{" "}
                <a className="kp-text-link">here</a>.
              </p>
            </Fade>
          </div>
        </section>
      </div>
    </Layout>
  );
}