"use client"
import React from "react";
import AccordionList from "./AccordionList";


const AuctionsSidebar = ({data}) => {
  return (
    <aside className="h-fit w-[30%] border rounded-xl p-4">
      <AccordionList data={data} />
    </aside>
  );
};

export default AuctionsSidebar;
