import React, { useState, useEffect } from "react";
import styles from "../../styles/BlogPost.module.css";
import Link from "next/link";
import * as fs from "fs";

const Slug = (props) => {
  const [blogs, setBlogs] = useState(props.myBlogs);
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> {blogs && blogs.title} </h1>
        <hr />
        {blogs && <div dangerouslySetInnerHTML={createMarkup(blogs.content)} />}
        <Link href={"/blog"} className={styles.back}>
          Back
        </Link>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
      { params: { slug: "how-to-learn-reactjs" } },
    ],
    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlogs = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return { props: { myBlogs: JSON.parse(myBlogs) } };
}

export default Slug;
