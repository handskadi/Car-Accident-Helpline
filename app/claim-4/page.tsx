import AnimatedArrow from "@/components/AnimatedArrow";
import CallButton from "@/components/CallButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="w-full text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center w-full px-4 py-12 gap-6 bg-[#1b5ad022] dark:bg-[#1b5ad022] bg-no-repeat bg-center"
      // style={{
      //   backgroundImage: "url('/hero-bg.png')",
      //   backgroundSize: "80%",
      // }}
      >
        {/* Headline */}
        <h1 className="text-4xl font-bold">Start Your Claim</h1>
        <p className="max-w-[490px] text-base">
          Dedicated Car Accident Helpline Support Available 24/7
        </p>

        {/* CTA */}
        <h2 className="text-sm font-bold uppercase mt-2">
          Call Us Now for Immediate Assistance
        </h2>

        <Link
          href="tel:8882964072"
          className="flex items-center justify-center gap-6 pl-12 pr-14 py-4 rounded-2xl shadow-md bg-[#1B5BD0] text-white border border-white hover:bg-[#263f6d] hover:border-[#1B5BD0] transition-colors duration-300 border-4"
        >
          <div className="animate-swing text-white  hover:text-[#33E5F5] transition-colors duration-300">
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
          <span className="font-extrabold text-lg">(888) 296-4072</span>
        </Link>

        {/* Wait Time */}
        <div className="flex items-center gap-3">
          <div className="relative mr-[15px]">
            <AnimatedArrow />
          </div>

          <span className="text-sm mt-0.5">
            Estimated wait time: <span className="font-bold">under 3 minutes</span>
          </span>
        </div>

        <p className="max-w-[490px] text-base mt-4">
          Our national partner network of U.S. bodyshops work with all major insurance companies to handle all aspects of your accident claim.        </p>
      </section>


      {/* Section 1 */}
      <section className="w-full px-4 lg:px-80 py-8 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 py-8 border-b border-[#1b5bd04a] ">
          <div className="lg:w-1/2">
            <Image
              src="/images/img1.jpg"
              alt="Family image"
              width={768}
              height={432}
              className="rounded-md"
              priority
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Who are we?</h2>
            <p className="mb-4 text-gray-700">
              We are a U.S.-based company specialising in providing car accident claims support to drivers who need help navigating the aftermath of a crash.
            </p>
            <p className="my-6 text-gray-700">
              At Car Accident Line, we take the stress out of managing car accident claims. Our U.S.-based team focuses on guiding you through the process with a simple, no-hassle approach. From same-day comparable replacement vehicles to manufacturer-approved repairs, we handle the details so you can focus on recovery and peace of mind.
            </p>
            <p className="my-6 text-gray-700">
              <strong>Disclaimer: </strong> As an independent service, we have no ties to insurance companies or third parties. Our only priority is protecting your rights and ensuring you get the support you deserve throughout your car accident claim.
            </p>
            <CallButton phoneNumber="8882964072" displayText="(888) 296-4072" />

          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full px-4 lg:px-80 py-8 bg-white">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 py-8 border-b border-[#1b5bd04a] ">
          <div className="lg:w-1/2">
            <Image
              src="/images/img2.jpg"
              alt="Family picnic"
              width={768}
              height={432}
              className="rounded-md"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Why Trust Us?</h2>
            <p className="mb-4 text-gray-700">
              When you’re dealing with a car accident claim, you need more than promises, you need results. Car Accident Line has built its reputation on delivering fast, independent claims support that puts drivers first every time.            </p>
            <ul className="mb-6 text-gray-700 list-disc pl-5 space-y-2">
              <li><strong>Same-Day Vehicle Replacement:</strong> Comparable cars, SUVs, vans, or motorcycles, delivered quickly so you’re never left without transportation.</li>
              <li><strong>Manufacturer-Approved Repairs:</strong> Quality you can trust that protects your vehicle’s value.</li>
              <li><strong>Independent &amp; Unbiased Advice:</strong> No insurance company affiliations—our loyalty is to you.</li>
              <li><strong>Proven Track Record:</strong> Thousands of successful claims managed for drivers nationwide.</li>
              <li><strong>Transparent Process:</strong> No hidden fees, no surprises—straightforward support from start to finish.</li>
            </ul>
            <p className="mb-6 text-gray-700">
              Your recovery starts the moment you call. Speak with our U.S.-based team today and get the claims support you need.
            </p>
            <CallButton phoneNumber="8882964072" displayText="(888) 296-4072" />

          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full px-4 lg:px-80 py-8 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-10 py-8 border-b border-[#1b5bd04a]">
          <div className="lg:w-1/2">
            <Image
              src="/images/img3.jpg"
              alt="Accident support image"
              width={768}
              height={432}
              className="rounded-md"
              priority
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">What’s Covered?</h2>
            <p className="mb-4 text-gray-700">
              We handle every aspect of your car accident claim from start to finish.
            </p>
            <ul className="mb-6 text-gray-700 list-disc pl-5 space-y-2">
              <li>
                <strong>Roadside Recovery:</strong> If your vehicle can’t be driven, we’ll arrange fast roadside assistance and towing—getting you and your vehicle to safety without delay.

              </li>
              <li>
                <strong>Vehicle Replacement:</strong> Stay mobile with a comparable rental or replacement vehicle arranged quickly, so you’re never left without transportation.
              </li>
              <li>
                <strong>Accident Repairs:</strong> Your vehicle will be restored using manufacturer-approved parts by trusted professionals, ensuring quality and protecting its value.
              </li>
            </ul>
            <CallButton phoneNumber="8882964072" displayText="(888) 296-4072" />

          </div>
        </div>
      </section>

      {/* Know More about us  + FAQ*/}
      <section className="flex flex-col w-full px-4 pt-20 pb-8 gap-6 lg:px-80 bg-white">
        {/* Heading & Intro Text */}
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-2xl font-bold">Want to know more?</h2>
          <p className="max-w-[490px] text-base text-gray-700">
            Have questions about your accident claim? We&apos;ve got the answers. Explore our FAQs to learn how we make the process hassle-free and at no cost to you.
          </p>
        </div>

        {/* FAQ List */}
        {[
          {
            "q": "What happens when you make a car accident claim?",
            "a": "If you’ve been involved in a car accident, you can choose to go through an independent service like Car Accident Line. We’ll provide a replacement vehicle, coordinate repairs, and handle communication with the insurance company, helping you stay stress-free throughout the process."
          },
          {
            "q": "What are my rights when making a car accident claim?",
            "a": "You have the right to file a claim for all reasonable damages. This can include the cost of repairs, a rental or replacement vehicle, and, where applicable, compensation for injuries, lost wages, and other expenses."
          },
          {
            "q": "How quickly can I get a replacement vehicle?",
            "a": "In most cases, we can arrange a like-for-like rental or replacement vehicle the very same day you report your accident."
          },
          {
            "q": "Are repairs guaranteed?",
            "a": "Yes. All repairs are completed using manufacturer-approved parts and come with a guarantee for as long as you own the vehicle."
          },
          {
            "q": "Do I have to pay anything upfront for my car accident claim?",
            "a": "If liability is accepted by the insurance company, you should not have to pay your deductible. When you work with Car Accident Line, we deal directly with the insurer so you avoid paying out of pocket up front."
          },
          {
            "q": "What documentation do I need?",
            "a": "Typically, we’ll need your driver’s license, insurance information, and basic accident details. Our team will guide you through the exact requirements when you call."
          },
          {
            "q": "Will my insurance rates go up after a car accident claim?",
            "a": "In the U.S., your premium generally should not increase if you were not at fault. However, some insurers may still adjust your rates after any accident. Using an independent accident management service can help minimise the impact on your policy."
          },
          {
            "q": "Do I need to use my own insurance for a car accident claim?",
            "a": "Not always. If the other driver’s insurance company accepts responsibility, their policy should cover your losses. However, depending on your own policy, you may choose to go through your insurer first and they will recover costs from the other party."
          }
        ].map((item, index) => (
          <details
            key={index}
            className="border-b border-[#1b5bd04a] py-4 group"
          >
            <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-black">
              {item.q}
              <span className="relative text-[#1B5BD0] text-2xl w-6 h-6 flex items-center justify-center">
                <span className="block group-open:hidden">+</span>
                <span className="hidden group-open:block">−</span>
              </span>
            </summary>
            <div className="text-gray-700 mt-2 pr-6 text-base font-bold leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </section>

      <Footer phoneNumber="8882964072" displayText="(888) 296-4072" />

    </main>
  );
}
