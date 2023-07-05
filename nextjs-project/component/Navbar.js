import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.listContainer}>
          <Link href="/">
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href="/about">
            <li className={styles.listItem}>About</li>
          </Link>
          <Link href="/blog">
            <li className={styles.listItem}>Blog</li>
          </Link>
          <Link href="/contact">
            <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
