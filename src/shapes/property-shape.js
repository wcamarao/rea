import PropTypes from 'prop-types';

const agencyShape = PropTypes.shape({
  logo: PropTypes.string.isRequired,
  brandingColors: PropTypes.shape({
    primary: PropTypes.string.isRequired
  }).isRequired
});

export const propertyShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
  agency: agencyShape.isRequired
});
