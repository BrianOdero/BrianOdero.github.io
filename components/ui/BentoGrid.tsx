"use client"

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "./Globe";
import { GridGlobe } from "./GridGlobe";
import { div } from "motion/react-client";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState<boolean>(false); //for setting the email copied state

  const handleCopy = async () => {
    {/**copying the email */}
    navigator.clipboard.writeText("brianodero7537@gmail.com");
    setCopied(true);

  }
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-2 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none border-red-500 relative overflow-hidden border ",
        className,
      )}
      style={{background: 'rgb(4,7,29)',backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba (12,14,35,1) 100)'}}>

      {/**for placing the images in the bento grid */}
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img src={img} alt={img} className={cn(imgClassName, 'object-cover object-center')} />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img src={spareImg} alt={spareImg} className={ 'object-cover object-center'} />
          )}
        </div>

          {/**for styling the sixth grid to have the purple background */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>
        )}

        {/**adding the description to the bento grid */}
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>

          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className=" font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

  

        {/**editing the specific sections of the bento grid based on their ids */}
        {id === 2 && <GridGlobe/>}

        {/**adding the tech stack styling div */}
       {/** Tech Stack Section */}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute right-0 bottom-0">
            <div className="flex flex-col gap-2 lg:gap-4">

              {/** First Column */}
              {['Next.js', 'Node.js', 'React Native Expo'].map((techStack) => (
                <span key={techStack} className="py-1.5 lg:py-2 px-3 text-xs lg:text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                  {techStack}
                </span>
              ))}

            </div>

            <div className="flex flex-col gap-2 lg:gap-4">

              {/** Second Column */}
              {['Supabase', 'TanstackQuery', 'NativeWind'].map((techStack) => (
                <span key={techStack} className="py-1.5 lg:py-2 px-3 text-xs lg:text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                  {techStack}
                </span>
              ))}

            </div>
          </div>
        )}



        {id === 6 && (
          <BackgroundGradientAnimation>
            
          </BackgroundGradientAnimation>
        )}



        {id === 6 && (
          <div className = "mt-5 relative">
            <div className = {`absolute -bottom-5 right-0`}>
              <Lottie options={{
                loop: copied, 
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}/>
            </div>

            <MagicButton 
              title={copied? 'Email Copied' : 'Copy My Email'}
              icon={<IoCopyOutline/>}
              position="left"
              handleClick={handleCopy}
              />

          </div>
        )}
      </div>

      <div className="transition duration-200 group-hover/bento:translate-x-2">
       
      </div>

    </div>
    </div>
  );
};
