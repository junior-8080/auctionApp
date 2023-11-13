import React from "react";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const AccordionItem = ({ title, checkboxes, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div
        className="text-textBlack border-b flex justify-between items-center  p-[8px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{title}</span>
        <span>
          {isOpen ? (
            <AiOutlineMinusCircle className="text-grey text-2xl" />
          ) : (
            <AiOutlinePlusCircle className="text-teal text-2xl" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className=" p-2">
          {checkboxes &&
            checkboxes.map((checkbox, index) => (
              <div className="flex items-center gap-4 justify-between">
                <div key={index} className="flex  items-center mb-2">
                  <input
                    type="checkbox"
                    className=" h-4 w-4 border appearance-none bg-lightGrey checked:bg-teal checked:border-teal mr-2"
                  />
                  <span className="text-grey text-[19px]">{checkbox}</span>
                </div>

                {title === "Drive train" && (
                  <p className="text-grey text-[19px]">200</p>
                )}
              </div>
            ))}
          {subItems &&
            subItems.map((subItem, index) => (
              <AccordionItem key={index} {...subItem} />
            ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
