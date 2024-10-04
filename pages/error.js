import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Error | Kerk Zhan</title>
        <meta name="description" content="Portfolio of Kerk Zhan" />
        <link rel="icon" href="/blob.svg" />
      </Head>

      <section className="kp-layout-section kp-layout-hero fade-in">
        <h1>{`Uh oh, I made an oopsie :(`}</h1>
        <p className="kp-stack-32">
          Something went wrong when submitting the form. Please try again, or email me directly at{" "}
          <strong>kerkzhanboon@gmail.com</strong>
        </p>
        <div>
          <Link href="/" className="kp-text-link" aria-selected="true">
            &#8592; Go back
          </Link>
        </div>
      </section>
    </>
  );
}
