import Image from "next/image";
import works1 from '../../../public/works1.jpg';
import works2 from '../../../public/works2.jpg';
import works3 from '../../../public/works3.jpg';
import works4 from '../../../public/works4.jpg';
import works5 from '../../../public/works5.jpg';
import works6 from '../../../public/works6.jpg';
import { Section } from "./Section"
import { SectionTitle } from "./SectionTitle";

export const Works = () => {
  const works = [works1, works2, works3, works4, works5, works6]

  return (
    <Section id='works'>
      <SectionTitle>Works</SectionTitle>
      <ul className="flex flex-wrap justify-between">
        { works.map((work, index) => <li className='w-[30%] sm:w-full mb-6'><Image src={work} alt={`work ${index}`} /></li>)}
      </ul>
    </Section>
  )
}