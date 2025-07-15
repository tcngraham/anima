import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";

export const Assignments = (): JSX.Element => {
  // Navigation items data
  const navigationItems = [
    { name: "Home", path: "/coming-up-u40mainu41" },
    { name: "Courses", path: "/courses" },
    { name: "Readings", path: "/readings" },
    { name: "Assignments", path: null, active: true },
  ];

  return (
    <div
      className="bg-[#f2a9e1] flex flex-row justify-center w-full"
      data-model-id="1:68"
    >
      <div className="bg-[#f2a9e1] w-[393px] h-[852px] relative">
        {/* Assignment Card */}
        <Card className="absolute w-[346px] h-[550px] top-[205px] left-[22px] bg-[#d9d9d9] rounded-none shadow-none border-none">
          <CardContent className="p-0">
            <ScrollArea className="relative w-[303px] h-[516px] mt-[22px] mx-auto">
              <div className="[font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal]">
                <span className="text-[#207ef9]">
                  MDPM 888
                  <br />
                </span>

                <span className="font-bold text-[#010101]">
                  Comparative Case Assignment
                  <br />
                </span>

                <span className="text-[#010101]">
                  Due Sunday July 13, 11:59 PM
                  <br />
                  Individual, 30% of Course Grade
                  <br />
                  <br />
                  During Sessions 1-3 we will be discussing cases on Brandless
                  and Pepperfry.com. For this assignment, you will be asked to
                  compare and contrast the paths of these two organizations
                  using course concepts to explain the different outcomes of the
                  two. This assignment will provide you with the opportunity to
                  apply the course concepts about how an organization can pursue
                  growth by following strategies intended to facilitate and take
                  advantage of market
                  <br />
                  growth opportunities and/or applying tactics intended to drive
                  market share growth based on an understanding of the phases of
                  customer decision making and applying appropriate tactics
                  <br />
                  to drive conversion.
                </span>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Page Title */}
        <h1 className="absolute top-[156px] left-[22px] [font-family:'Inter',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
          Assignments
        </h1>

        {/* Navigation Bar */}
        <div className="absolute bottom-4 left-[30px] right-[30px] flex justify-between">
          {navigationItems.map((item, index) =>
            item.active ? (
              <div key={index} className="flex flex-col items-center w-[98px]">
                <div className="w-[45px] h-[43px] bg-[#d9d9d9] rounded-[10px] border border-solid border-black" />
                <div className="mt-2 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {item.name}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                className="flex flex-col items-center"
                to={item.path || "#"}
              >
                <div className="w-[45px] h-[43px] bg-[#d9d9d9] rounded-[10px] border border-solid border-black" />
                <div className="mt-2 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {item.name}
                </div>
              </Link>
            ),
          )}
        </div>

        {/* Status Bar */}
        <div className="flex flex-col w-[393px] h-[49px] items-start pt-[21px] pb-0 px-0 absolute top-0 left-0 bg-system-colors-backgrounds-primary">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-2.5 pl-4 pr-1.5 py-0 relative flex-1 grow">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-system-colors-labels-primary text-[17px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                9:41
              </div>
            </div>

            <div className="relative w-[124px] h-2.5" />

            <img
              className="relative flex-1 grow"
              alt="Levels"
              src="/img/levels-2.svg"
            />
          </div>
        </div>

        {/* Header Banner */}
        <div className="absolute w-[393px] h-[99px] top-[49px] left-0 bg-[url(/img/8f9b6b43-d0f9-4a51-9a67-54e1b1623ad1-5.png)] bg-cover bg-[50%_50%]">
          <div className="absolute top-[21px] left-10 [font-family:'Inter',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
            MDPM Information
          </div>
        </div>
      </div>
    </div>
  );
};
