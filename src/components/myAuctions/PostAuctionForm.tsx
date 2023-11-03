import { INITIAL_STATES } from "@/constants";
import { PostFormData } from "@/constants/types";
import React, { ChangeEvent, useState } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import InputField from "../InputField";

const PostAuctionForm = ({}) => {
  const [formData, setFormData] = useState<PostFormData>(
    INITIAL_STATES.POST_AUCTION
  );

  const [focusedField, setFocusedField] = useState("");
  const [formNumber, setFormNumber] = useState(1);

  const handleFocus = (fieldName: any) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formNumber === 1) {
      setFormNumber(2);
    }
  };

  return (
    <div className="absolute h-full top-0 bottom-0 flex flex-col   w-full items-center">
      <div className="bg-black-500  w-full h-full absolute opacity-70 " />

      <form className="flex my-auto flex-col  relative w-[700px] py-6 z-50 bg-white rounded-2xl border-teal">
        <div className="flex items-center justify-center border-0 border-b-[1px] border-b-[#D8D8D8] h-[72px] p-5 text-textBlack">
          <p className="font-bold text-2xl flex-1 text-center">
            Post an auctions
          </p>
          <IoClose className="text-[22px]" />
        </div>

        <div className="flex items-center justify-center font-bold text-xl my-10">
          <div className="flex items-center gap-2 flex-col">
            <p className="flex items-center z-50 justify-center bg-teal rounded-full h-14 w-14 border-[6px] border-[#f7f7f74d]">
              1
            </p>
            <span className="text-teal ">Items Details</span>
          </div>
          <hr className="w-60 z-10 -mx-10 -mt-7 h-2 bg-[#57B3AC4D]" />
          <div className="flex items-center gap-2 flex-col">
            <p
              className={`${
                formNumber === 2 ? "bg-teal" : "bg-grey text-black-500"
              } z-50 flex items-center justify-center rounded-full h-14 w-14 border-[6px] border-[#f7f7f74d]`}
            >
              2
            </p>
            <span
              className={`${formNumber === 2 ? "text-teal" : " text-grey"} `}
            >
              Items Details
            </span>
          </div>
        </div>

        {formNumber === 1 ? (
          <>
            <div className="flex flex-col gap-5 px-10">
              <InputField
                checked_label=""
                checked_fieldName=""
                fieldType="select"
                label="Select make"
                fieldName="make"
                desc=""
                type=""
                focusedField={focusedField}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                handleChange={handleChange}
                formData={formData}
              />
              <InputField
                checked_label=""
                checked_fieldName=""
                fieldType="select"
                label="Select Region"
                fieldName="region"
                desc=""
                type=""
                focusedField={focusedField}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                handleChange={handleChange}
                formData={formData}
              />

              <InputField
                checked_label=""
                checked_fieldName=""
                fieldType="textInput"
                label="Enter Product name"
                fieldName="product_name"
                desc=""
                type=""
                handleChange={handleChange}
                handleFocus={handleFocus}
                formData={formData}
                focusedField={focusedField}
                handleBlur={handleBlur}
              />
              <InputField
                checked_label=""
                checked_fieldName=""
                fieldType="select"
                label="Select Attribute"
                fieldName="attribute"
                desc=""
                type=""
                focusedField={focusedField}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                handleChange={handleChange}
                formData={formData}
              />
              <textarea
                placeholder="Write Product description"
                className="rounded-lg border p-5 mt-2 text-textBlack border-[#E4E6E8] h-[211px]  outline-none"
                name="description"
                id="textarea"
                value={formData.description}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center justify-center w-full mt-10 px-10">
              {" "}
              <button
                className="w-full gap-4 flex items-center justify-center text-teal rounded-xl bg-transparent border border-teal from-white text-2xl py-3 font-bold"
                type="button"
              >
                <HiOutlinePhoto />
                Upload Item Images
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-5 px-10 py-2">
            <InputField
              checked_label=""
              checked_fieldName=""
              fieldType="textInput"
              label="Enter Starting Price"
              fieldName="starting_price"
              desc="Price to start bids on( Lower prices encourage more bids)"
              type=""
              handleChange={handleChange}
              handleFocus={handleFocus}
              formData={formData}
              focusedField={focusedField}
              handleBlur={handleBlur}
            />
            <InputField
              checked_label="Reserve Price"
              checked_fieldName="reserve_price"
              fieldType="textInput"
              label="Enter Buy now prics"
              fieldName="starting_price"
              desc="Price to start bids on( Lower prices encourage more bids)"
              type="checkbox"
              handleChange={handleChange}
              handleFocus={handleFocus}
              formData={formData}
              focusedField={focusedField}
              handleBlur={handleBlur}
            />
            <InputField
              checked_label="Buy Now"
              checked_fieldName="buy_now_price"
              fieldType="textInput"
              label="Enter Starting Price"
              fieldName="starting_price"
              desc="Price to start bids on( Lower prices encourage more bids)"
              type="checkbox"
              handleChange={handleChange}
              handleFocus={handleFocus}
              formData={formData}
              focusedField={focusedField}
              handleBlur={handleBlur}
            />
            <InputField
              checked_label=""
              checked_fieldName=""
              fieldType="select"
              label="Select Duration"
              fieldName="duration"
              desc=""
              type=""
              focusedField={focusedField}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              handleChange={handleChange}
              formData={formData}
            />
            <InputField
              checked_label="Buyer Deposit"
              checked_fieldName="buyer_deposit"
              fieldType="textInput"
              label=""
              fieldName=""
              desc="Minmum amount of money buyer has to have in account before bidding can prevent more buyers from bidding on item."
              type="checkbox"
              handleChange={handleChange}
              handleFocus={handleFocus}
              formData={formData}
              focusedField={focusedField}
              handleBlur={handleBlur}
            />
            <InputField
              checked_label="Amount Bidding"
              checked_fieldName="buyer_deposit"
              fieldType="textInput"
              label=""
              fieldName=""
              desc=""
              type="radio"
              handleChange={handleChange}
              handleFocus={handleFocus}
              formData={formData}
              focusedField={focusedField}
              handleBlur={handleBlur}
            />
            <InputField
              checked_label="Percentage of bid amount"
              checked_fieldName="buyer_deposit"
              fieldType="textInput"
              label=""
              fieldName=""
              desc=""
              type="radio"
              handleChange={handleChange}
              handleFocus={handleFocus}
              formData={formData}
              focusedField={focusedField}
              handleBlur={handleBlur}
            />
            <InputField
              checked_label="Custome Amount"
              checked_fieldName="buyer_deposit"
              fieldType="textInput"
              label=""
              fieldName=""
              desc=""
              type="radio"
              handleChange={handleChange}
              handleFocus={handleFocus}
              formData={formData}
              focusedField={focusedField}
              handleBlur={handleBlur}
            />
            <InputField
              checked_label=""
              checked_fieldName=""
              fieldType="textInput"
              label="Enter Amount"
              fieldName="amount"
              desc=""
              type=""
              handleChange={handleChange}
              handleFocus={handleFocus}
              formData={formData}
              focusedField={focusedField}
              handleBlur={handleBlur}
            />
          </div>
        )}

        <div className="flex items-center justify-center w-full mt-10 px-10">
          {" "}
          <button
            onClick={(e) => submitForm(e)}
            className="w-full rounded-xl bg-teal from-white text-2xl py-3 font-bold"
            type="button"
          >
            {formNumber === 1 ? "Proceed" : "Post Acution"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostAuctionForm;
