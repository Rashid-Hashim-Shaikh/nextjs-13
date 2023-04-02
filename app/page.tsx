import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "This is Home Page"
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>hello</h1>
      <Link href="/about">Go to about page</Link>
      <Link href="/users">Users Page</Link>
    </main>
  );
}
