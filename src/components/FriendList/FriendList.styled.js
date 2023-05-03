import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 2px;
  box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FriendStatus = styled.span`
  svg {
    color: ${p => {
      return p.active ? p.theme.colors.green : p.theme.colors.red;
    }};
  }
`;

export const FriendPhoto = styled.img`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 5px;
`;

export const FriendName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
