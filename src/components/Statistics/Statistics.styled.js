import styled from 'styled-components';

export const StatsCard = styled.section`
  width: 400px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  overflow: hidden;
`;

export const StatsTitle = styled.h2`
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0 20px;
  flex-basis: 100%;
`;

export const StatsPercentage = styled.span`
  font-size: 24px;
`;
