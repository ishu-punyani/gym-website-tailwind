import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="container flex justify-between pt-20">
        <div className="flex flex-col gap-4 w-1/4 p-2">
          <h4 className="text-yellow-300 text-lg font-bold uppercase">
            Why Fitness Future
          </h4>
          <p>
            At TeamCore Events, we understand that exceptional events require
            exceptional people. That&apos;s why we go beyond traditional
            recruitment methods to curate a highly-skilled and dedicated event
            crew.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-1/4 p-2">
          <h4 className="text-yellow-300 text-lg font-bold uppercase">
            About Fitness Future
          </h4>
          <div className="flex flex-col gap-2">
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"/contact-us"}>Contact Us</Link>
            <Link href={"/gallery"}>Gallery</Link>
            <Link href={"/products"}>Products</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/4 p-2">
          <h4 className="text-yellow-300 text-lg font-bold uppercase">
            Get in Touch
          </h4>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image
                src={"/whatsapp-yellow.svg"}
                height={22}
                width={22}
                alt="whatsapp"
              />
              <Link href={"https://wa.me/917291906928"} target="_blank">
                +91 72919 06928
              </Link>
            </div>
            <div className="flex gap-2">
              <Image
                src="/email-yellow.svg"
                height={25}
                width={25}
                alt="email"
              />
              <Link href="mailto:punyani.ishant@gmail.com" target="_blank">
                punyani.ishant@gmail.com
              </Link>
            </div>

            <div className="flex gap-2">
              <Image
                src={"/location-yellow.svg"}
                height={25}
                width={25}
                alt="location"
              />
              <Link href={"https://g.co/kgs/n96GGkP"} target="_blank">
                13/26A Near Taksh Inn Hotel, WEA Channa Market, Karol Bagh, New
                Delhi, Delhi 110005
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
