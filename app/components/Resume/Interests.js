import React from "react";
import PropTypes from "prop-types";

const Interests = ({ data }) => (
  <div className="interests">
    <div className="link-to" id="interests" />
    <div className="title">
      <h3>Intersts</h3>
    </div>
    {data}
  </div>
);

Interests.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
};

Interests.defaultProps = {
  data: []
};

export default Interests;
