import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5 bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"></div>
      <footer className="text-sm leading-6 my-10 max-w-screen-xl mx-auto">
        <div className="sm:flex justify-between text-white ">
          <div className="mb-6 sm:mb-0 flex justify-center items-center	">
            <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
              <div className="flex justify-center text-center space-x-5">
                <Link
                  href="https://github.com/homayunmmdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white px-2"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/homayoun-mohammadi-a3590a283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white px-2"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </p>
          </div>
          <p className="text-black dark:text-white">کپی رایت © {new Date().getFullYear()} وبی بای</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;