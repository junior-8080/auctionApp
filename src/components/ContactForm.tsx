"use client";
import { INITIAL_STATES } from "@/constants";
import React, { useState, ChangeEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_STATES.CONTACT_US);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section className="flex m-28">
      <div className="flex flex-col -m-10 gap-10">
        <p className="text-[32px] font-bold text-center text-textBlack">
          CONTACT US
        </p>
        <form className="flex p-10 flex-col h-[560px] border border-[#E4E6E8] rounded-md">
          <div className="flex items-center text-textBlack">
            <input
              name="firstName"
              className="rounded-lg border m-3 pl-3 border-[#E4E6E8] h-[72px] w-[442px] outline-none"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              name="lastName"
              className="rounded-lg border m-3 pl-3 border-[#E4EE6E8] h-[72px] w-[442px] outline-none"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center text-textBlack">
            <input
              name="email"
              className="rounded-lg border m-3 pl-3 border-[#E4E6E8] h-[72px] w-[442px] outline-none"
              type="text"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="subject"
              className="rounded-lg border m-3 pl-3 border-[#E4E6E8] h-[72px] w-[442px] outline-none"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <textarea
            placeholder="Your message"
            className="rounded-lg border p-5 mt-2 text-textBlack border-[#E4E6E8] h-[211px]  outline-none"
            name="message"
            id="textarea"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="flex items-center justify-end mt-10">
            <button
              type="submit"
              className="font-bold text-white bg-teal w-[258px] rounded-lg h-[66px]"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
