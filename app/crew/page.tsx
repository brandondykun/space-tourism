"use client";

import { useState } from "react";
import data from "../../data.json";
import Image from "next/image";

const CrewPage = () => {
  const [selectedCrew, setSelectedCrew] = useState(data.crew[0].id);

  const crewMember = data.crew.find((crew) => {
    return crew.id === selectedCrew;
  });

  return (
    <main className="flex min-h-screen flex-col px-6 pb-6 md:pb-0 pt-20 md:pt-36 lg:pt-48 bg-bg-crew-mobile sm:bg-bg-crew-tablet lg:bg-bg-crew-desktop bg-cover bg-center overflow-hidden text-white lg:px-20">
      <h1 className="text-center md:text-left tracking-[2.75px] font-barlow mb-6 md:text-[20px] lg:text-[28px] md:mb-12">
        <span className="mr-2 opacity-25 font-bold lg:ml-16">02</span> MEET YOUR
        CREW
      </h1>
      <div className="md:flex md:flex-col-reverse lg:block flex-1 lg:relative">
        <div className="border-b border-solid border-dark-grey md:border-b-0 md:flex-1 md:flex md:items-end lg:-mt-24 lg:flex-none min-w-fit lg:absolute bottom-0 -right-20 xl:right-10">
          <Image
            src={crewMember?.images.webp!}
            alt={crewMember?.name!}
            width={150}
            height={222}
            className="mx-auto h-[222px] w-auto md:h-[532px] lg:h-[560px]"
          />
        </div>
        <div className="md:flex md:flex-col-reverse lg:flex-1 relative z-20 lg:max-w-xl lg:ml-16">
          <div className="flex gap-6 items-center justify-center py-6 lg:justify-start">
            <button
              onClick={() => {
                setSelectedCrew(1);
              }}
              className={`h-3 w-3 rounded-full bg-white  ${
                selectedCrew === 1 ? "" : "opacity-20"
              }`}
            ></button>
            <button
              onClick={() => {
                setSelectedCrew(2);
              }}
              className={`h-3 w-3 rounded-full bg-white  ${
                selectedCrew === 2 ? "" : "opacity-20"
              }`}
            ></button>
            <button
              onClick={() => {
                setSelectedCrew(3);
              }}
              className={`h-3 w-3 rounded-full bg-white  ${
                selectedCrew === 3 ? "" : "opacity-20"
              }`}
            ></button>
            <button
              onClick={() => {
                setSelectedCrew(4);
              }}
              className={`h-3 w-3 rounded-full bg-white  ${
                selectedCrew === 4 ? "" : "opacity-20"
              }`}
            ></button>
          </div>

          <section className="md:max-w-md mx-auto lg:max-w-none">
            <p className="opacity-50 font-bellfair uppercase text-center pb-2 md:text-[24px] lg:text-left lg:text-[32px] lg:pb-6">
              {crewMember?.role}
            </p>
            <p className="text-2xl font-bellfair uppercase text-center pb-4 md:pb-6 md:text-[40px] lg:text-left lg:text-[52px] lg:pb-12">
              {crewMember?.name}
            </p>
            <p className="text-[15px] md:text-[16px] font-light text-light-blue leading-[25px] md:leading-[28px] text-center lg:text-left lg:text-[18px] lg:leading-[32px] lg:pb-24 lg:min-h-[225px]">
              {crewMember?.bio}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CrewPage;
