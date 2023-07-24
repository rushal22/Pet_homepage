"use client";
import MyCarousel from "@/app/components/pages/Home/carousel";
import Layout from "../../components/layout";
import { Box } from "@mui/material";
import { AboutUsItems, CarouselItems, OneMoreFriendFun, OurPetCollection, OurServicesItems } from "@/app/constants";
import AboutUs from "@/app/components/pages/Home/about-us";
import Services from "@/app/components/pages/Home/services";
import PetCollections from "@/app/components/pages/Home/pet-collections";
import OneMoreFriend from "@/app/components/pages/Home/one-more-friend";
import Blogs from "@/app/components/pages/Home/blogs";

export default function Home() {
  return (
    <Box>
      <Layout>
        <MyCarousel items={CarouselItems} />
        <AboutUs items = {AboutUsItems} />
        <Services items = {OurServicesItems} />
        <PetCollections items = {OurPetCollection}/>
        <OneMoreFriend items = {OneMoreFriendFun}/>
        <Blogs />
      </Layout>
    </Box>
  );
}
