import PropTypes from "prop-types";

export const userPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  trustScore: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  followersCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
}).isRequired;
