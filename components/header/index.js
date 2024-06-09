import React from "react";
import { RiMovie2Fill } from "react-icons/ri";
import Link from "next/link";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} containerA fluid`}>
      <div className="flex items-center justify-between">
        <Link href="/" className={`${styles.logo} flex items-center`}>
          <RiMovie2Fill /> NEXTFILM
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="/">MOVIES</Link>
          <Link href="/">SERIES</Link>
          <Link href="/">FAVORITE</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
