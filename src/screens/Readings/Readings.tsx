import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";

export const Readings = (): JSX.Element => {
  // Reading items data
  const readingItems = [
    {
      course: "MDPM 888",
      title: "Introduction to the Digital Product Marketing Lifecycle",
      subtitle: " – Case Discussion",
    },
    {
      course: "MDPM 884",
      year: "(2022). ",
      title: "The Complete Guide to A/B Testing in a Cookieless World.",
      source: "GuessTheTest.",
      url: "https://guessthetest.com/the-complete-guide-toa-b-testing-in-a-cookieless-world/",
    },
  ];

  // Navigation items data
  const navigationItems = [
    { name: "Home", link: "/coming-up-u40mainu41", active: false },
    { name: "Courses", link: "/courses", active: false },
    { name: "Readings", link: "", active: true },
    { name: "Assignments", link: "/assignments", active: false },
  ];

  return (
    <div
      className="bg-[#f2a9e1] flex flex-row justify-center w-full"
      data-model-id="1:56"
    >
      <div className="bg-[#f2a9e1] w-[393px] h-[852px] relative">
        {/* Status bar */}
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

        {/* Header banner */}
        <div className="absolute w-[393px] h-[99px] top-[49px] left-0 bg-[url(/img/8f9b6b43-d0f9-4a51-9a67-54e1b1623ad1-5.png)] bg-cover bg-[50%_50%]">
          <h1 className="absolute top-[21px] left-10 [font-family:'Inter',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
            MDPM Information
          </h1>
        </div>

        {/* Page title */}
        <h2 className="absolute top-[156px] left-[22px] [font-family:'Inter',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
          Readings
        </h2>

        {/* Readings content card */}
        <Card className="absolute w-[346px] h-[550px] top-[205px] left-[22px] bg-[#d9d9d9] rounded-none border-none shadow-none">
          <CardContent className="p-0">
            <ScrollArea className="relative w-[303px] h-[516px] mt-[22px] mx-auto">
              <div className="w-[303px] [font-family:'Inter',Helvetica] font-normal text-base tracking-[0] leading-[normal]">
                {readingItems.map((item, index) => (
                  <div key={index} className="mb-4">
                    <span className="text-[#207ef9]">
                      {item.course}
                      <br />
                    </span>
                    {item.year && (
                      <span className="text-[#010101]">{item.year}</span>
                    )}
                    <span className="italic text-[#010101]">
                      {item.title}
                      <br />
                    </span>
                    {item.subtitle && (
                      <span className="text-[#010101]">
                        {item.subtitle}
                        <br />
                      </span>
                    )}
                    {item.source && (
                      <span className="text-[#010101]">
                        {item.source}
                        <br />
                      </span>
                    )}
                    {item.url && (
                      <span className="text-[#010101]">{item.url}</span>
                    )}
                    {index < readingItems.length - 1 && (
                      <span className="text-[#207ef9]">
                        <br />
                        <br />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Navigation bar */}
        <div className="absolute bottom-[17px] left-[29px] flex space-x-[30px]">
          {navigationItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {item.link ? (
                <Link to={item.link} className="flex flex-col items-center">
                  <div className="w-[45px] h-[43px] bg-[#d9d9d9] rounded-[10px] border border-solid border-black" />
                  <div className="mt-3 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    {item.name}
                  </div>
                </Link>
              ) : (
                <>
                  <div className="w-[45px] h-[43px] bg-[#d9d9d9] rounded-[10px] border border-solid border-black" />
                  <div className="mt-3 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    {item.name}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
