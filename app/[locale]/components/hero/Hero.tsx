import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-gray-900">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-24">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      Early Access
                    </span>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                      <span className="sm:text-6xl"></span> Wireless Bluetooth
                      Earbuds
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                        StellarGlo
                      </span>
                      <br />
                      go beyond sound.
                    </h1>
                  </div>

                  <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Immerse yourself in superior audio quality with the
                    StellarGlo Wireless Bluetooth Earbuds. These sleek and
                    lightweight earbuds deliver crystal-clear sound and rich
                    bass.
                  </p>
                </div>

                <div className="border-t border-gray-700"></div>

                <div className="flex space-x-4 items-center text-white">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      <Image
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="man"
                        style={{ color: "transparent" }}
                        src="/images/3.jpg"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      />
                      <Image
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="man"
                        style={{ color: "transparent" }}
                        src="/images/4.jpg"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      />
                      <Image
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="man"
                        style={{ color: "transparent" }}
                        src="/images/5.jpg"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      />
                      <Image
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="man"
                        style={{ color: "transparent" }}
                        src="/images/6.jpg"
                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      />
                    </div>

                    <span className="flex-shrink-0 text-xs font-medium leading-5">
                      +15
                    </span>
                  </div>

                  <div className="h-4 border-l border-gray-700"></div>

                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                  </div>
                  <div className="h-4 border-l border-gray-700"></div>
                  <Link href="" target="_blank">
                    {/* <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1&theme=light" className="w-32 h-8 md:w-48 md:h-12 lg:w-64 lg:h-16" width="250" height="54"> */}
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center w-full col-span-6">
              <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                <div className="h-full w-full">
                  <div className="h-full w-full">
                    {/* <iframe frameborder="0" allowfullscreen="1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                width="100%" height="100%"
                                src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&amp;mute=0&amp;controls=0&"
                                id="widget2">
                            </iframe> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
