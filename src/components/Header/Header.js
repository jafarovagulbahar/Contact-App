import React from 'react';
import { Link } from "react-router-dom";
import { Layout } from "antd";
import  styles  from "./header.module.css";

export const HeaderMenu = () => {
  return (
    <Layout.Header className={styles.navbar}>
      <Link to="/">Contact</Link>

      <Link className={styles.btn} to="/add">
           Create Contact
       </Link>
    </Layout.Header>
  )
}
