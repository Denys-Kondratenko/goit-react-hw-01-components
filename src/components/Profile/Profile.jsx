import PropTypes from 'prop-types';

export const Profile = ({
  item: { username, tag, location, avatar, stats },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <div>
        <ul>
          <li>
            <span>Followers</span>
            <span> {stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span> {stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span> {stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
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
