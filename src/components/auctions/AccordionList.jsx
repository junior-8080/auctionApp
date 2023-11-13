import React from "react";
import AccordionItem from "./AccordionItem";
import {ImEqualizer } from "react-icons/im";

const AccordionList = ({ data }) => {
  return (
    <div className="grid gap-4">
      <p className="flex py-2 items-center gap-3 text-bold  ">
        <ImEqualizer className=" text-grey " />{" "}
        <span className=" text-grey ">Filter by</span>
      </p>
      {data.accordionItems.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;
