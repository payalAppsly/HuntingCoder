import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { phone, desc, name, email };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success : ", data);
        alert("Thank you for submitting");
        setName("");
        setPhone("");
        setEmail("");
        setDesc("");
      })
      .catch((err) => {
        console.error("Error : ", err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "desc") {
      setDesc(value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <div className={styles.main}>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>
              Name
            </label>
            <br />
            <input
              type="text"
              className={styles.formcontrol}
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>
              Email address
            </label>
            <br />
            <input
              type="email"
              className={styles.formcontrol}
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>
              Phone
            </label>
            <br />
            <input
              type="phone"
              className={styles.formcontrol}
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-floating">
            <label htmlFor="desc">Description</label>
            <br />
            <textarea
              className={styles.formcontrol}
              placeholder="Leave a comment here"
              id="desc"
              name="desc"
              value={desc}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
