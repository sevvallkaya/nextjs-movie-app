import React from "react";
import Link from "next/link";

function Movie404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold mb-4">
        We couldn't find the movie you're looking for!
      </h1>
      <Link href="/" className="underline text-lg mt-2">
        Go home
      </Link>
    </div>
  );
}

export default Movie404;
