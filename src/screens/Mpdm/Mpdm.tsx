import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";

export const Mpdm = (): JSX.Element => {
  return (
    <div
      className="bg-[#f2a9e1] flex flex-row justify-center w-full"
      data-model-id="1:92"
    >
      <div className="bg-[#f2a9e1] w-[393px] h-[852px] relative">
        {/* Page Title */}
        <h1 className="top-[202px] left-[27px] font-bold text-black text-[32px] absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
          MDPM 884
        </h1>

        {/* Back Button */}
        <Button
          variant="link"
          asChild
          className="absolute top-[164px] left-[31px] [-webkit-text-stroke:1px_#5e8df1] [font-family:'Inter',Helvetica] font-normal text-black text-xl p-0 h-auto"
        >
          <Link to="/">Back</Link>
        </Button>

        {/* Status Bar */}
        <header className="flex flex-col w-[393px] h-[49px] items-start pt-[21px] pb-0 px-0 absolute top-0 left-0 bg-system-colors-backgrounds-primary">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-2.5 pl-4 pr-1.5 py-0 relative flex-1 grow">
              <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-system-colors-labels-primary text-[17px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                9:41
              </div>
            </div>

            <div className="relative w-[124px] h-2.5" />

            <img
              className="relative flex-1 grow"
              alt="Status indicators"
              src="/img/levels-4.svg"
            />
          </div>
        </header>

        {/* Header Banner */}
        <div className="absolute w-[393px] h-[99px] top-[49px] left-0 bg-[url(/img/8f9b6b43-d0f9-4a51-9a67-54e1b1623ad1-5.png)] bg-cover bg-[50%_50%]">
          <h2 className="top-[21px] left-10 font-normal text-white text-4xl absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[normal]">
            MDPM Information
          </h2>
        </div>

        {/* Course Content Card */}
        <div className="absolute w-[346px] h-[550px] top-[255px] left-6">
          <Card className="absolute w-[346px] h-[550px] top-0 left-0 bg-[#d9d9d9] rounded-none border-none">
            <CardContent className="p-0">
              <Link className="block w-full h-full" to="/mpdm-884">
                <ScrollArea className="w-[303px] h-[528px] mx-auto my-[13px]">
                  <div className="w-[303px] [font-family:'Inter',Helvetica] font-normal">
                    <h3 className="font-bold text-[#b94242] text-xl mb-2">
                      Product Analytics
                    </h3>

                    <p className="text-[#010101] text-base">
                      This applied course teaches you how to adeptly collect,
                      analyze, and report analytics data to make informed
                      product marketing decisions that have a positive business
                      impact.
                    </p>

                    <p className="text-[#010101] text-base mt-4">
                      With a focus on website analytics and conversion data,
                      you&apos;ll begin by learning about website analytics data
                      collection, the major shifts currently disrupting the
                      industry, and the top techniques to adapt in this
                      quickly-changing landscape.
                    </p>

                    <p className="text-[#010101] text-base mt-4">
                      Next, you&apos;ll dig into the world&apos;s most-used web
                      analytics platform, Google Analytics, and will get a
                      high-level overview of how to use Google&apos;s GA4
                      platform. In GA4, you&apos;ll learn how to extract
                      meaningful conversion and analytics insights to understand
                      who your customers are and where the leaks are within your
                      conversion funnel. You&apos;ll also practice segmenting
                      analytics data to derive personalized conversion insights
                      to distinct user cohorts. To get a fuller picture of your
                      users, and how they convert, you&apos;ll next learn about
                      the power of heatmapping analytics data. You&apos;ll
                      receive high-level instruction on how to use Microsoft
                      Clarity&apos;s heatmapping platform to make conversion
                      decisions to optimize product marketing impact.
                    </p>

                    <p className="text-[#010101] text-base mt-4">
                      Finally, you&apos;ll learn how to assess and summarize
                      these analytics findings into a comprehensive analytics
                      report that can be presented to management or
                      stakeholders. The report will suggest ways to optimize
                      conversions of your digital product with the goal of
                      increasing sales in the broader marketplace.
                    </p>
                  </div>
                </ScrollArea>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
