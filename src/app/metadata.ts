import type { Metadata } from "next";

const defaultUrl = "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Create Next App",
  description: "Generated by create next app",
};