import PropTypes from "prop-types";
import {
  FriendUl,
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
  isOnline,
} from "./FriendList.styles";

const FriendList = ({ friends }) => {
  return (
    <FriendUl>
      {friends.map((friend) => (
        <FriendItem key={friend.id}>
          <FriendStatus isOnline={friend.isOnline}>
            {friend.isOnline === true}
          </FriendStatus>
          <FriendAvatar src={friend.avatar} alt="User avatar" width="48" />
          <FriendName>{friend.name}</FriendName>
        </FriendItem>
      ))}
    </FriendUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
