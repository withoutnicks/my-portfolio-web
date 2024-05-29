import { IconGithub } from '../icons/IconGithub'
import { IconLinkedin } from '../icons/IconLinkedin'
import { IconMoon } from '../icons/IconMoon'
import { IconSun } from '../icons/IconSun'

export const Header = () => {
  return (
    <header className='navbar min-h-[6vh]'>
      <p className='text-xl font-bold cursor-default select-none'>gerardo</p>
      <section className='w-full justify-end'>
        <label className='cursor-pointer grid place-items-center'>
          <input type='checkbox' value='dracula' className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2' />
          <IconSun />
          <IconMoon />
        </label>
        <a
          className='ml-4 cursor-pointer hover:text-primary'
          target='_blank'
          href='https://www.linkedin.com/in/grardocaycho/'
          rel='noreferrer'
        >
          <IconLinkedin />
        </a>
        <a
          className='ml-4 cursor-pointer hover:text-primary'
          target='_blank'
          href='https://github.com/withoutnicks'
          rel='noreferrer'
        >
          <IconGithub />
        </a>
      </section>
    </header>
  )
}
