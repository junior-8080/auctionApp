import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from "./ProductCard";

const ProductListing = ({
  caption,
  flexCard,
  myAuctionPage,
  auctionList,
}: {
  caption: string;
  flexCard: boolean;
  myAuctionPage: boolean;
  auctionList:boolean;
}) => {
  const products = [1, 2, 3, ];

  return (
    <div className="flex flex-col  my-10 gap-20">
      <div className="flex flex-col">
        {!flexCard ? (
          <div className="flex justify-between">
            <p className="text-3xl text-black-500 font-bold">{caption}</p>
            <p className="flex gap-3 items-center">
              <span className="text-gray-500 text-xl font-bold">1/6</span>
              <button className="bg-gray-200 p-2 rounded-md">
                <AiOutlineArrowLeft />
              </button>
              <button className="bg-gray-200 p-2 rounded-md">
                <AiOutlineArrowRight />
              </button>
            </p>
          </div>
        ) : (
          ""
        )}

        <div
          className={`flex gap-6 mt-4 ${flexCard ? "flex-col" : "flex-row"}`}
        >
          {products.map((product, i) => (
            <ProductCard
              myAuctionPage={myAuctionPage}
              flexCard={flexCard}
              auctionList={auctionList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
