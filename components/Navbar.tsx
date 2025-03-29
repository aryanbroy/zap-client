"use client";

import { Zap } from "lucide-react";
import Link from "next/link";

import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="px-8 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Zap className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">Zapp</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Integrations
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Documentation
          </Link>
        </nav>
        {/* <div className="ml-4 flex items-center gap-4">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Log in
          </Link>
          <Button size="sm">Login</Button>
        </div> */}
      </header>
    </div>
  );
}
