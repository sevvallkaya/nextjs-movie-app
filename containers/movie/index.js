import FeaturedMovie from "@/components/featured-movie";
import React from "react";

function MovieContainer({ movie }) {
  return <FeaturedMovie isCompact={false} movie={movie} />;
}

export default MovieContainer;
