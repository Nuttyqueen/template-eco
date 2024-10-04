import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium ">Prouduct name</span>
          <span className="font-semibold ">฿100</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-bright text-bright w-max py-2 px-4 hover:bg-bright hover:text-white">
          Favorite
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Prouduct name</span>
          <span className="font-semibold">฿100</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-bright text-bright w-max py-2 px-4 hover:bg-bright hover:text-white">
          Favorite
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Prouduct name</span>
          <span className="font-semibold">฿100</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-bright text-bright w-max py-2 px-4 hover:bg-bright hover:text-white">
          Favorite
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Prouduct name</span>
          <span className="font-semibold">฿100</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-bright text-bright w-max py-2 px-4 hover:bg-bright hover:text-white">
          Favorite
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
