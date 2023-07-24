import React from "react";
import {
  BlogsContainer,
  BlogCardContainer,
  BlogDetailsContainer,
} from "./blogsStyle";
import { Box, Typography } from "@mui/material";
import BlogCard from "./card";

export default function Blogs({ blogData }) {
  console.log(blogData);
  return (
    <BlogsContainer>
      {blogData && (
        <>
          <BlogDetailsContainer >
            <Typography variant="h1">{blogData?.title}</Typography>
          </BlogDetailsContainer>

          <BlogCardContainer>
            {blogData.card && blogData.card.length
              ? blogData.card.map((card) => (
                  <BlogCard key={card.id} blogCardData={card} />
                ))
              : null}
          </BlogCardContainer>
        </>
      )}
  
    </BlogsContainer>
  );
}
