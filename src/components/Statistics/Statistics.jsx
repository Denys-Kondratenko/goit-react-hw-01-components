import PropTypes from 'prop-types';
import {
  StatsCard,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsPercentage,
} from './Statistics.styled';

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatsCard>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} style={{ backgroundColor: randomColor() }}>
            <span>{label}</span>
            <StatsPercentage> {percentage}%</StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
