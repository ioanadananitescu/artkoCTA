"use client";
import { Builder } from "@builder.io/react";
import Cloud from "./components/Cloud/Cloud";
import Counter from "./components/Counter/Counter";
import Footer from "./app/ui/components/Footer";
import Navbar from "./app/ui/components/NavBar";
import Navedit from "./app/ui/components/NavEdit";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(Cloud, {
  name: "CloudinaryImage",
  image:
    "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png",
  inputs: [
    {
      name: "cloudinaryOptions",
      type: "cloudinaryImageEditor",
    },
  ],
});

Builder.registerComponent(Navbar, {
  name: "Navbar",
});

Builder.registerComponent(Navedit, {
  name: "Navedit",
});
