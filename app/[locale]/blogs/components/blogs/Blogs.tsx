"use client";
import React, { useState } from "react";
import { DATAPOST } from "@/DATA";
import Image from "next/image";
import Link from "next/link";

const ItemPerPage = 12;

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(DATAPOST.length / ItemPerPage);

  const paginationData = DATAPOST.slice(
    (currentPage - 1) * ItemPerPage,
    currentPage * ItemPerPage
  );
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span className="text-xs dark:text-gray-400">
                February 19, 2021
              </span>
              <p>
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginationData.map((item) => (
              <Link
                href="/"
                rel="noopener noreferrer"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
                key={item.id}
              >
                <Image
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={item.image}
                  width={300}
                  height={300}
                  title={item.title}
                  alt={item.slug}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {item.title}
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 25, 2021
                  </span>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
          {totalPage > 1 && (
              <div className="flex justify-center mt-4">
                {[...Array(totalPage).keys()].map((page) => (
                  <button
                    key={page + 1}
                    className={`mx-1 px-3 py-1 rounded ${
                      currentPage === page + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setCurrentPage(page + 1)}
                  >
                    {page + 1}
                  </button>
                ))}
              </div>
            )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
