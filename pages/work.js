import Head from "next/head";
import Image from "next/image";
import SkillNodes from "../components/skillNodes";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import fazzLogo from "../images/fazzbiz-logo.svg";
import bumpLogo from "../images/bump-logo.svg";
import utopiaLogo from "../images/utopia-logo.svg";
import unitarLogo from "../images/unitar-logo.svg";
import lvlupLogo from "../images/lvlup-logo.svg";
import omniLogo from "../images/omni-logo.png";
import jain from "../images/jain.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Work | Kerk Zhan </title>
        <meta name="description" content="Portfolio of Kerk Zhan" />
        <link rel="icon" href="/blob.svg" />
      </Head>

      <section className="kp-stack-128">
        <div className="kp-layout-section kp-layout-about">
          <h1 className="kp-stack-64">My work.</h1>
          <div className="kp-layout-work-container">
            <div className="kp-layout-two-column">
              <div className="kp-img-container-fluid">
                <Image src={fazzLogo} alt="UNITAR Logo" layout="fill" objectFit="contain" />
              </div>
              <div>
                <h2>Fazz Business Design System</h2>
                <p className="kp-stack-32">
                  During my tenure, I took over and led the creation of the design system after the
                  departure of the previous senior engineer. Despite being only four months into my
                  role as a junior developer, I had gained enough trust and credibility to lead this
                  crucial domain. This achievement was made possible through the support of the
                  exceptional Frontend team at Fazz and the invaluable mentorship from other senior
                  developers.
                </p>
                <p className="kp-stack-32">
                  A significant part of my work involved implementing{" "}
                  <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">
                    Storybook
                  </a>
                  , an open-source tool that provides a sandbox environment for UI component
                  development. This implementation allowed our designers to easily view, interact
                  with, and test our components in isolation. To further enhance our development
                  process, we integrated Chromatic into our CI/CD pipeline. This integration enabled
                  automated UI testing and visual regression testing, ensuring consistency and
                  catching potential issues early in the development cycle.
                </p>

                <SkillNodes skills={["React", "Styled Components", "Storybook", "Chromatic"]} />
              </div>
            </div>
            <div className="kp-layout-two-column">
              <div className="kp-img-container-fluid">
                <Image
                  src={bumpLogo}
                  alt="BUMP Bouldering Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div>
                <h2>
                  BUMP Bouldering
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://bb-website.netlify.app/"
                  >
                    <FiExternalLink style={{ height: 20 }} />
                  </a>
                </h2>

                <p className="kp-stack-32">
                  While building their website as a full-time employee, I also concurrently taught
                  classes as a climbing coach and created online tools to ease day-to-day operations
                  such as Chrome extensions.
                </p>

                <p>
                  The main website contains many hero images and big visuals, so optimizing the
                  images with modern file formats was a priority to drive customers to check the
                  physical location out. I utilized the <code>gatsby-plugin-image</code> to help
                  with this. The plugin contains controls for lazy loading, as well as responsive
                  images.
                </p>
                <SkillNodes skills={["React", "Gatsby", "Tailwind"]} />
              </div>
            </div>

            <div className="kp-layout-two-column">
              <div className="kp-img-container-fluid">
                <Image src={utopiaLogo} alt="Utopia Labs Logo" layout="fill" objectFit="contain" />
              </div>
              <div>
                <h2>
                  Offramps.eth
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://offramps.utopialabs.com/"
                  >
                    <FiExternalLink style={{ height: 20 }} />
                  </a>
                </h2>

                <p className="kp-stack-32">
                  I was brought on to transform their Figma designs into a functional webapp.
                  Although I wasn't a full-time employee, I contributed more than just code. I
                  offered feedback on the designs, which helped shape the final look of the product.
                  It was great to see my input valued, demonstrating that I bring both technical
                  skills and design sensibility to the table.
                </p>

                <p>
                  This project marked my first venture into the Web3 space, making it particularly
                  interesting. Working with the team, I gained valuable insights into this emerging
                  field. The project had tight deadlines and required rapid development, giving me a
                  taste of the startup pace. I embraced this fast-paced environment and thoroughly
                  enjoyed the experience, learning a lot about efficient project delivery in the
                  process.
                </p>
                <SkillNodes skills={["Next.js", "React", "Tailwind"]} />
              </div>
            </div>

            <div className="kp-layout-two-column">
              <div className="kp-img-container-fluid">
                <Image src={omniLogo} alt="Omni Cables Logo" layout="fill" objectFit="contain" />
              </div>
              <div>
                <h2>
                  Ωmni Cables
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://web.facebook.com/omnicables"
                  >
                    <FiExternalLink style={{ height: 20 }} />
                  </a>
                </h2>
                <p className="kp-stack-32">
                  Noticing a gap in the market in SEA and the absurd prices to get a product from
                  overseas, I created the first mouse paracording service in Malaysia. My goal was
                  to create affordable cables, raise technical knowledge about mice, as well as
                  create a community of mouse enthusiasts and modders in Malaysia.
                </p>

                <p>
                  Right now, I maintain 2 Facebook pages with over 8000 members as an admin ensuring
                  high quality discussions. I'm glad my hobbies and interests can help increase
                  general public's knowledge about Right to Repair. If you have an interest to
                  collaborate about gaming mice, contact me!
                </p>
              </div>
            </div>

            <div className="kp-layout-two-column">
              <div className="kp-img-container-fluid">
                <Image src={jain} alt="Omni Cables Logo" layout="fill" objectFit="contain" />
              </div>
              <div>
                <h2>
                  JainBot
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/kerkzhan/jainbot"
                  >
                    <FiGithub fill={"black"} style={{ height: 20 }} />
                  </a>
                </h2>

                <p className="kp-stack-32">
                  As an avid gamer since I was kid, I always like to keep up-to-date with the latest
                  games that are released. However, games are also expensive, and I can't buy every
                  single AAA game that comes out unless I want to live off rice and soy sauce.
                </p>

                <p>
                  Luckily for me, just for research purposes (I do not download them), I can view
                  games that have{" "}
                  <a
                    className="kp-text-link"
                    href="https://www.quora.com/What-is-a-repacked-game#:~:text=A%20repacked%20game%20is%20a%20game%20that%20has%20been%20compressed,torrent%20or%20direct%20download%20websites."
                  >
                    been repacked
                  </a>
                  . But going to the website everyday to check is troublesome, so I decided to
                  create a Discord Bot that would scrape the RSS feed and parse the data into
                  individual nuggets of information per game. This would run every day and post it
                  to my Discord channel so I can read the updates in the format that I desire.
                </p>
                <SkillNodes skills={["Node.js", "Discord.js", "Fly.io"]} />
              </div>
            </div>

            <div className="kp-layout-two-column">
              <div className="kp-img-container-fluid">
                <Image src={unitarLogo} alt="UNITAR Logo" layout="fill" objectFit="contain" />
              </div>
              <div>
                <h2>Hit the Score Quiz App</h2>
                <p className="kp-stack-32">
                  During my internship, I've had the honor of taking on a project from a client all
                  by myself. This was the biggest task I've taken on at the time as an intern and I
                  learnt a lot from leading this project.
                </p>
                <p className="kp-stack-32">
                  The app had two parts, an admin dashboard which teachers had access to create,
                  plan, and organize quizzes as well as view their students' scores. The second part
                  was the client app where students would log in to take part in these quizzes.
                </p>

                <p>
                  With this project, I learnt how to request, post and aggregate data from a NOSQL
                  database such as <code>MongoDB</code> and tie it all together.
                </p>
                <SkillNodes
                  skills={["React Admin", "Gatsby", "Tailwind", "MongoDB", "Netlify functions"]}
                />
              </div>
            </div>

            <div className="kp-layout-two-column">
              <div className="kp-img-container-fluid">
                <Image src={lvlupLogo} alt="LevelUP Logo" layout="fill" objectFit="contain" />
              </div>
              <div>
                <h2>LevelUp</h2>
                <p className="kp-stack-32">
                  Due to pandemic in 2020, one of SEA's biggest gaming events had to cancel live
                  events and they decided to do a virtual gaming event.
                </p>

                <p className="kp-stack-32">
                  I was tasked to help develop the event website and gather information from the
                  vendors that would be attending this virtual event.
                </p>

                <p>
                  One of the highlights was the vendor page on the website, where there would be a
                  image grid of vendors with their showcased game. You could click on an image and
                  it would lead to a server-side generated website based on the <code>[uid]</code>{" "}
                  of the vendor. This information was collected prior using a separate simple
                  website with a form which I also developed.
                </p>
                <SkillNodes skills={["Gatsby", "Tailwind", "MongoDB", "Netlify functions"]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
