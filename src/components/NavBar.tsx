"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between">
        <Image
          src={`/circle_and_name.svg`}
          width={90}
          height={90}
          alt="an svg"
        />
        <div className="flex items-center">
          <div className="flex gap-6">
            <Link href={"#"} className="hidden sm:flex">
              Home
            </Link>
            <Link href={"#"} className="hidden sm:flex">
              Projects
            </Link>
            <Link href={"#"} className="hidden sm:flex">
              Contact
            </Link>
          </div>

          <div className="sm:hidden flex z-50 items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="text-gray-800 hover:text-gray-600 focus:outline-none"
                >
                  <HamburgerMenuIcon className="size-5" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <div className="px-2 pt-3 pb-3 space-y-1 sm:px-3">
                  <Link
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
                  >
                    Projects
                  </Link>
                  <Link
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
                  >
                    About
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
