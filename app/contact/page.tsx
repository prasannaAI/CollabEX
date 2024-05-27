import React from "react";
import type { Metadata } from "next";
import TextInput from "@/components/TextInput";

export const metadata: Metadata = {
  title: "Contact Us | CollabrEX",
  description: "Reach out to us at CollabrEX.",
};

const ContactPage = () => {
  return (
    <div>
      <div className="min-h-[10vh] sm:min-h-[20vh]" />
      <section className="min-h-[50vh] p-4">
        <div className="container max-w-[1200px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-[7.5vh]">
            Contact Us
          </h1>
          <div className="flex flex-wrap mx-0">
            <div className="w-full md:w-1/2 p-3 md:p-6 lg:p-8">
              <div className="flex flex-col gap-3 mx-0">
                <div className="p-2">
                  <div className="text-xl md:text-2xl font-bold mb-4">
                    <i className="ri-mail-line mr-2" />
                    Email
                  </div>
                  <a
                    href="mailto:info@collabrex.com"
                    className="text-2xl hover:text-amber-600"
                  >
                    info@collabrex.com
                  </a>
                </div>
                <div className="p-2">
                  <div className="text-xl md:text-2xl font-bold mb-4">
                    <i className="ri-map-pin-line mr-2" />
                    Address
                  </div>
                  <p className="text-xl">
                    <div>Collabrex Innovations Pvt Ltd,</div>
                    <div>Kakkannad, Kochi,</div>
                    <div>Kerala, India</div>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-3 md:p-6 lg:p-8">
              <form
                method="POST"
                action="https://api.web3forms.com/submit"
                className="flex flex-wrap mx-0"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="3fdf8276-f8ff-45ea-a9a4-b141653996a3"
                />
                <div className="w-full p-2">
                  <TextInput
                    name="name"
                    label="Name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="w-full xl:w-1/2  p-2">
                  <TextInput
                    name="email"
                    label="Email"
                    placeholder="Your Official Email"
                    type="email"
                    required
                  />
                </div>
                <div className="w-full xl:w-1/2 p-2">
                  <TextInput
                    name="phone"
                    label="Phone"
                    placeholder="eg: +91 XXXXXXXXXX"
                    required
                  />
                </div>
                <div className="w-full p-2">
                  <TextInput
                    name="company"
                    label="Institution / Organization / Company"
                    placeholder="eg: Indian Institute of Technology"
                  />
                </div>
                <div className="w-full p-2">
                  <TextInput
                    name="message"
                    label="Message"
                    type="textarea"
                    placeholder="your message"
                  />
                </div>
                <div className="h-captcha p-2" data-captcha="true" />
                <div className="w-full mt-4 p-2">
                  <button
                    type="submit"
                    className="bg-neutral-900 text-white h-full w-full font-semibold rounded-2xl p-4 text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <script
                src="https://web3forms.com/client/script.js"
                async
                defer
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
