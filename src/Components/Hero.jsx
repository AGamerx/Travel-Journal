import React from "react";
import icon from "../assets/Fill 219.svg";

export default function Hero(props) {
  return (
    <div className="flex p-12 justify-center max-w-full">
      <div className=" mr-8">
        <img src={props.img} width={200} alt="" />
      </div>
      <div className="flex  h-8 flex-col">
        <div className="flex items-center">
          <img src={icon} width={15} alt="" />
          <span className="text-[24px] pl-2 pr-5 font-inter font-normal text-[#2B283A] tracking-widest">
            {props.location}
          </span>
          <a
            className="text-[#918E9B] font-inter underline hover:text-gray-700"
            href={props.mapsLink}
          >
            View on Google Maps
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#2B283A] font-inter font-bold text-[36px]">
            {props.title}
          </h1>
          <h3 className=" font-inter font-bold pt-7">{props.startDate} - {props.endDate}</h3>
          <p className=" max-w-[480px] font-inter">
            {props.description}
          </p>
          
        </div>
      </div>
    </div>
    
  );
}
