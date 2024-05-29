import PropTypes from 'prop-types'

export const ButtonCard = ({ link, text, icon = false }) => {
  return (
    <a className='btn btn-outline btn-neutral btn-sm' href={link} target='_blank' rel='noreferrer'>{text} {icon}</a>
  )
}

ButtonCard.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object
}
