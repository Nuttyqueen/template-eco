import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-teal-800 text-white text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Eco</div>
          </Link>
          <p>
            (530) 459-0300 2301 Ball Mtn Little Shasta Rd Montague,
            California(CA), 96064
          </p>
          <p className="font-semibold">Eco@company.dev</p>
          <p className="font-semibold">(303) 816-5455</p>
          <div className="flex gap-6 icon-white">
            <Image
              src="/facebook.png"
              alt="facebookIcon"
              width={16}
              height={16}
            ></Image>
            <Image
              src="/instagram.png"
              alt="instagramIcon"
              width={16}
              height={16}
            ></Image>
            <Image
              src="/youtube.png"
              alt="youtubeIcon"
              width={16}
              height={16}
            ></Image>
            <Image src="/x.png" alt="xIcon" width={16} height={16}></Image>
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">my Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-bright text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">©สงวนลิขสิทธิ์ 2567 Eco </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-300 mr-4">Language</span>
            <span className="font-medium">Thai | English</span>
          </div>
          <div className="">
            <span className="text-gray-300 mr-4">Currency</span>
            <span className="font-medium">฿ Bath</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
