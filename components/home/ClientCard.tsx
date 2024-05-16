import { Laptop } from "lucide-react";
import React from "react";
import { CLIENTDATA } from "./Clients";

interface ClientProps {
  client: (typeof CLIENTDATA)[number];
}

const ClientCard = ({ client }: ClientProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="700"
      className="w-full h-72 md:h-80 p-4 lg:p-8 hover:shadow-lg transition-shadow ease-in-out duration-300 flex"
    >
      <div className="flex flex-col items-start justify-center gap-3">
        <div
          className={`w-14 h-14 ${client.bgColor} flex items-center justify-center rounded-md`}
        >
          <client.icon className={`w-7 h-7 ${client.iconColor}`} />
        </div>
        <h1 className="text-lg font-medium capitalize">{client.title}</h1>
        <p className="text-sm font-normal text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe
          praesentium a repellendus deserunt quam veritatis nemo dolore
          doloribus adipisci, ad accusamus beatae facere quisquam, natus magnam
          sapiente dolores minus.
        </p>
      </div>
    </div>
  );
};

export default ClientCard;
