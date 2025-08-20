"use client";
import logo from "@/assets/logo/logo.png";
import MyButton from "@/components/ui/MyButton/MyButton";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";

const ForPc = () => {
  return (
    <div className="bg-black">
      <div className="container hidden lg:flex py-3 items-center justify-between ">
        <Link href={"/"}>
          <div className="flex items-center gap-2 h-full -ml-4 w-28">
            <Image
              src={logo}
              alt="Booksy.buzz"
              width={400}
              height={400}
              className="rounded object-contain"
            />
          </div>
        </Link>
        <div className="flex  items-center gap-5 text-base text-[#808080]">
          <NavMenu />
        </div>

        <div className="">
          <Link href={"/login"}>
            <MyButton title="Login" className="rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForPc;
