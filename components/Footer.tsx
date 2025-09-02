'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  phoneNumber: string;    // raw number for tel: (e.g. "8886119585")
  displayText?: string;   // formatted display (e.g. "(888) 611-9585")
}

const Footer: React.FC<FooterProps> = ({ phoneNumber, displayText }) => {
  const currentYear = new Date().getFullYear();
  const formattedDisplay = displayText || phoneNumber;

  return (
    <>
      {/* Top CTA Section */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="pt-24 pb-2 flex flex-col items-center justify-center gap-4">
          <p className="text-base font-bold text-black">Call us anytime on</p>
          <Link
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-6 pl-12 pr-14 py-4 rounded-xl shadow-md bg-[#1B5BD0] text-white border-[3px] border-white hover:bg-[#263f6d] hover:border-[#1B5BD0] transition-colors duration-300"
          >
            <div className="animate-swing text-white hover:text-[#33E5F5] transition-colors duration-300">
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <span className="font-extrabold text-lg">{formattedDisplay}</span>
          </Link>
          <p className="text-base font-bold text-black">Lines are open 24/7 all year.</p>
        </div>
      </section>

      {/* Decorative CTA Footer Section */}
      <section className="relative bg-[#1B5BD0] w-full overflow-hidden text-white">
        <div
          className="absolute w-full bg-white"
          style={{
            borderBottomLeftRadius: '100% 40%',
            borderBottomRightRadius: '100% 80%',
          }}
        >
          <h2 className="text-center text-2xl font-bold py-4 text-black"></h2>
        </div>
        <div className="pt-24 pb-8 flex flex-col items-center justify-center gap-4"></div>
      </section>

      {/* Footer Main */}
      <footer className="w-full bg-[#1B5BD0] text-sm text-white px-4 py-8 lg:px-80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Image
              src="/logo-white.svg"
              alt="Car Accident Line Logo"
              width={227}
              height={71}
              priority
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <ul className="space-y-2">
              <li>A quicker, cost-free, and hassle-free solution for handling accidents.</li>
              <li className="text-base font-bold">
                <span className="inline-flex items-center gap-1 text-[15px]">
                  {/* Phone Icon Small */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link href={`tel:${phoneNumber}`} className="underline">
                    Call us at {formattedDisplay}
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal / Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
          <p className="text-xs">
            PURE ROCKET MARKETING LLC, registered in the United States. Address: Unit C, Blackett Street, Manchester, USA. PURE ROCKET MARKETING LLC operates within the advertising sector, specializing in lead generation.
          </p>

          <p className="text-xs">
            Disclaimer: We are committed to providing clear, transparent, and accurate information to help you make informed decisions. Please be aware that while we aim to highlight the potential benefits of our services, results may vary depending on the specifics of your case. For example, liability determinations may affect eligibility for certain benefits. Additionally, in the event of an unsuccessful claim, you may still be responsible for certain costs, such as court fees or expenses. Our focus is on supporting you at every stage and helping you navigate any challenges confidently.
          </p>

          <p className="text-xs font-bold">© {currentYear} Car Accident Line. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
