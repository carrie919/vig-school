"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const facilities = [
  { title: "Infrastructure", href: "/facilities/infrastructure" },
  { title: "Special Features", href: "/facilities/special-features" },
  { title: "Hostels", href: "/facilities/hostels" },
  { title: "Kindergarten", href: "/facilities/kindergarten" },
  { title: "Transportation", href: "/facilities/transportation" },
  { title: "Bank & Post Office", href: "/facilities/bank-post-office" },
];

const admissions = [
  { title: "General Information", href: "/admissions/general-information" },
  { title: "Admission Process", href: "/admissions/process" },
  { title: "Playschool & KG", href: "/admissions/playschool-kg" },
  { title: "Transfer Admissions", href: "/admissions/transfer" },
  { title: "Fee Structure", href: "/admissions/fee-structure" },
  { title: "Scholarships & Concessions", href: "/admissions/scholarships" },
];

const circulars = [
  { title: "Circulars", href: "/circulars" },
  { title: "Upcoming Events", href: "/circulars/upcoming-events" },
  { title: "Concluded Events", href: "/circulars/concluded-events" },
];

export default function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-red-800 text-white" style={{ height: "35px" }}>
      <div className="flex items-center max-w-screen-lg mx-auto justify-end" style={{ height: "35px" }}>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="relative">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-yellow-300")}>
                  <span style={{ fontSize: "16px" }}>Home</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-yellow-300")}>
                  <span style={{ fontSize: "16px" }}>About</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/facilities" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-yellow-300")}>
                  <span style={{ fontSize: "16px" }}>Facilities</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/admissions" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-yellow-300")}>
                  <span style={{ fontSize: "16px" }}>Admissions</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/circulars" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-yellow-300")}>
                  <span style={{ fontSize: "16px" }}>Circulars</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/alumni" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-yellow-300")}>
                  <span style={{ fontSize: "16px" }}>Alumni</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-yellow-300")}>
                  <span style={{ fontSize: "16px" }}>Contact</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white mr-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-red-800 text-white p-4">
            <div className="flex justify-end">
                <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white mr-2"
                >
                <X size={24} />
                </button>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/" passHref legacyBehavior>
                  <a onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "16px" }}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref legacyBehavior>
                  <a onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "16px" }}>About</a>
                </Link>
              </li>
              <li>
                <Link href="/facilities" passHref legacyBehavior>
                  <a onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "16px" }}>Facilities</a>
                </Link>
              </li>
              <li>
                <Link href="/admissions" passHref legacyBehavior>
                  <a onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "16px" }}>Admissions</a>
                </Link>
              </li>
              <li>
                <Link href="/circulars" passHref legacyBehavior>
                  <a onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "16px" }}>Circulars</a>
                </Link>
              </li>
              <li>
                <Link href="/alumni" passHref legacyBehavior>
                  <a onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "16px" }}>Alumni</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref legacyBehavior>
                  <a onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: "16px" }}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-yellow-300 focus:bg-accent focus:text-accent-foreground",
            className
          )}
          style={{ width: "240px", fontSize: "16px" }}
          {...props}
        >
          <div className="text-sm font-medium leading-none" style={{ fontSize: "16px" }}>{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground" style={{ fontSize: "16px" }}>
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

// ...existing code...