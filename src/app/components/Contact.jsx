import { Section } from "./Section"
import { SectionTitle } from "./SectionTitle"

export const Contact = () => {
  return (
    <Section id='contact'>
      <SectionTitle>Contact</SectionTitle>
      <div>
        <form action="#">
          <div className="flex flex-wrap mb-10">
            <label form='name' className="block w-1/5 sm:w-full md:px-4">NAME</label>
            <input type='text' name='name' className="block border py-2 w-4/5 sm:w-full" />
            <label for='email' className="block w-1/5 sm:w-full md:px-4 mt-3.5" >E-mail</label>
            <input type='email' name='email' className="block border py-2 md:mt-3.5 w-4/5 sm:w-full" />
            <label for='message' className="block w-1/5 sm:w-full md:px-4 mt-3.5">MESSAGE</label>
            <textarea name='message' className="block border h-[10rem] md:mt-3.5 w-4/5 sm:w-full"></textarea>
          </div>
          <button type="submit" className="block w-[200px] py-3.5 bg-[#24292E] text-white mx-auto">送信</button>
        </form>
      </div>
    </Section>
  )
}