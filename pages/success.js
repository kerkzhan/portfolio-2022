import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Success! | Kerk Zhan</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/blob.svg" />
        </Head>

        <section className="kp-layout-section kp-layout-hero ">
          <Fade>
            <h1>Awesome!</h1>
            <p className="kp-stack-32">
              I'll get in touch with you as soon as I read your email.
            </p>
            <div>
              <Link href="/">
                <a aria-selected="true" className="kp-text-link">
                  Go back &#129042;
                </a>
              </Link>
            </div>
          </Fade>
        </section>
      </div>
    </Layout>
  );
}
