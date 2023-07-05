import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import Link from "next/link";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> this is {slug} page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quas
          officiis sint maxime repellat eius doloribus accusamus sit ipsum
          commodi voluptate nulla explicabo enim cumque nobis accusantium
          maiores sequi, consequuntur ipsam. Eveniet eos recusandae placeat.
          Provident quaerat nobis sequi optio exercitationem, debitis molestiae
          hic, porro laborum adipisci, recusandae nam minima.
        </p>
        <Link href={"/blog"} className={styles.back}>
          Back
        </Link>
      </main>
    </div>
  );
};

export default slug;
