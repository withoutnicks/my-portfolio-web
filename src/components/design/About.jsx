export const About = () => {
  return (
    <section className='hero'>
      <div className='hero-content gap-8 flex-col lg:flex-row-reverse p-6'>
        <img
          src='/about.webp'
          className='mask mask-squircle max-w-xs rounded-lg shadow-2xl object-cover'
        />
        <div className='max-w-[30rem] text-wrap'>
          <p className='pb-4'>
            My name is <strong>Gerardo Caycho</strong> and I am <strong>19 years old.</strong> I didn&apos;t know I
            liked this world so much until I studied it.
          </p>
          <p className='pb-4'>
            Study virtually at the <strong>IDAT institute</strong> the degree in <strong>Information Systems Development</strong> or
            Computing and Informatics.
          </p>
          <p className='pb-4'>
            Currently, I am dedicated to <strong>studying web development</strong> in
            a self-taught way, complementing what I learned in my
            educational period.
          </p>
        </div>
      </div>
    </section>
  )
}
