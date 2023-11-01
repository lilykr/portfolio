import Link from 'next/link';

export const MobileMenu = () => {
  return (
    <div className="laptop:hidden fixed bottom-0 z-50 bg-black w-full p-[15px] laptop:p-[36px] flex justify-between text-body11 tablet:text-body13 laptop:text-body18">
      <div className=" w-full flex flex-row laptop:w-[300px] justify-between px-[50px]">
        <Link href="#about-section">
          <p className="text-body13">À propos</p>
        </Link>
        <Link href="#projects-section">
          <p className="text-body13">Projets</p>
        </Link>
        <Link href="#contact-section">
          <p className="text-body13">Me contacter</p>
        </Link>
      </div>
    </div>
  );
};
