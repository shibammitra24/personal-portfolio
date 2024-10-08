"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

export default function Hero() {
  const words = ["Web Developer", "UI/UX Designer"];
  return (
    <>
      <div className="grid sm:grid-cols-12 gap-2">
        <div className="sm:col-span-7">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
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
                  Hello, I&#39;m Shibam, a<FlipWords words={words} /> <br />{" "}
                  from India.
                </h2>
                {/* <p className="sm:mt-10 mt-10 sm:text-lg text-sm">
                  I can make your web designs that care about your users and
                  make them real with my development skills.
                </p> */}
                <p className="sm:mt-10 mt-10 sm:text-lg text-sm">
                  Your go-to partner for designing intuitive interfaces and
                  developing high-performance websites that stand out in the
                  digital landscape.
                </p>
              </div>

              {/* CTA and Social Buttons */}
              <div className="sm:flex justify-between w-full items-center">
                <Link href={"/contact"}>
                  <HoverBorderGradient
                    containerClassName="rounded-full sm:w-auto sm:mb-0 mb-3 w-full"
                    as="button"
                    className="dark:bg-black bg-black text-white dark:text-white  items-center px-5 py-3 space-x-2 font-medium"
                  >
                    <span className="sm:p-4">Contact me</span>
                  </HoverBorderGradient>
                </Link>

                <div className="flex gap-3 justify-around sm:justify-between">
                  <Link href={"https://www.instagram.com/shibam.mitra_/"}>
                    <div className="cursor-pointer bg-white/70 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 hover:text-white transition ease-in-out rounded-full sm:p-3 p-2">
                      <Instagram className="sm:size-auto size-8" />
                    </div>
                  </Link>
                  <Link href={"https://www.linkedin.com/in/shibammitra/"}>
                    <div className="cursor-pointer bg-white/70 hover:bg-[#0077B5] hover:text-white transition ease-in-out rounded-full sm:p-3 p-2">
                      <Linkedin className="sm:size-auto size-8" />
                    </div>
                  </Link>
                  <Link href={"https://x.com/ShibamMitra12"}>
                    <div className="cursor-pointer bg-white/70 hover:bg-[#1DA1F2] hover:text-white transition ease-in-out rounded-full sm:p-3 p-2">
                      <Twitter className="sm:size-auto size-8" />
                    </div>
                  </Link>
                  <Link href={"https://github.com/shibammitra24"}>
                    <div className="cursor-pointer bg-white/70 hover:bg-black hover:text-white transition ease-in-out rounded-full sm:p-3 p-2">
                      <Github className="sm:size-auto size-8" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="sm:col-span-5">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              src={"/self_main.webp"}
              height={500}
              width={500}
              alt="image"
              className="w-full max-w-full sm:h-[520px] h-[400px] rounded-md object-cover"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
