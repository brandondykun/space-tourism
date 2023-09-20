"use client";

import data from "../../data.json";

import Image from "next/image";
import { useState } from "react";

const DestinationPage = () => {
  const [destination, setDestination] = useState<
    "moon" | "mars" | "europa" | "titan"
  >("moon");

  const destinations = data.destinations;

  const selectedDestination = destinations.find((dest) => {
    return dest.name.toLowerCase() === destination;
  });

  return (
    <main className="flex min-h-screen flex-col px-6 pt-28 md:pt-36 lg:pt-48 bg-bg-destination-mobile sm:bg-bg-destination-tablet lg:bg-bg-destination-desktop bg-cover bg-center overflow-hidden text-white lg:px-20">
      <h1 className="text-center md:text-left tracking-widest font-barlow mb-4 md:text-[20px] lg:text-[28px]">
        <span className="mr-2 opacity-25 font-bold lg:ml-16">01</span> PICK YOUR
        DESTINATION
      </h1>
      <div className="lg:flex flex-1 gap-12">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={selectedDestination?.images.webp!}
            alt={selectedDestination?.name!}
            width={200}
            height={200}
            className="mx-auto lg:mx-0 py-8 md:py-0 md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] md:my-10"
          />
        </div>
        <div className="lg:flex-1 lg:flex flex-col items-center lg:items-start justify-center">
          <div className="flex gap-6 justify-center font-barlow text-light-blue mb-4 tracking-[2.36px]">
            <button
              className={`pb-1 border-b-[3px] border-solid tracking-[2.36px] ${
                destination === "moon"
                  ? "border-b-white text-white"
                  : "border-b-transparent text-light-blue"
              }`}
              onClick={() => {
                setDestination("moon");
              }}
            >
              MOON
            </button>
            <button
              className={`pb-1 border-b-[3px] border-solid tracking-[2.36px] ${
                destination === "mars"
                  ? "border-b-white text-white"
                  : "border-b-transparent text-light-blue"
              }`}
              onClick={() => {
                setDestination("mars");
              }}
            >
              MARS
            </button>
            <button
              className={`pb-1 border-b-[3px] border-solid tracking-[2.36px] ${
                destination === "europa"
                  ? "border-b-white text-white"
                  : "border-b-transparent text-light-blue"
              }`}
              onClick={() => {
                setDestination("europa");
              }}
            >
              EUROPA
            </button>
            <button
              className={`pb-1 border-b-[3px] border-solid tracking-[2.36px] ${
                destination === "titan"
                  ? "border-b-white text-white"
                  : "border-b-transparent text-light-blue"
              }`}
              onClick={() => {
                setDestination("titan");
              }}
            >
              TITAN
            </button>
          </div>
          <section className="max-w-xl mx-auto lg:mr-auto lg:ml-0">
            <h2 className="text-[56px] md:text-[80px] lg:text-[100px] uppercase font-bellfair text-center lg:text-left md:mb-2 lg:-ml-2">
              {selectedDestination?.name}
            </h2>
            <p className="text-[15px] md:text-base leading-[25px] md:leading-[28px] text-center text-light-blue font-extralight mb-8 lg:text-left min-h-[112px]">
              {selectedDestination?.description}
            </p>
            <div className="border-t border-solid border-dark-grey pt-8 text-center sm:flex lg:text-left">
              <div className="mb-6 sm:flex-1">
                <div className="font-barlow text-sm text-light-blue tracking-[2.36px] mb-2 font-extralight">
                  AVG. DISTANCE
                </div>
                <div className="font-bellfair text-[28px]">
                  {selectedDestination?.distance}
                </div>
              </div>
              <div className="sm:flex-1">
                <div className="font-barlow text-sm text-light-blue tracking-[2.36px] mb-2 font-extralight">
                  EST. TRAVEL TIME
                </div>
                <div className="font-bellfair text-[28px]">
                  {selectedDestination?.travel}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default DestinationPage;
