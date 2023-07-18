import { SectionTitle } from "./SectionTitle"
import { Section } from './Section'

export const About = () => {
  return (
    <Section id='about'>
      <SectionTitle>About</SectionTitle>
      <p className="mb-8">Xxxxx Ashley</p>
      <ul className="mb-8">
        <li>2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031 Japan</li>
        <li>tel: 000-0000-0000</li>
        <li>url: www.xxxxxx.jp</li>
        <li>mail: xxx@xxxxxx.jp</li>
      </ul>
      <p>
        プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
    </Section>
  )
}