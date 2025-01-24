"use client"

import { Link, useLocation } from "react-router-dom";

const ScapularTopDesktop = ({ menu } : { menu: {route: string; label: string;}[] }) => {
  const { pathname } = useLocation();

  const splitPath = pathname.split('/');

  const route = splitPath.length === 3
    ? 'History'
    : capitalizeFirstLetter(splitPath[3]);

  const linkBase = `/${splitPath[1]}/${splitPath[2]}`;

  return (
    <section className="md:block w-full hidden bg-primary-600">
        <div className="flex-between py-4 px-5">
          {
            menu.map((link) => {
                const isActive = link.label === route;
                return (
                    <Link key={'scapular-menu-'+link.label} to={linkBase + link.route} className="scap-nav-link w-1/5 max-w-none focus:bg-transparent hover:bg-primary-500">
                      <p className={"scap-nav-title" + (isActive ? " underline": "")}>{link.label}</p>
                    </Link>
                );
              })
          }
        </div>
    </section>
  );
};


const capitalizeFirstLetter = (string: string) => {
  if (typeof string !== 'string' || string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default ScapularTopDesktop;