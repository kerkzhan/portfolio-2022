import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact | Kerk Zhan</title>
        <meta name="description" content="Portfolio of Kerk Zhan" />
        <link rel="icon" href="/blob.svg" />
      </Head>

      <section className="kp-layout-section kp-layout-hero fade-in">
        <h1>Lets work together.</h1>
        <p className="kp-stack-32">
          or shoot me an email directly at <strong>kerkzhan@gmail.com</strong>
        </p>
        <div>
          <form
            className="kp-form-container"
            name="contact"
            action="/success"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="kp-form-fields">
              <div className="kp-form-field">
                <input type="text" name="name" placeholder="Name" aria-required="true" required />
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
      </section>
    </>
  );
}
