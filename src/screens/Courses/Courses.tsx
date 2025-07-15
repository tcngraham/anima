import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";

export const Courses = (): JSX.Element => {
  // Course data for mapping
  const courses = [
    {
      id: "884",
      title: "Product Analytics",
      description:
        "Tracking, analyzing, and reporting website analytics and conversion data to make informed product marketing decisions that resonate in the broader marketplace and have meaningful business impact.",
    },
    {
      id: "885",
      title: "Designing the Digital Product",
      description:
        "In this applied studio course, students will learn how to design and build proof-of-concept prototypes within a user-centred design process. Students will learn how to engage in the design of digital products informed by the needs of users and organizations. The course will introduce concrete tools for design such as scenarios, task models, and requirements documents. Students will gain hands-on experience with low-fidelity prototyping methods including paper prototyping and wireframe tools.",
    },
    {
      id: "888",
      title: "Designing the Digital Product",
      description:
        "In this applied studio course, students will learn how to design and build proof-of-concept prototypes within a user-centred design process. Students will learn how to engage in the design of digital products informed by the needs of users and organizations. The course will introduce concrete tools for design such as scenarios, task models, and requirements documents. Students will gain hands-on experience with low-fidelity prototyping methods including paper prototyping and wireframe tools.",
    },
  ];

  // Navigation items
  const navItems = [
    { name: "Home", path: "/coming-up-u40mainu41", left: "left-[30px]" },
    { name: "Courses", path: "", left: "left-[105px]", active: true },
    { name: "Readings", path: "/readings", left: "left-[185px]" },
    { name: "Assignments", path: "/assignments", left: "left-[264px]" },
  ];

  return (
    <div
      className="bg-[#f2a9e1] flex flex-row justify-center w-full"
      data-model-id="1:44"
    >
      <div className="bg-[#f2a9e1] w-[393px] h-[852px] relative">
        {/* Header section */}
        <div className="absolute w-[393px] h-[148px] top-0 left-0">
          <div className="w-[393px] h-[71px] left-0 bg-[#010101] absolute top-0" />

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
                src="/img/levels-3.svg"
              />
            </div>
          </div>

          <img
            className="absolute w-[393px] h-[99px] top-[49px] left-0 object-cover"
            alt="Element"
            src="/img/8f9b6b43-d0f9-4a51-9a67-54e1b1623ad1-5.png"
          />

          <div className="absolute top-[76px] left-[43px] [font-family:'Inter',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
            MDPM Information
          </div>
        </div>

        {/* Courses title */}
        <h1 className="absolute top-[156px] left-[22px] [font-family:'Inter',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
          Courses
        </h1>

        {/* Courses content card */}
        <Card className="absolute w-[346px] h-[550px] top-[205px] left-[22px] bg-[#d9d9d9] rounded-none border-none">
          <CardContent className="p-0">
            <Link to="/mpdm-884" className="block w-full h-full">
              <ScrollArea className="w-[303px] h-[516px] mx-auto my-[22px]">
                {courses.map((course, index) => (
                  <div key={index} className="mb-4">
                    <span className="text-[#207ef9] [font-family:'Inter',Helvetica] text-base">
                      MDPM {course.id}
                      <br />
                    </span>
                    <span className="font-bold text-[#010101] [font-family:'Inter',Helvetica] text-base">
                      {course.title}
                      <br />
                    </span>
                    <span className="text-[#010101] [font-family:'Inter',Helvetica] text-base">
                      {course.description}
                      <br />
                      <br />
                    </span>
                  </div>
                ))}
              </ScrollArea>
            </Link>
          </CardContent>
        </Card>

        {/* Navigation bar */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-around">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${item.left} absolute w-auto h-16 top-[771px]`}
            >
              {item.path ? (
                <Link to={item.path} className="flex flex-col items-center">
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
