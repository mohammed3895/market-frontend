import Landing from "@/components/home/Landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market - Home",
  description: "Onilne Store",
};

export default function Home() {
  return <Landing />;
}
