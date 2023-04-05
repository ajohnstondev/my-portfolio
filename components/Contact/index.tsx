import React from "react";
import Link from "next/link";
import { MdPhone, MdMail, MdLocationPin } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import Header from "@components/Atoms/Header";
import { CONFIG } from "@config";

const CONTACTS = [
  {
    icon: MdPhone,
    title: "Call me",
    content: CONFIG.contacts.phone,
    link: `tel:${CONFIG.contacts.phone}`
  },
  {
    icon: MdMail,
    title: "Email me",
    content: CONFIG.contacts.email,
    link: `mailto:${CONFIG.contacts.email}`
  },
  {
    icon: MdLocationPin,
    title: "Address",
    content: CONFIG.contacts.address,
    link: "http://maps.google.com/?q=" + CONFIG.contacts.address
  }
];

const Contact: React.FC = () => {
  const handleSendEmail = ({
    email,
    subject,
    message
  }: {
    email: string,
    subject: string,
    message: string
  }) => {
    const url = "https://api.emailjs.com/api/v1.0/email/send";
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_USER_ID,
        template_params: {
          from_email: email,
          subject: subject,
          message: message,
        },
      }),
    };

    toast.promise(
      fetch(url, options),
      {
        loading: 'Email is sending...',
        success: () => 'Successfully sent! Thank you.',
        error: (err) => 'Sorry, Something went wrong!',
      },
      { success: { duration: 5000} }
    );
  }

  return (
    <>
      <Header>Contact</Header>
      <div className="flex flex-col md:flex-row gap-8 px-[max(5%,10px)] py-10 mx-auto">
        <div className="flex flex-col gap-10 w-fit min-w-[300px] mt-0 md:mt-10">
          {CONTACTS.map((contact) => (
            <Link
              key={contact.title}
              className="flex gap-2 items-center"
              href={contact.link}
              title={contact.title}
            >
              <div className="w-14 h-14 bg-[#607d8b] text-white rounded-full flex items-center justify-center gap-4">
                <contact.icon className="text-3xl" />
              </div>
              <p className="text-xl max-w-[240px]">{contact.content}</p>
            </Link>
          ))}
        </div>
        <div className="w-full max-w-[800px] px-5 py-10 rounded-md bg-white">
          <div className="w-full">
            <p>I am always open to discussing product</p>
          </div>
          <div className="w-full mt-5">
            <form
              className="text-gray-400"
              id="myForm"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as typeof e.target & {
                  email: HTMLInputElement,
                  subject: HTMLInputElement,
                  message: HTMLInputElement
                }

                handleSendEmail({
                  email: form.email.value,
                  subject: form.subject.value,
                  message: form.message.value
                });

                form.email.value = "";
                form.subject.value = "";
                form.message.value = "";
              }}
            >
              <div className="mb-10">
                <input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  required
                  className="w-full h-12 border-b border-gray-400 outline-none focus:border-black px-1"
                />
              </div>
              <div className="mb-10">
                <input
                  type="text"
                  placeholder="Subject *"
                  name="subject"
                  required
                  className="w-full h-12 border-b border-gray-400 outline-none focus:border-black px-1"
                />
              </div>
              <div className="mb-10">
                <textarea
                  placeholder="Message *"
                  name="message"
                  required
                  rows={3}
                  className="w-full border-b border-gray-400 outline-none focus:border-black px-1"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded text-white text-base bg-[#607d8b]"
              >
                Submit
              </button>
            </form>
          </div>
          <Toaster position="top-right" />
        </div>
      </div>
    </>
  );
};

export default Contact;
