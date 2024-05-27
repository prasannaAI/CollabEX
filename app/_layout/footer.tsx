import React from "react";
import Link from "next/link";
import MovingButton from "@/components/MovingButton";
import Image from "next/image";
import clsx from "clsx";

const SOCIAL_LINKS = [
  {
    icon: 'ri-instagram-fill',
    link: 'https://www.instagram.com/collabrexinnovations/'
  },
  {
    icon: 'ri-facebook-fill',
    link: 'https://www.facebook.com/CollabrEXInnovations/'
  },
  {
    icon: 'ri-linkedin-fill',
    link: '#'
  },
  {
    icon: 'ri-twitter-x-fill',
    link: '#'
  },
];

const FOOTER_MENU = [
  {
    title: 'Solutions',
    items: [
      {
        title: 'For Education',
        link: '/#solutions?edu'
      },
      {
        title: 'For Innovation',
        link: '/#solutions?innovation'
      },
      {
        title: 'For Tech Services',
        link: '/#solutions?tech'
      },
    ]
  },
  {
    title: 'Company',
    items: [
      {
        title: 'About',
        link: '#/about'
      },
      {
        title: 'Careers',
        link: '#/careers'
      },
      {
        title: 'Contact',
        link: '/contact'
      },
      {
        title: 'Wall of Love',
        link: '#/testimonials'
      }
    ]
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Blog',
        link: '#/blog'
      },
      {
        title: 'Resources',
        link: '#/resources'
      },
      {
        title: 'FAQs',
        link: '#/faqs'
      },
    ]
  }
];

const LEGALS = [
  {
    title: 'Privacy Policy',
    link: '#/privacy'
  },
  {
    title: 'Terms & Conditions',
    link: '#/terms'
  },
]

const Footer = () => (
  <footer className="relative">
    <div
      className="bg-[#fff9e6] half-circle h-[7vw] flex items-center justify-center"
    />
    <div className="bg-[#fff9e6] p-4">
      <div className="flex flex-col items-center py-[7.25vh]">
        <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center mb-6">
          Collaborations<br/>
          Fueling Innovation
        </h3>
        <p className="mb-8 text-center text-lg md:text-xl lg:text-2xl">
          We welcome you to CollabrEX where Collaborations Drives Success
        </p>
        <Link href="/contact">
          <MovingButton>
            Let{`'`}s Discuss
          </MovingButton>
        </Link>
      </div>
      <div className="container py-8 px-1 border-amber-500/20 mx-auto">
        <div className="flex items-start flex-wrap mx-0">
          <div className="w-full lg:w-1/3 xl:w-1/4 p-2 flex justify-center md:justify-start">
            <div>
              <Link href="/">
                <Image
                  src="/collabrex-color-logo.png"
                  alt="Collabrex"
                  width={233.4}
                  height={40}
                  draggable={false}
                  className="w-[233px]"
                />
              </Link>
              <div className="mt-10 lg:mt-12 flex justify-center md:justify-start gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <Link
                    href={s.link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    key={s.icon}
                    className={clsx([
                      "text-2xl flex items-center w-[45px] h-[45px] justify-center rounded-full bg-amber-400 text-black",
                      "hover:bg-neutral-900 hover:text-white"
                    ])}
                  >
                    <i className={s.icon} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-2/3 xl:w-3/4 mt-6 md:mt-0 py-2">
            <div className="flex md:flex-row flex-col items-center justify-end gap-3">
              <div className="md:text-lg lg:text-xl text-center md:text-left">
                Sign up to our newsletter and stay hip.
              </div>
              <div className="w-full max-w-[400px]">
                <form
                  action="https://api.web3forms.com/submit" method="POST"
                  className="relative border-4 border-amber-200/50 hover:border-amber-200 rounded-full"
                >
                  <input type="hidden" name="access_key" value="34aba982-fde1-4389-acae-97cac6b08b06"/>
                  <input type="hidden" name="form_location" value="NEWSLETTER_SUBSCRIPTION"/>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email" required
                    className="flex w-full py-4 px-6 text-lg relative rounded-full outline-0 overflow-hidden bg-white"
                  />
                  <div className="absolute top-0 right-0 h-full p-2">
                    <button
                      type="submit"
                      className="bg-amber-200 h-full font-semibold rounded-full px-4 py-2 text-lg"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <script src="https://web3forms.com/client/script.js" async defer></script>
              </div>
            </div>
            <div className="flex flex-wrap justify-end mx-0 mt-4">
            {FOOTER_MENU.map((section) => (
                <div key={section.title} className="w-full md:w-1/3 lg:w-1/4 p-2">
                  <div className="font-semibold text-lg md:text-xl border-b-2 border-neutral-950/80  pb-2 mb-4">
                    {section.title}
                  </div>
                  <div className="flex flex-col md:text-lg gap-2">
                  {section.items.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        className="hover:text-amber-600"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left gap-3 justify-between items-start mt-4 lg:mt-6 xl:mt-8 border-t-2 border-neutral-950/80 py-6">
          <div className="w-full">
            <div>
              © 2024 Collabrex Innovations Pvt. Ltd.
            </div>
            <div>
              All Rights Reserved.
            </div>
          </div>
          <div className="flex items-center w-full justify-center md:justify-end text-sm md:text-base gap-3">
            {LEGALS.map((l) => (
              <Link href={l.link} key={l.link}>
                {l.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;