import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import {
  FriendItem,
  FriendsList,
  FriendStatus,
  FriendPhoto,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <FriendStatus active={isOnline}>
            <BsFillCircleFill />
          </FriendStatus>
          <FriendPhoto src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
