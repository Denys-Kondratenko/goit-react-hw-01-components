import styled from 'styled-components';

export const UserCard = styled.div`
  border-radius: 5px;
  width: 300px;
  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const UserPhoto = styled.img`
  width: 100px;
  margin-bottom: 30px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const UserTag = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.secondText};
`;

export const UserLocation = styled.p`
  color: ${({ theme }) => theme.colors.secondText};
`;

export const UserStats = styled.ul`
  display: flex;
`;

export const StatsInfo = styled.li`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  flex-basis: calc(100% / 3);
  align-items: center;
  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const StatsName = styled.span`
  margin-bottom: 5px;
`;

export const Stats = styled.span`
  font-weight: 700;
`;
