import React, { useState, useEffect } from "react";
import styles from "../../styles/BlogPost.module.css";
import Link from "next/link";

const slug = (props) => {
  const [blogs, setBlogs] = useState(props.myBlogs);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> {blogs && blogs.title} </h1>
        <hr />
        <div>{blogs && blogs.content}</div>
        <Link href={"/blog"} className={styles.back}>
          Back
        </Link>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  const myBlogs = await data.json();

  return { props: { myBlogs } };
}

export default slug;
