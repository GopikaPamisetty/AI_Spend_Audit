"use client";

import { useState } from "react";

export default function CopyLinkButton() {

  const [copied, setCopied] =
    useState(false);

  const copyLink = async () => {

    await navigator.clipboard.writeText(
      window.location.href
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (

    <button
      onClick={copyLink}
      className="mt-6 rounded-xl bg-black px-5 py-3 text-white"
    >
      {copied
        ? "Link Copied!"
        : "Copy Report Link"}
    </button>
  );
}
