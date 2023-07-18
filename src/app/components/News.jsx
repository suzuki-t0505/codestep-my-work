import { Section } from "./Section"
import { SectionTitle } from "./SectionTitle"

export const News = () => {
  return (
    <Section id='news'>
      <SectionTitle>News</SectionTitle>
      <dl className="flex flex-wrap">
        <dt className="md:w-1/5 sm:w-full md:p-4 sm:pt-4 sm:px-4 sm:border-t md:border-y border-gray-300">2020.XX.XX</dt>
        <dd className="md:w-4/5 sm:w-full md:p-4 sm:pb-4 sm:px-4 md:border-y border-gray-300">デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。</dd>
        <dt className="md:w-1/5 sm:w-full md:p-4 sm:pt-4 sm:px-4 sm:border-t md:border-y border-gray-300">2020.XX.XX</dt>
        <dd className="md:w-4/5 sm:w-full md:p-4 sm:pb-4 sm:px-4 md:border-y border-gray-300">ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。</dd>
        <dt className="md:w-1/5 sm:w-full md:p-4 sm:pt-4 sm:px-4 sm:border-t md:border-y border-gray-300">2019.XX.XX</dt>
        <dd className="md:w-4/5 sm:w-full md:p-4 sm:pb-4 sm:px-4 md:border-y border-gray-300">【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト</dd>
        <dt className="md:w-1/5 sm:w-full md:p-4 sm:pt-4 sm:px-4 sm:border-t md:border-y border-gray-300">2019.XX.XX</dt>
        <dd className="md:w-4/5 sm:w-full md:p-4 sm:pb-4 sm:px-4 md:border-y border-gray-300">デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。</dd>
        <dt className="md:w-1/5 sm:w-full md:p-4 sm:pt-4 sm:px-4 sm:border-t md:border-y border-gray-300">2019.XX.XX</dt>
        <dd className="md:w-4/5 sm:w-full md:p-4 sm:pb-4 sm:px-4 sm:border-b md:border-y border-gray-300">【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト</dd>
      </dl>
    </Section>
  )
}