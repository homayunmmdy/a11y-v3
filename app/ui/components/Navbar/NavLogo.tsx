import SiteConfig from "@/config/site";
import Link from "next/link";

const NavLogo = () => {
  return (
    <>
      <Link href="/" title={SiteConfig.siteName} className="flex items-center">
        <span className="flex items-center text-black dark:text-white font-bold text-3xl p-2">
          {SiteConfig.siteName}
        </span>
      </Link>
    </>
  );
};

export default NavLogo;
