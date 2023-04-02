import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Welcome to about page",
};

const About = () => {
  // throw new Error("Not today!")
  return (
    <>
      <h1>About</h1>

      <Link href="./">Home Page</Link>
    </>
  );
};

export default About;
