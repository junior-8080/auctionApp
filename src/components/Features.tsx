import { homeText } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <section className="flex mb-24 mt-36 justify-around gap-5 text-center px-14 rounded-xl border-[1px] boder-[#E4E6E8] h-[244px] max-w-[1200px]">
      {homeText.featureText.map((feature, index) => (
        <div key={index} className="flex flex-col mt-12">
          <p className="text-textBlack mb-3 font-bold text-2xl ">
            {feature.title}
          </p>
          <span className="text-grey">{feature.desc}</span>
        </div>
      ))}
    </section>
  );
};

export default Features;
