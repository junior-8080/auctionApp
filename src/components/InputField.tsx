import React from "react";

const InputField = ({
  handleChange,
  fieldName,
  fieldType,
  type,
  label,
  handleBlur,
  handleFocus,
  focusedField,
  formData,
  desc,
  checked_fieldName,
  checked_label,
}: {
  formData: any;
  handleChange: any;
  handleFocus: any;
  handleBlur: any;
  fieldName: string;
  fieldType: string;
  type: string;
  desc: string;
  label: string;
  checked_label: string;
  checked_fieldName: string;
  focusedField: string;
}) => {
  return (
    <div>
      {fieldType === "select" && (
        <div className="flex items-center h-[70px] px-5 rounded-xl relative border border-gray-300">
          <div className="flex flex-1">
            <label
              htmlFor={fieldName}
              className={`absolute  text-grey transition-transform ${
                formData[fieldName] === "" || formData[fieldName] === 0
                  ? "transform hidden"
                  : "flex transform -translate-y-2"
              }`}
            >
              {label}
            </label>
            <div className="flex flex-1 gap-3 items-center pr-4 text-[20px] text-black-500">
              <select
                className={`w-full bg-transparent ${
                  formData[fieldName] !== "" && "-mb-4"
                } text-xl text-black-500 items-center py-3 px-0 outline-none`}
                id={fieldName}
                name={fieldName}
                required
                onChange={(e) => handleChange(e)}
              >
                <option value=""> {label}</option>
                <option value="BWM">BWM</option>
              </select>
            </div>
          </div>
        </div>
      )}
      {fieldType === "textInput" && (
        <div>
          {type?.length > 0 && (
            <p className="flex mb-2 items-center text-textBlack">
              <input
                id={checked_fieldName}
                className=" h-4 w-4 bg-[#F5F6F7]  checked:border checked:border-teal mr-2"
                type={type}
                name={checked_fieldName}
                onChange={(e) => handleChange(e)}
              />
              <span> {checked_label}</span>
            </p>
          )}
          <div
            className={`${
              fieldName?.length === 0 ? "hidden" : "flex"
            }  items-center h-[72px] px-5 rounded-xl relative border border-gray-300`}
          >
            <div className="flex flex-1">
              <label
                htmlFor={fieldName}
                className={`absolute text-grey transition-transform ${
                  focusedField === fieldName || formData[fieldName]?.length > 0
                    ? "transform -translate-y-4"
                    : "transform"
                }`}
              >
                {label}
              </label>
              <input
                id={fieldName}
                className="flex-1 px-2 py-1 text-textBlack focus:outline-none  outline-none"
                type={`${fieldName === "product_name" ? "text" : "number"}`}
                name={fieldName}
                onFocus={() => handleFocus(fieldName)}
                onBlur={handleBlur}
                value={formData[fieldName] !== 0 ? formData[fieldName] : ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          {desc?.length > 0 && (
            <p className="text-grey mt-1">
              Price to start bids on ( Lower prices encourag-e more bids)
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
