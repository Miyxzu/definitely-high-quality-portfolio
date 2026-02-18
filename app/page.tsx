import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main>
        <div className="m-20 flex items-center justify-between gap-8">
          <h1 className="mx-20 text-3xl font-bold">Home</h1>
          <h2></h2>
          <Image
            src="/definitely-high-quality-portfolio/TheSpy-4x.png"
            width={250}
            height={250}
            alt={""}
            className="mx-20 rounded-full ring-4 ring-white"
          />
        </div>
      </main>
    </div>
  );
}
