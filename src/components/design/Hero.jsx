import toast from 'react-hot-toast'
import { IconEmail } from '../icons/IconEmail'
import { IconCV } from '../icons/IconCV'

export const Hero = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gcaycho07@gmail.com')
    toast('Email copied!', {
      icon: <IconEmail />
    })
  }

  return (
    <main className='h-[94vh] flex flex-col items-center text-center justify-center gap-4 text-wrap'>
      <div className='avatar indicator'>
        <span className='indicator-item font-serif badge badge-primary'>
          looking for work
        </span>
        <div className='grid w-32 h-32 bg-base-300 place-items-center rounded-full'>
          <img src='/profile.webp' alt='my photo' />
        </div>
      </div>
      <h1 className='text-3xl md:text-4xl font-bold select-none'>
        Nice to meet you!
        <br /> I&apos;m
        <span className='hover:text-primary transition duration-300 ease-in-out'>
          &nbsp;Gerardo Caycho
        </span>
      </h1>
      <p className='w-2/3 md:w-2/5 select-none my-2'>
        Frontend Web Developer. Lima, Peru.
      </p>
      <section className='flex flex-col md:flex-row gap-2'>
        <button className='w-60 md:w-1/2 btn' onClick={handleCopyEmail}>
          <IconEmail /> Contact Email
        </button>
        <a
          className='md:w-1/2 btn btn-primary'
          href='../assets/cv-example.pdf'
          download='cv-example.pdf'
        >
          <IconCV /> Download CV
        </a>
      </section>
    </main>
  )
}
