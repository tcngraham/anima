import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";

export const ComingUpMain = (): JSX.Element => {
  // Data for upcoming sessions
  const virtualSessions = [
    {
      date: "Friday, Jul 11, 09:30-13:00",
      course: "MDPM 888, Session 6",
      title:
        "How to design network effects and product moats to scale your digital products",
    },
    {
      date: "Monday, Jul 14, 18:00-21:30",
      course: "MDPM 884, Session 1",
      title: "Analytics data, websites, and the crumbling of cookies",
    },
    {
      date: "Tuesday, Jul 15, 18:00-21:30",
      course: "MDPM 910, Session 11",
      title: "Proof of Concept (POC) and Digital Product Roadmapping",
    },
  ];

  // Navigation items
  const navItems = [
    { name: "Home", path: "/", width: "w-[45px]", left: "left-9" },
    {
      name: "Courses",
      path: "/courses",
      width: "w-[63px]",
      left: "left-[111px]",
      iconLeft: "left-[9px]",
    },
    {
      name: "Readings",
      path: "/readings",
      width: "w-[70px]",
      left: "left-[191px]",
      iconLeft: "left-[13px]",
    },
    {
      name: "Assignments",
      path: "/assignments",
      width: "w-[98px]",
      left: "left-[270px]",
      iconLeft: "left-[27px]",
    },
  ];

  return (
    <div
      className="bg-[#f2a9e1] flex flex-row justify-center w-full"
      data-model-id="1:80"
    >
      <div className="bg-[#f2a9e1] w-[393px] h-[852px] relative">
        {/* Main content card */}
        <Card className="absolute w-[346px] h-[550px] top-[205px] left-[22px] bg-[#d9d9d9] rounded-none border-none shadow-none">
          <CardContent className="p-0">
            <ScrollArea className="relative w-[315px] h-[520px] mt-[15px] mx-auto">
              <div className="p-3 space-y-4">
                {/* Mandatory Virtual Sessions */}
                <div>
                  <h2 className="font-bold text-black text-xl">
                    Mandatory Virtual Sessions
                  </h2>

                  {virtualSessions.map((session, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-[#b94242] text-base">{session.date}</p>
                      <p className="italic text-black text-base">
                        {session.course}
                      </p>
                      <p className="text-black text-base">{session.title}</p>
                    </div>
                  ))}
                </div>

                {/* Assignments Due */}
                <div>
                  <h2 className="font-bold text-black text-xl">
                    Assignments Due
                  </h2>
                  <p className="text-[#b94242] text-base">
                    Comparative Case Assignment
                  </p>
                  <p className="text-black text-base">
                    MDPM 888
                    <br />
                    Due: Saturday, Jul 12 at 23:59
                  </p>
                </div>

                {/* Important Notices */}
                <div>
                  <h2 className="font-bold text-black text-xl">
                    Important Notices
                  </h2>
                  <p className="text-base">
                    <span className="text-[#b94242]">Class Absence</span>
                    <span className="text-black">
                      {" "}
                      – Very Important
                      <br />
                      If you are going to miss any class sessions or plan to be
                      late/leave early, let me know as soon as possible!
                      Reminder that you can only miss up to 25% of any course
                      and arriving late or leaving early will count towards this
                      percentage.
                    </span>
                  </p>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Date heading */}
        <h1 className="absolute top-[156px] left-[22px] [font-family:'Inter',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
          Jul 11 - Jul 19, 2025
        </h1>

        {/* Navigation bar */}
        <nav className="absolute bottom-4 w-full flex justify-around">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`${item.width} h-16 ${item.left} absolute`}
            >
              {item.path === "/" ? (
                <>
                  <div className="left-0 absolute w-[45px] h-[43px] top-0 bg-[#d9d9d9] rounded-[10px] border border-solid border-black" />
                  <div className="absolute top-11 left-0 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    {item.name}
                  </div>
                </>
              ) : (
                <Link className="block w-full h-full" to={item.path}>
                  <div
                    className={`${item.iconLeft || "left-0"} absolute w-[45px] h-[43px] top-0 bg-[#d9d9d9] rounded-[10px] border border-solid border-black`}
                  />
                  <div className="absolute top-11 left-0 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    {item.name}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </nav>

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
              src="/img/levels-3.svg"
            />
          </div>
        </div>

        {/* Header banner */}
        <div className="absolute w-[393px] h-[99px] top-[49px] left-0 bg-[url(/img/8f9b6b43-d0f9-4a51-9a67-54e1b1623ad1-5.png)] bg-cover bg-[50%_50%]">
          <h1 className="absolute top-[21px] left-10 [font-family:'Inter',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
            MDPM Information
          </h1>
        </div>
      </div>
    </div>
  );
};
