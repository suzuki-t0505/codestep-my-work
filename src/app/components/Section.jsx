export const Section = (props) => {
  return (
    <section id={props.id} className="max-w-[960px] px-[4%] mb-[130px] sm:mb-[70px] mx-auto text-sm">
      { props.children }
    </section>
  )
}