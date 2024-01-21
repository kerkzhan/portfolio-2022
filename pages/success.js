import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Success! | Kerk Zhan</title>
        <meta name="description" content="Portfolio of Kerk Zhan" />
        <link rel="icon" href="/blob.svg" />
      </Head>

      <section className="kp-layout-section kp-layout-hero fade-in">
        <h1>Awesome!</h1>
        <p className="kp-stack-32">I'll get in touch with you as soon as I read your email.</p>
        <div>
          <Link href="/" className="kp-text-link" aria-selected="true">
            &#8592; Go back
          </Link>
        </div>
      </section>
    </>
  );
}
