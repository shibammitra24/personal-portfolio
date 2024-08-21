import Link from "next/link";

export default function Home() {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center text-white">
      <div className="flex flex-col gap-2 items-center">
          <h1 className="font-bold text-3xl">Something is cooking!</h1>
          <h1>This domain is owned by @ShibamMitra</h1>
          <Link href={"https://www.linkedin.com/in/shibammitra/"} className="bg-white text-black px-2 font-semibold hover:bg-black hover:border transition hover:text-white rounded-md">Linkedin</Link>
      </div>
    </div>
  );
}
