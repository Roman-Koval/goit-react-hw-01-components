import styled from "@emotion/styled";

export const FriendUl = styled.ul`
  list-style-type: none;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const FriendItem = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const FriendStatus = styled.span`
  display: flex;
  width: 10px;
  height: 10px;
  background-color: ${(props) => {
    return props.isOnline ? "red" : "green";
  }};
  border-radius: 5px;
`;

export const FriendAvatar = styled.img`
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-weight: 600;
  margin-left: 8px;
`;
