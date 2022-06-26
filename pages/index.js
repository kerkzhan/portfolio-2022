import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Boon Kerk Zhan</title>
        <meta
          name="description"
          content="Kerk is a self-taught web developer with a focus on learning and creating design systems to create a more flexible web."
        />
        <link rel="icon" href="/blob.svg" />
      </Head>
      <section id="hero">
        <h1>{`brb.`}</h1>
        <h2>{`making a website`}</h2>
      </section>

      <footer>
        <p>might also be bouldering</p>
      </footer>
    </Layout>
  );
}
