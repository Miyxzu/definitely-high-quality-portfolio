import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main>
        <div className="my-20 flex items-center justify-between gap-8 mx-auto xl:max-w-4xl">
          <div className="ml-10 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Miyxzu.</h1>
            <h2 className="text-muted-foreground">
              "Rooted in Legacy. Driven by Victory"
            </h2>
          </div>
          <Image
            src="/definitely-high-quality-portfolio/TheSpy-4x.png"
            width={250}
            height={250}
            alt={""}
            className="mr-10 rounded-full ring-4 ring-white"
          />
        </div>
      </main>
    </div>
  );
}
