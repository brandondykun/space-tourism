import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col px-8 pb-6 md:pb-8 pt-28 md:pt-48 lg:pt-72 items-center bg-bg-home-mobile sm:bg-bg-home-tablet lg:bg-bg-home-desktop bg-cover bg-center overflow-hidden text-white font-barlow lg:flex-row lg:gap-10">
      <div className="lg:flex-1 lg:pl-24">
        <p className="tracking-[0.2rem] text-light-blue mb-3 md:mb-6 md:text-xl lg:text-[28px] text-center lg:text-left font-light">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className="text-[80px] font-bellfair mb-3 md:mb-6 md:text-[150px] md:leading-[150px] text-center lg:text-left lg:-ml-3">
          SPACE
        </p>
        <p className="text-light-blue leading-7 font-light text-center max-w-[350px] mx-auto lg:text-left lg:mx-0 lg:text-[18px] lg:max-w-[450px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="lg:flex-1 flex items-center justify-center pt-5 md:mt-16 lg:mt-0">
        <Link
          href="/destination"
          className="rounded-full lg:mt-0 border-transparent border-solid border-[40px] hover:border-white hover:border-opacity-20 transition-all duration-500"
        >
          <div className=" h-[150px] w-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] bg-white rounded-full flex justify-center items-center text-xl tracking-widest text-dark-blue font-bellfair md:text-[32px]">
            EXPLORE
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
