import PropTypes from 'prop-types'

export const Subtitle = ({ icon, subtitle }) => {
  return (
    <header className='text-2xl md:text-3xl font-medium flex gap-2 items-center p-2 mb-4'>
      {icon} {subtitle}
    </header>
  )
}

Subtitle.propTypes = {
  icon: PropTypes.node.isRequired,
  subtitle: PropTypes.string.isRequired
}
