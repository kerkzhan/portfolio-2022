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
          <title>Contact | Kerk Zhan</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/blob.svg" />
        </Head>

        <section className="kp-layout-section kp-layout-hero ">
          <Fade>
            <h1>Lets work together</h1>
            <p className="kp-stack-32">
              or shoot me an email directly at{" "}
              <strong>kerkzhan@gmail.com</strong>
            </p>
            <div>
              <form
                className="kp-form-container"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="kp-form-fields">
                  <div className="kp-form-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      aria-required="true"
                      required
                    />
                  </div>
                  <div className="kp-form-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      aria-required="true"
                      required
                    />
                  </div>
                  <div className="kp-form-field">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="kp-form-field"
                      aria-required="true"
                      rows="5"
                      required
                      spellCheck="false"
                    />
                  </div>
                </div>
                <button type="submit" className="kp-btn-resume">
                  <p>Send Message</p>
                </button>
              </form>
            </div>
          </Fade>
        </section>
      </div>
    </Layout>
  );
}
