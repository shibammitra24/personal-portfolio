"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectOne() {
  const bounceAnimationVariants: any = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <div id="projects" className="grid sm:grid-cols-2 gap-2 h-max">
      <div className="relative inline-block">
        <motion.div
          variants={bounceAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image
            src={"/projects/proj_1.webp"}
            height={900}
            width={900}
            alt="project 1"
            className="sm:h-auto sm:w-auto object-cover rounded-lg"
          />
          <Link href={"https://github.com/shibammitra24/NextWeatherApp"}>
            <div className="absolute cursor-pointer top-2 right-2 bg-white hover:bg-black hover:text-white transition ease-in-out rounded-full sm:m-4 m-2 sm:p-3 p-2">
              <ArrowUpRight />
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="relative inline-block">
        <motion.div
          variants={bounceAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {/* TODO: Change spelling of "institute" */}
          <Image
            src={"/projects/proj_2.webp"}
            height={900}
            width={900}
            alt="project 1"
            className="sm:h-auto sm:w-auto object-cover "
          />
          <Link href={"https://github.com/shibammitra24/online-exam-panel"}>
            <div className="absolute cursor-pointer top-2 right-2 bg-white hover:bg-black hover:text-white transition ease-in-out rounded-full sm:m-4 m-2 sm:p-3 p-2">
              <ArrowUpRight />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
