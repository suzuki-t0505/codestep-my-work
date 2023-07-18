import Image from "next/image";
import logo from '../../../public/logo.svg';
import iconInstagram from '../../../public/icon-instagram.png';

export const Header = () => {
  return (
    <header className="max-w-[960px] sm:max-w-full md:h-[270px] px-[4%] flex sm:flex-col justify-between mx-auto items-center">
      <h1 className="mt-5"><a href="#"><Image src={logo} alt='logo image' /></a></h1>
      <nav>
        <ul className="flex items-center justify-center text-sm gap-x-8 sm:gap-x-6 sm:py-4 sm:text-sm">
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://www.instagram.com/" target='_blank'><Image src={iconInstagram} alt='instagram icon' className="w-5 h-5" /></a></li>
        </ul>
      </nav>
    </header>
  )
}