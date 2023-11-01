'use client';

import { AboutMe } from '@/components/AboutMe';
import { Contact } from '@/components/Contact';
import { Process } from '@/components/Process';
import { Projects } from '@/components/Projects';
import { Title } from '@/components/Title';

export default function Home() {
  return (
    <main className="px-[15px] laptop:px-[36px]">
      <Title />
      <div className="mt-[240px] laptop:mt-[387px]"></div>
      <Projects />
      <div className="mt-[240px] laptop:mt-[387px]"></div>
      <AboutMe />
      <div className="mt-[40px] laptop:mt-[187px]"></div>
      <Process />
      <div className="mt-[40px] laptop:mt-[187px]"></div>
      <Contact />
    </main>
  );
}
