import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";

const navItems = {
  "/": {
    name: "home",
  },
  "/works": {
    name: "works",
  },
  "/posts": {
    name: "posts",
  },
};

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/works/")) {
    pathname = "/works";
  } else if (pathname.includes("/posts/")) {
    pathname = "/posts";
  }

  return (
    <aside>
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav className="flex flex-row md:flex-col items-start relative md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx("transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-base font-medium", {
                      "text-neutral-500": !isActive,
                      "text-neutral-200": isActive,
                    })}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
