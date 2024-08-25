"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const words = ["Web Developer", "UI/UX Designer"];
  return (
    <>
      <div className="grid sm:grid-cols-12 gap-2">
        <div className="sm:col-span-7">
          <div className="relative text-zinc-800 sm:h-[520px] h-[400px] sm:p-8 p-5 flex flex-col justify-between">
            {/* Hero Image */}
            <Image
              src={"/hero_bg.svg"}
              width={200}
              height={200}
              alt="al"
              className="absolute inset-0 h-full w-full rounded-lg object-cover z-[-1]"
            />

            {/* Hero Text and paragraph */}
            <div>
              <h2 className="sm:text-5xl text-3xl font-bold sm:w-4/5 w-full">
                Hello, I&#39;m Shibam, a<FlipWords words={words} /> <br /> from
                India.
              </h2>
              <p className="mt-10 sm:text-lg">
                I can make your web designs that care about your users and make
                them real with my development skills.
              </p>
            </div>

            {/* CTA and Social Buttons */}
            <div className="sm:flex justify-between w-full items-center">
              <HoverBorderGradient
                containerClassName="rounded-full sm:w-auto sm:mb-0 mb-2 w-full"
                as="button"
                className="dark:bg-black bg-black text-white dark:text-white  items-center px-5 py-3 space-x-2 font-semibold"
              >
                <span>Contact me</span>
              </HoverBorderGradient>

              <div className="flex gap-3 justify-around sm:justify-between">
                <Link href={"https://www.instagram.com/shibam.mitra_/"}>
                  <Image
                    src={"/insta_logo.svg"}
                    width={50}
                    height={50}
                    alt="insta logo"
                    className="transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
                <Link href={"https://www.linkedin.com/in/shibammitra/"}>
                  <Image
                    src={"/linkedin_logo.svg"}
                    width={50}
                    height={50}
                    alt="linkedin logo"
                    className="transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
                <Link href={"https://x.com/ShibamMitra12"}>
                  <Image
                    src={"/x_logo.svg"}
                    width={55}
                    height={55}
                    alt="x logo"
                    className="transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
                <Link href={"https://github.com/shibammitra24"}>
                  <Image
                    src={"/github_logo.svg"}
                    width={50}
                    height={50}
                    alt="github logo"
                    className="transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-5">
          <Image
            src={"/self_main.webp"}
            height={500}
            width={500}
            alt="image"
            className="w-full max-w-full sm:h-[520px] h-[400px] rounded-md object-cover"
          />
        </div>
      </div>
    </>
  );
}
