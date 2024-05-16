import React from "react";
import { Avatar } from "../ui/avatar";
import Image from "next/image";
import { Star } from "lucide-react";

const ReviewCard = () => {
  return (
    <div className="w-full flex items-center justify-center p-2 md:p-8">
      <div className="w-full flex flex-col items-center justify-center drop-shadow-xl rounded-xl -2 md:p-5">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={50}
              height={50}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-lg font-medium ">Jane Smith</h1>
          <p className="text-sm text-muted-foreground font-normal ">
            janesmith@example.com
          </p>
          <div className="flex items-center justify-center gap-1 mt-2 text-primary">
            <Star
              strokeWidth={1}
              size={18}
              fill="#006C75"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <Star
              strokeWidth={1}
              size={18}
              fill="#006C75"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <Star
              strokeWidth={1}
              size={18}
              fill="#006C75"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <Star
              strokeWidth={1}
              size={18}
              fill="#006C75"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <Star strokeWidth={1} size={18} className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
        <p className="text-xs md:text-sm font-normal text-muted-foreground text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          totam doloremque, corporis exercitationem eligendi laboriosam, quos
          quae tempora quo mollitia.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
