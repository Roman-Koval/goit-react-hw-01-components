import PropTypes from 'prop-types'
import { Statistic, Title, StatList, StatsItem, StatsLabel, StatsParcentage} from './Statistics.styles'


const Statistics = ({ title,stats }) => { 
    return (<Statistic>
    {title && <Title>{title}</Title>}
      <StatList>
        {stats.map((stat) => (
        <StatsItem key={stat.id}> 
        <StatsLabel>{stat.label}</StatsLabel>
        <StatsParcentage>{stat.percentage}%</StatsParcentage>
        </StatsItem>    
    ))}
    </StatList>
  </Statistic>

  );
}


Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })),
    title: PropTypes.string    
}

export default Statistics;
