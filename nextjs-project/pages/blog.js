import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.id} className={styles.blogItem}>
              <Link href={`blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                <hr style={{ border: "1px solid #cdc3c3" }} />
                <p className={styles.blogItemp}>
                  {blogitem.metadesc.substr(0, 100)}...
                </p>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    console.log(item);
    const myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  return { props: { allBlogs } };
}

export default Blog;
