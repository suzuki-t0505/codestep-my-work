import Image from "next/image";
import mainvisual from '../../../public/mainvisual-pc.jpg';

export const Mainvisual = () => {
  return (
    <div className="w-full mb-20">
      <Image src={mainvisual} alt='mainvisual image' className="h-[420px] object-cover" />
    </div>
  )
}