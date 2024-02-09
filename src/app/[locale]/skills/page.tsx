/* eslint-disable max-lines */
'use client';
import { useState } from 'react';

import { Icon } from '@/components/atoms/Icon';

// eslint-disable-next-line max-lines-per-function, sonarjs/cognitive-complexity
export default function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  return (
    <div className="relative z-10 h-[calc(100dvh-23px)] flex flex-col tablet:flex-row justify-center items-center laptop:pt-[calc((100dvh)/3-150px)] pt-0 laptop:px-16 px-8">
      {/* <div className="flex flex-row justify-evenly items-center h-7 m-3 backdrop-blur-sm hover:backdrop-invert"> */}

      {/* Start first column */}
      <div className="pr-32 tablet:block hidden">
        <div
          className={
            showAllSkills ? 'transform translate-x-[-50%] transition-transform duration-500' : ''
          }>
          <Icon name="Nextjs" size={90} className="mr-12 " />
          <Icon name="Typescript" size={100} className="ml-12" />
        </div>
        <div
          className={
            showAllSkills ? 'transform translate-x-[-50%] transition-transform duration-500' : ''
          }>
          <Icon name="React" size={100} className="mr-12 " />
          <Icon name="ReactNative" size={70} className="ml-12" />
        </div>
        <div
          className={
            showAllSkills ? 'transform translate-x-[-50%] transition-transform duration-500' : ''
          }>
          <Icon name="Firebase" size={140} className="mr-12" />
          <Icon name="Expo" size={80} className="ml-12" />
        </div>
      </div>
      {/* End first column */}

      {/* //////// Responsive /////// */}
      <div className="pr-0 tablet:hidden block mb-8">
        <div
          className={`flex flex-row items-center ${
            showAllSkills ? 'transform translate-y-[-140%] transition-transform duration-500' : ''
          }
          `}>
          <Icon name="Nextjs" size={60} className="mx-3 border" />
          <Icon name="Typescript" size={60} className="mx-3" />
        </div>
        <div
          className={`flex flex-row items-center ${
            showAllSkills ? 'transform translate-y-[-140%] transition-transform duration-500' : ''
          }
          `}>
          <Icon name="React" size={60} className="mx-3" />
          <Icon name="ReactNative" size={60} className="mx-3" />
        </div>
        <div
          className={`flex flex-row items-center ${
            showAllSkills ? 'transform translate-y-[-140%] transition-transform duration-500' : ''
          }
          `}>
          <Icon name="Firebase" size={60} className="mx-3" />
          <Icon name="Expo" size={60} className="mx-3" />
        </div>
      </div>
      {/* //////// END Responsive /////// */}

      {/* Appears and disappears start */}
      <div>
        <div className="absolute left-[calc(100dvw/2-200px)] tablet:flex flex-col hidden">
          <div className="flex flex-row items-center justify-center">
            <Icon
              name="Postman"
              size={120}
              className={
                showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
              }
            />
            <Icon
              name="Figma"
              size={90}
              className={
                showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
              }
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <Icon
              name="Trello"
              size={90}
              className={
                showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
              }
            />
            <Icon
              name="VsCode"
              size={80}
              className={
                showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
              }
            />
          </div>
        </div>
      </div>

      <p
        className={`absolute z-50 tablet:text-h3 text-body20 hover:text-[#CACACA] hover:cursor-pointer text-center ${
          showAllSkills ? 'opacity-0' : 'transition-opacity duration-800 ease-in-out'
        }`}
        onClick={() => setShowAllSkills(true)}>
        dévoile +
      </p>

      <div className="absolute left-[calc(100dvw/2-200px)]  top-[calc(100dvh/2-200px)] tablet:flex flex-col hidden">
        <div className="flex flex-row items-center justify-center">
          <Icon
            name="Jest"
            size={100}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
          <Icon
            name="Redux"
            size={100}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <Icon
            name="Stripe"
            size={80}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
          <Icon
            name="Storybook"
            size={110}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
        </div>
      </div>

      {/* ////////  Responsive /////// */}
      <div className="absolute flex flex-col tablet:hidden">
        <div className="flex flex-row items-center justify-center">
          <Icon
            name="Postman"
            size={60}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
          <Icon
            name="Figma"
            size={60}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <Icon
            name="Trello"
            size={60}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
          <Icon
            name="VsCode"
            size={60}
            className={
              showAllSkills
                ? 'border mx-5 transition-opacity duration-500 ease-in-out'
                : 'opacity-0'
            }
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <Icon
            name="Jest"
            size={60}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
          <Icon
            name="Redux"
            size={60}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <Icon
            name="Stripe"
            size={60}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
          <Icon
            name="Storybook"
            size={60}
            className={
              showAllSkills ? 'mx-5 transition-opacity duration-500 ease-in-out' : 'opacity-0'
            }
          />
        </div>
      </div>
      {/* ////////  END Responsive /////// */}

      {/* Appears and disappears end */}

      {/* Start second column */}
      <div className="tablet:pl-72 pl-0 tablet:block hidden">
        <div
          className={
            showAllSkills ? 'transform translate-x-[50%] transition-transform duration-500' : ''
          }>
          <Icon name="Brevo" size={90} className="ml-12" />
          <Icon name="Prismic" size={90} className="mr-12" />
        </div>

        <div
          className={
            showAllSkills ? 'transform translate-x-[50%] transition-transform duration-500' : ''
          }>
          <Icon name="Nodejs" size={90} className="ml-12" />
          <Icon name="MongoDb" size={110} className="mr-12" />
        </div>

        <div
          className={
            showAllSkills ? 'transform translate-x-[50%] transition-transform duration-500' : ''
          }>
          <Icon name="Graphql" size={90} className="ml-12" />
          <Icon name="Tailwind" size={120} className="mr-12" />
        </div>
      </div>
      {/* End second column */}

      {/* //////// Responsive /////// */}
      <div className="tablet:hidden block mt-8">
        <div
          className={`flex flex-row items-center ${
            showAllSkills ? 'transform translate-y-[140%] transition-transform duration-500' : ''
          }
          `}>
          <Icon name="Brevo" size={60} className="mx-3" />
          <Icon name="Prismic" size={60} className="mx-3" />
        </div>

        <div
          className={`flex flex-row items-center ${
            showAllSkills ? 'transform translate-y-[140%] transition-transform duration-500' : ''
          }
          `}>
          <Icon name="Nodejs" size={60} className="mx-3" />
          <Icon name="MongoDb" size={60} className="mx-3" />
        </div>

        <div
          className={`flex flex-row items-center ${
            showAllSkills ? 'transform translate-y-[140%] transition-transform duration-500' : ''
          }
          `}>
          <Icon name="Graphql" size={60} className="mx-3" />
          <Icon name="Tailwind" size={60} className="mx-3" />
        </div>
      </div>
      {/* //////// END Responsive /////// */}

      {/* </div> */}
    </div>
  );
}
