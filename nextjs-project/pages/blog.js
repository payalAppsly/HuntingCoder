import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.id} className={styles.blogItem}>
              <Link href={`blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                <p className={styles.blogItemp}>
                  {blogitem.content.substr(0, 140)}...
                </p>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
