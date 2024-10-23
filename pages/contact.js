import Head from "next/head";
import { toast } from "sonner";
import { FiClipboard } from "react-icons/fi";

export default function Home() {
  function copyToClipboard() {
    const wordToCopy = "kerkzhanboon@gmail.com";
    navigator.clipboard
      .writeText(wordToCopy)
      .then(() => {
        toast.success(`Copied: ${wordToCopy}`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }

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
          shoot me an email directly at{" "}
          <strong>
            <span
              style={{
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
              onClick={() => copyToClipboard()}
            >
              kerkzhanboon@gmail.com <FiClipboard />
            </span>
          </strong>
        </p>
        {/* <div>
          <form
            className="kp-form-container"
            name="contact"
            action={"/api/send"}
            method="POST"
            encType="application/x-www-form-urlencoded"
          >
            <input
              type="text"
              name="realName"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />
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
        </div> */}
      </section>
    </>
  );
}
