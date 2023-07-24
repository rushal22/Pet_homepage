import React from "react";
import { CardMedia, CardContent, Typography, Button } from "@mui/material";
import {
  BlogCardContainer,
  BlogCardBtnWrapper,
  BlogCardTitleWrapper,
  BlogCardDescriptionWrapper,
  BlogCardImgWrapper
} from "./cardStyle";
import Image from "next/image";

export default function BlogCard({ blogCardData }) {
  return (
    <BlogCardContainer>
      <BlogCardImgWrapper>
      <Image
        src={blogCardData?.path}
        layout="fill"
        objectFit="contain"
        alt={blogCardData?.title}
        />
        </BlogCardImgWrapper>
      <CardContent>
        <BlogCardTitleWrapper aria-level={blogCardData?.title}>
          <Typography variant="obt">{blogCardData?.title}</Typography>
        </BlogCardTitleWrapper>
        <BlogCardDescriptionWrapper>
          <Typography variant="obd">{blogCardData?.description}</Typography>
        </BlogCardDescriptionWrapper>
      </CardContent>
      <BlogCardBtnWrapper>
        <Button
          sx={{ height: "36px", width: "97px", bgcolor: "black" }}
          variant="contained"
        >
          <Typography variant="b2">View Detail</Typography>
        </Button>
      </BlogCardBtnWrapper>
    </BlogCardContainer>
  );
}
