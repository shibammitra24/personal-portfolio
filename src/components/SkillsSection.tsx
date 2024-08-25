import Image from "next/image";
import BlurIn from "@/components/magicui/blur-in";

const techLogos = [
  "/carousel/html_logo.svg", // replace these paths with your image paths
  "/carousel/css_logo.svg",
  "/carousel/tailwind_logo.svg",
  "/carousel/js_logo.svg",
  "/carousel/ts_logo.svg",
  "/carousel/react_logo.svg",
  "/carousel/next_logo.svg",
  "/carousel/figma_logo.svg",
  "/carousel/python_logo.svg",
];

export default function SkillsSection() {
  return (
    <div className="grid sm:grid-cols-1 bg-gradient-to-l from-zinc-100 to-zinc-50 border rounded-md p-2">
      <div className="flex flex-col justify-center items-center">
        {/* <h1 className="sm:text-3xl text-2xl font-bold ">My Tech Stack</h1> */}
        <BlurIn
          word="My Tech Stack"
          duration={0.5}
          className="sm:text-3xl text-2xl font-bold"
        />
        <div className="sm:flex grid grid-rows-3 grid-cols-3 sm:gap-10 gap-x-12 gap-y-4 pt-4 pb-1">
          {techLogos.slice(0, 3).map((src, index) => (
            <div key={`${index}`} className="row-span-1">
              <Image
                src={src}
                alt={`image-${index}`}
                height={60}
                width={60}
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
          {techLogos.slice(3, 6).map((src, index) => (
            <div key={`${index}`} className="row-span-1">
              <Image
                src={src}
                alt={`image-${index}`}
                height={60}
                width={60}
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
          {techLogos.slice(6, 9).map((src, index) => (
            <div key={`${index}`} className="row-span-1">
              <Image
                src={src}
                alt={`image-${index}`}
                height={60}
                width={60}
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
