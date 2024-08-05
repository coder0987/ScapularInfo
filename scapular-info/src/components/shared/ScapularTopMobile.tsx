"use client"

import { Link, useLocation } from "react-router-dom";
import React from "react";
import { cn } from "@/lib/utils"

import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { scapularMenu } from "@/constants";

const ScapularTopMobile = () => {
  const { pathname } = useLocation();

  const splitPath = pathname.split('/');

  const route = splitPath.length === 3
    ? 'History'
    : capitalizeFirstLetter(splitPath[3]);

  const linkBase = `/${splitPath[1]}/${splitPath[2]}`;

  return (
    <section className="block w-full md:hidden">
          <div className="items-center w-full">
            <NavigationMenu className="w-full max-w-none list-none">
              <NavigationMenuItem className="w-full list-none">
                <NavigationMenuTrigger className="w-full">
                    {route}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-full max-w-none">
                  <div className="grid gap-3 p-6 list-none bg-black w-full max-w-none">
                      {
                        scapularMenu.map((link) => {
                            const isActive = link.label === route;
                            return (
                                <Link key={'scapular-menu-'+link.label} to={linkBase + link.route} className="scap-nav-link w-full max-w-none">
                                    <NavigationMenuLink asChild>
                                      <p className={"scap-nav-title" + (isActive ? " underline": "")}>{link.label}</p>
                                    </NavigationMenuLink>

                                </Link>
                            );
                          })
                      }
                  </div>
                </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
      </div>
    </section>
  );
};


const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string' || string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default ScapularTopMobile;