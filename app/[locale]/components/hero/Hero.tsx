import React from "react";

const Hero = () => {
  return (
    <div className="flex min-h-[calc(100% - 70px)] max-w-[100vw] flex-col items-center justify-start xl:flex-row xl:items-start xl:justify-between">
      <div className="shrink flex justify-center text-center h-[calc(100% - 70px)]  xl:w-1/2">
        <div className="flex items-center justify-center px-2 py-10 text-center xl:justify-start xl:pe-0 xl:ps-10 xl:text-start">
          <h1 className="font-title text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] [word-break:auto-phrase] xl:w-[115%] xl:text-start [:root[dir=rtl]_&]:leading-[1.35]">
            <span className="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">
              Start from here
            </span>
            <br />
            <span className=" underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              My App
            </span>
            <br />
            <span className="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">
              Great Features
            </span>
          </h1>
        </div>
      </div>
      <div className="invisible sticky bottom-4 flex w-[calc(100%-2rem)] shrink duration-700 xl:visible xl:-end-32 xl:bottom-auto xl:top-16 xl:w-auto xl:!transform-none xl:overflow-x-hidden xl:overflow-y-clip xl:bg-transparent xl:pb-16 xl:pt-16">
        <img src="/logo.png" className="w-full h-full" alt="My Apo" />
      </div>
    </div>
  );
};

export default Hero;
