import Link from 'next/link';

export const Header = () => {
  return (
    <div className="fixed z-50 bg-black w-full p-[15px] laptop:p-[36px] flex justify-between text-body11 tablet:text-body13 laptop:text-body18">
      <Link href="/">
        <p>Lisa-Lou Kara</p>
      </Link>
      <div className=" w-[202px] hidden laptop:flex flex-row laptop:w-[300px] justify-between">
        <Link href="#about-section">
          <p>À propos</p>
        </Link>
        <Link href="#projects-section">
          <p>Projets</p>
        </Link>
        <Link href="#contact-section">
          <p>Me contacter</p>
        </Link>
      </div>
    </div>
  );
};
