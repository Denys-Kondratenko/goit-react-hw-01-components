import PropTypes from 'prop-types';
import {
  Stats,
  StatsInfo,
  StatsName,
  UserCard,
  UserPhoto,
  UserStats,
  UserInfo,
  UserName,
  UserTag,
  UserLocation,
} from './Profile.styled';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export const Profile = ({
  card: { username, tag, location, avatar, stats },
}) => {
  return (
    <UserCard key={username}>
      <UserInfo>
        <UserPhoto src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>
          <MdOutlineAlternateEmail />
          {tag}
        </UserTag>
        <UserLocation>{location}</UserLocation>
      </UserInfo>
      <div>
        <UserStats>
          <StatsInfo>
            <StatsName>Followers</StatsName>
            <Stats> {stats.followers}</Stats>
          </StatsInfo>
          <StatsInfo>
            <StatsName>Views</StatsName>
            <Stats> {stats.views}</Stats>
          </StatsInfo>
          <StatsInfo>
            <StatsName>Likes</StatsName>
            <Stats> {stats.likes}</Stats>
          </StatsInfo>
        </UserStats>
      </div>
    </UserCard>
  );
};

Profile.propTypes = {
  card: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
