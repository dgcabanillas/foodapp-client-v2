import PropTypes from 'prop-types';

const Icon = ( props ) => {
  const { width, height, fill, d } = props;

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd"
        fill={fill}
        d={d}
      />
    </svg>
  )
}

Icon.defaultProps = {
  width: 24,
  height: 24,
  fill: "#503E9D",
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  d: PropTypes.string.isRequired,
}

export default Icon;