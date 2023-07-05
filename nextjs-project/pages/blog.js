import React from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogItem}>
          <Link href={"blogpost/learn-javascript"}>
            {" "}
            <h3>How to Learn Javascript?</h3>
            <p>
              Javascript is the language used to design logic for the web page
            </p>
          </Link>
        </div>
        <div className={styles.blogItem}>
          <Link href={"blogpost/learn-javascript"}>
            <h3>How to Learn Javascript?</h3>
            <p>
              Javascript is the language used to design logic for the web page
            </p>
          </Link>
        </div>
        <div className={styles.blogItem}>
          <Link href={"blogpost/learn-javascript"}>
            <h3>How to Learn Javascript?</h3>
            <p>
              Javascript is the language used to design logic for the web page
            </p>
          </Link>
        </div>
        <div className={styles.blogItem}>
          <Link href={"blogpost/learn-javascript"}>
            <h3>How to Learn Javascript?</h3>
            <p>
              Javascript is the language used to design logic for the web page
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Blog;
