import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <style jsx>
          {`
            h2,
            h3 {
              line-height: 2;
            }
          `}
        </style>

        <div className={styles.description}>
          <h1>Hunting Coder</h1>
          <div className={styles.center}>
            <img
              className={styles.logo}
              src="/homeImage.jpg"
              alt="Next.js Logo"
              width={518}
              height={345}
            />
          </div>
          <h5>A blog for blogger A blog for blogger</h5>
        </div>

        <div className={styles.blogs}>
          <h2>Latest Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to Learn Javascript?</h3>
            <p>
              Javascript is the language used to design logic for the web page
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to Learn Javascript?</h3>
            <p>
              Javascript is the language used to design logic for the web page
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to Learn Javascript?</h3>
            <p>
              Javascript is the language used to design logic for the web page
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to Learn Javascript?</h3>
            <p>
              Javascript is the language used to design logic for the web page
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
