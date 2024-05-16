import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const Banner = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex w-full h-full items-center justify-center flex-col md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="700"
            className="relative lg:py-8 w-full h-full"
          >
            <div className="relative h-52 sm:h-80 lg:h-[38rem]">
              <Image
                alt=""
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="700"
            className="relative flex items-center justify-center bg-white w-full h-full"
          >
            <div className="p-4 md:p-8 w-full h-full flex flex-col justify-center">
              <h2 className="text-xl font-medium md:text-2xl lg:text-4xl">
                Discover the new trending designs.
              </h2>

              <p className="mt-4 text-muted-foreground text-sm lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <Link
                href="/"
                className={cn(
                  buttonVariants(),
                  "mt-8 px-12 py-3 text-base font-normal text-white"
                )}
              >
                Discover Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
