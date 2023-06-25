import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styled.container}>
      <p className={styled.item}>Good: {good}</p>
      <p className={styled.item}>Neutral: {neutral}</p>
      <p className={styled.item}>Bad: {bad}</p>
      <p className={styled.item}>Total: {total}</p>
      <p className={styled.item}>Positive feedback: {positivePercentage} %</p>
    </div>
  );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}