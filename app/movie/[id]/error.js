"use client";
import React from "react";
import Link from "next/link";

function Movie404() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1>An error has occurred. Sorry for that!</h1>
      <Link href="/" className="underline text-lg mt-2">
        Go home
      </Link>
    </div>
  );
}

export default Movie404;
