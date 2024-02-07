'use client';
import { useState } from 'react';

import { Icon } from '@/components/atoms/Icon';

// eslint-disable-next-line max-lines-per-function
export default function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  return (
    <div className="relative z-10 h-[calc(100dvh-23px)] flex flex-col tablet:flex-row justify-center items-center laptop:pt-[calc((100dvh)/3-150px)] pt-0 laptop:px-16 px-8">
      {/* <div className="flex flex-row justify-evenly items-center h-7 m-3 backdrop-blur-sm hover:backdrop-invert"> */}
      <div className="tablet:pr-32 pr-0">
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
          <Icon name="Firebase" size={130} className="mr-12" />
          <Icon name="Expo" size={80} className="ml-12" />
        </div>
      </div>

      <div>
        {/* Appears and disappears start */}
        <div className="absolute left-[calc(100dvw/2-200px)] flex flex-col">
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

      <div className="absolute left-[calc(100dvw/2-200px)]  top-[calc(100dvh/2-200px)] flex flex-col ">
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

      {/* Appears and disappears end */}

      <div className="tablet:pl-72 pl-0">
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

      {/* </div> */}
    </div>
  );
}
