import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Engineer</p>
        <p>
          This is just me practicing some next.js instead of wasting time
          playing games. Go me right?
        </p>
      </section>
    </Layout>
  );
}
