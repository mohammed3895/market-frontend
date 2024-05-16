import React from "react";
import ClientCard from "./ClientCard";
import { SectionTitle } from "../SectionTitle";
import { Leaf, Rocket, ShieldCheck, Smile, Timer, Users } from "lucide-react";

export const CLIENTDATA = [
  {
    title: "Satisfying Clients",
    desc: "",
    icon: Smile,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-500",
  },
  {
    title: "Secure Data and Payments",
    desc: "",
    icon: ShieldCheck,
    bgColor: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    title: "Productive Team",
    desc: "",
    icon: Users,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    title: "Fast Delevering",
    desc: "",
    icon: Rocket,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    title: "WorldWide Trusted",
    desc: "",
    icon: Leaf,
    bgColor: "bg-fuchsia-100",
    iconColor: "text-fuchsia-500",
  },
  {
    title: "24 Hours Support",
    desc: "",
    icon: Timer,
    bgColor: "bg-teal-100",
    iconColor: "text-teal-500",
  },
];

const Clients = () => {
  return (
    <div className="w-full p-4 lg:p-8 xl:p-14 h-full my-16 flex flex-col items-center justify-center gap-8">
      <SectionTitle title="Why Choose Us" />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {CLIENTDATA.map((client, i) => (
          <ClientCard key={i} client={client} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
