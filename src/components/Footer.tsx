"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const bounceAnimationVariants: any = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <div id="contact" className="grid sm:grid-cols-1">
      <motion.div
        variants={bounceAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="relative text-zinc-800 h-[350px] sm:p-8 p-5 flex flex-col justify-between">
          <Image
            src={"/footer_bg.webp"}
            width={200}
            height={200}
            alt="footer image"
            className="absolute inset-0 h-full w-full rounded-lg object-cover z-[-1]"
          />

          {/* Hero Text and paragraph */}
          <div>
            <h2 className="sm:text-5xl text-3xl font-bold sm:w-4/5 w-full">
              Want to work together?
            </h2>
            <p className="sm:mt-10 mt-10 sm:text-lg text-sm">
              Feel free to reach out for collaborations or just a friendly
              hello! <br />
              shibammitra695@gmail.com
            </p>
          </div>

          {/* CTA and Social Buttons */}
          <div className="sm:flex justify-between w-full items-center">
            <Link href={"mailto:shibammitra695@gmail.com"}>
              <button className="dark:bg-black bg-black text-white dark:text-white  items-center px-5 py-3 space-x-2 font-medium rounded-full sm:w-auto sm:mb-0 mb-3 w-full">
                <span className="sm:p-4">Contact me</span>
              </button>
            </Link>

            <div className="flex gap-3 justify-around sm:justify-between">
              <Link href={"https://www.instagram.com/shibam.mitra_/"}>
                <div className="cursor-none bg-white/70 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 hover:text-white transition ease-in-out rounded-full sm:p-3 p-2">
                  <Instagram className="sm:size-auto size-8" />
                </div>
              </Link>
              <Link href={"https://www.linkedin.com/in/shibammitra/"}>
                <div className="cursor-none bg-white/70 hover:bg-[#0077B5] hover:text-white transition ease-in-out rounded-full sm:p-3 p-2">
                  <Linkedin className="sm:size-auto size-8" />
                </div>
              </Link>
              <Link href={"https://x.com/ShibamMitra12"}>
                <div className="cursor-none bg-white/70 hover:bg-[#1DA1F2] hover:text-white transition ease-in-out rounded-full sm:p-3 p-2">
                  <Twitter className="sm:size-auto size-8" />
                </div>
              </Link>
              <Link href={"https://github.com/shibammitra24"}>
                <div className="cursor-none bg-white/70 hover:bg-black hover:text-white transition ease-in-out rounded-full sm:p-3 p-2">
                  <Github className="sm:size-auto size-8" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
