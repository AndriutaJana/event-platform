import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-[32px] leading-[40px] md:text-[36px] md:leading-[44px] lg:text-[40px] lg:leading-[48px] xl:text-[48px] xl:leading-[60px]">
              Inspire, organise, impress - With Eventify, every detail counts.
            </h1>
            <p className="text-[20px] font-normal leading-[30px] tracking-[2%] md:text-[24px] md:leading-[36px]">
              Turn every detail into an opportunity for success!
            </p>
            <Button
              size="lg"
              asChild
              className="rounded-full h-[54px] text-[16px] font-normal leading-[24px] w-full sm:w-fit"
            >
              <Link href="#events">Explore now</Link>
            </Button>
          </div>
          <Image
            src="/assets/icons/hero.svg"
            alt="hero"
            width={1200}
            height={1200}
            className="max-h-[95vh] object-contain object-center 2xl:max-h-[80vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="max-w-7xl mx-auto p-5 md:px-10 xl:px-0 w-full my-8 flex flex-col gap-8 md:gap-12 py-6 md:py-8"
      >
        <h2 className="font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px];">
          Opportunities Await - <br />
          Join the Upcoming Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search Category
        </div>
      </section>
    </>
  );
}
