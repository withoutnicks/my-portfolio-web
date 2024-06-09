import classNames from 'classnames'
import PropTypes from 'prop-types'

export const CardProject = ({ image, projectName, description, stack, buttons, reverse = false }) => {
  return (
    <article className={classNames('flex py-2 px-6 gap-6 justify-center mb-4', { 'flex-row-reverse': reverse })}>
      <picture className='hidden md:block w-[20rem] h-[14rem] bg-neutral-content overflow-hidden rounded-2xl shadow-xl'>
        <img
          className='w-full h-full scale-125 relative rounded-lg duration-500 transition-all hover:translate-y-4'
          src={image}
          alt={projectName}
          rel='preconnect'
        />
      </picture>
      <div className='flex flex-col justify-center gap-2'>
        <p className='text-xl font-extrabold'>{projectName}</p>
        <p className='max-w-96'>{description}</p>
        <div className='my-2 flex gap-2'>
          {stack}
        </div>
        <section className='flex gap-2'>
          {buttons}
        </section>
      </div>
    </article>
  )
}

CardProject.propTypes = {
  image: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.node.isRequired,
  buttons: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}
