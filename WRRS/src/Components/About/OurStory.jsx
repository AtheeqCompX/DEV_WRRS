import { useState } from "react";

export default function OurStory() {
  

  return (
    < >
    <div className="bg-[#F8F7FC]">
      <div className="bg-[#F8F7FC] min-h-screen">
        <main className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] uppercase tracking-wide">
                OUR STORY
              </h1>
              <div className="w-20 h-1 bg-[#BC1EB0] mx-auto mt-3"></div>
            </div>

            <div className="mb-16">
              <img
                src="https://placehold.co/1200x600"
                alt="Women's Empowerment International team"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            <div className=" text-gray-700 text-sm leading-relaxed text-justify max-w-4xl mx-auto mb-16">
              <p className="mb-6">
                Women's Empowerment International (WE) was founded in San Diego,
                California in 2003 with a meeting among friends and colleagues.
                This group of visionary women had an ambitious goal: to disrupt
                the cycle of poverty for women around the world, especially those
                experiencing extreme poverty and living in under-resourced, rural
                communities.
              </p>
              <p className="mb-6">
                Together, in 2005, they launched WE as a 501(c)(3) nonprofit
                organization focused on funding microfinance programs that
                provided small, repayable loans to help women start modest,
                income-generating businesses. With their income, women could
                support themselves, be able to pay for their children's
                education, strengthen their families, and slowly, strengthen
                their communities. In time, change can be created for generations
                to come.
              </p>
              <p className="mb-6 ">
                <strong>
                  Today, Women's Empowerment International remains true to our
                  founders' vision.
                </strong>
              </p>
              <p className="mb-6">
                WE was run entirely by volunteer board and committee members
                until 2016 when it was able to bring on its first executive
                director. Since then, the organization has grown to two staff
                positions and continues with a strong, passionate group of board
                members, committee members, and other dedicated volunteers. Over
                the last two decades,{" "}
                <strong>
                  WE has provided over $2.8 million in funding for programs in 15
                  countries
                </strong>
                , including the U.S. and Puerto Rico, Benin, El Salvador, Ghana,
                Guatemala, Haiti, Honduras, Mexico, and Uganda. WE continues to
                fund microfinance programs and has expanded its support to
                include small business development support, training, education,
                and other barrier-breaking efforts centered around women's
                economic empowerment.
              </p>
              <p>WE remains headquartered in San Diego, CA.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              <img
                src="https://placehold.co/600x400"
                alt="Women in purple attire"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <img
                src="https://placehold.co/600x400"
                alt="Woman receiving a loan or gift"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <img
                src="https://placehold.co/600x400"
                alt="Group celebrating with hands up"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </main>
      </div>

      <div className="h-auto flex-col flex mx-auto max-w-7xl px-6 md:px-12 pb-16 ">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#BC1EB0] mt-10 mb-5">
            Our Vision
          </h1>
          <p className="text-justify text-[#1F1F1F]">
            We envision a world without poverty in which women are empowered,
            uplifted, and equal partners in society. Women live in safe,
            sustainable environments that include adequate food, water, housing,
            education, and health care. They have the hope, opportunity, and
            ability to control their lives and futures.
          </p>
        </div>

        <div className="mb-10 text-right">
          <h1 className="text-3xl font-bold text-[#BC1EB0] mt-10 mb-5">
            Our Mission
          </h1>
          <p className="text-justify text-[#1F1F1F]">
            We strive to empower women worldwide by providing access to
            opportunities, education, and resources that allow them to achieve
            financial independence, lead change, and create sustainable futures
            for themselves and their communities.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
