import React from "react";
import Footer from "../../components/Foote";
import Form from "../../components/Form";
import Header from "../../components/Nav";

export default function Contact() {
  return (
    <div>
      <Header />

      <div className="bg-white py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let's Talk!
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Thank you for checking out my portfolio, feel free to leave me a
              message here.
            </p>
          </div>
          <div className=" mx-auto mt-10 grid max-w-2xl  gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Contact form */}
            <div className="flex items-center justify-center p-2">
              <div className="  mx-auto w-full max-w-[550px]">
                <Form />
              </div>
            </div>
            <div className="  mx-auto w-full max-w-[550px]">
              <div className="mx-auto max-w-2xl lg:mx-0 ">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Do you know?
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  i develop this form that sends the data to the contact 7
                  plugin on my personal wordpress website. <br />
                  easy shit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
