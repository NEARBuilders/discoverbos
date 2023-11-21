import React from "react";
import Heading from "../../components/header/Heading";
import Links from "../../components/pages/links";

const links = [
  {
    name: "BOS Code review: Building a Near Social bot and NFT barter application",
    href: "https://youtu.be/8-Y-eBxG_Cs?si=LlBGsWQ4G5G1T0zX",
  },
  {
    name: "Build A #BOS Bot & NFT Barter Application -",
    href: "https://youtu.be/8-Y-eBxG_Cs?si=J_zzE_zGUYGbxX95",
  },
  {
    name: "Creating SDKs on BOS (Lens, GenaDrop) + New Vue Inspired Skip Framework with Matt B",
    href: "https://youtu.be/IVQoocmWDGU?si=J6sQWi3vZgAO70qF",
  },
  {
    name: "Using SocialDB on #BOS to Create + Visualize Groups & Create Pull Requests",
    href: "https://youtu.be/HAyweTF7IjU?si=zbs4m3qlGqzCOWip",
  },
  {
    name: "Adding External Packages to the Your Gateway / #BOS VM",
    href: "https://youtu.be/cJuHp8exNVY?si=weF9Sjt99U80yJZj",
  },
  {
    name: "Build A Multichain #NFT Minter on #BOS",
    href: "https://youtu.be/YJbnbfY7xOE?si=AsiiLb3cZ-VZDTYY",
  },

];

export default function EducationCodeReviews() {
  return (
    <div>
      <Heading title="Code Reviews" />
      <Links links={links} />
    </div>
  );
}
