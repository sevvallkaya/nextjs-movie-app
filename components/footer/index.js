import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/sevvallkaya" target="_blank">
        Şevval Kaya
      </Link>
    </footer>
  );
}

export { Footer };
