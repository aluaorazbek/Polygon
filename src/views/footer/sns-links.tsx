"use client";

import React from "react";

import Link from "next/link";

import DiscordLogo from "#/public/logo/discord.svg";
import GithubLogo from "#/public/logo/git.svg";
import InstagramLogo from "#/public/logo/instagram.svg";
import LinkedinLogo from "#/public/logo/linkedin.svg";
import PolygonLogo from "#/public/logo/polygon.svg";
import TelegramLogo from "#/public/logo/telegram.svg";
import TwitterLogo from "#/public/logo/twitter.svg";

const SnsLinks = () => (
  <div className="px-10 mx-auto max-w-[85rem] flex items-center justify-between mb-24">
    <PolygonLogo width={123} height={24} className="mr-6" />
    <div className="flex gap-8">
      <Link className="w-[2.1875rem] h-[2.1875rem]" href="https://twitter.com/">
        <TwitterLogo className="text-gray-100 hover:text-white" />
      </Link>
      <Link
        className="w-[2.1875rem] h-[2.1875rem]"
        href="https://telegram.org/"
      >
        <TelegramLogo className="text-gray-100 hover:text-white" />
      </Link>
      <Link className="w-[2.1875rem] h-[2.1875rem]" href="https://github.com/">
        <GithubLogo className="text-gray-100 hover:text-white" />
      </Link>
      <Link
        className="w-[2.1875rem] h-[2.1875rem]"
        href="https://instagram.com/"
      >
        <InstagramLogo className="text-gray-100 hover:text-white" />
      </Link>
      <Link
        className="w-[2.1875rem] h-[2.1875rem]"
        href="https://linkedin.com/"
      >
        <LinkedinLogo className="text-gray-100 hover:text-white" />
      </Link>
      <Link
        className="w-[2.1875rem] h-[2.1875rem]"
        href="https://polygon.technology/"
      >
        <DiscordLogo className="text-gray-100 hover:text-white" />
      </Link>
    </div>
  </div>
);

export default SnsLinks;
