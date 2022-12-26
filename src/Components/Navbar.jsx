import React from "react";
import icon from "../assets/Fill 213.svg";
export default function Navbar() {
  return (
    <div className="flex items-center justify-center p-12 bg-[#F55A5A]">
      <img src={icon} width={45} alt="" />
      <span className="text-white pl-3 text-2xl font-inter font-medium">
        my travel journal.
      </span>
    </div>
  );
}
