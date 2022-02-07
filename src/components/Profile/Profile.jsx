import PropTypes from 'prop-types'
import {Description, Profiled, Avatar, Name, Stats, StatsItem, StatsItemName} from './Profile.styles'

const Profile = ({ 
    username, 
    tag, 
    location, 
    avatar, 
    stats
  }) => { return (
  <Profiled>
    <Description>
      <Avatar
        src={avatar}
        alt={tag}
      />
      <Name>{username}</Name>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </Description>
  
    <Stats>
      <StatsItem>
        Followers
        <StatsItemName>{stats.followers}</StatsItemName>
      </StatsItem>
      <StatsItem>
        Views
        <StatsItemName>{stats.views}</StatsItemName>
      </StatsItem>
      <StatsItem>
        Likes
        <StatsItemName>{stats.likes}</StatsItemName>
      </StatsItem>
    </Stats>
  </Profiled>
    );
  }

  Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
  
  }).isRequired,

  }
  export default Profile;