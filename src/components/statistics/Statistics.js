import React from "react";
import Notification from "../notification/Notification";
import PropTypes from "prop-types";

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <>
      {total ? (
        <>
          <ul>
            {Object.keys(options).map((key) => (
              <li key={key}>
                <p>
                  {key.toUpperCase()}: {options[key]}
                </p>
              </li>
            ))}
          </ul>

          <p>Total:{total}</p>

          <p>Positive feedback:{positivePercentage}%</p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  options: PropTypes.object.isRequired,
};

export default Statistics;
