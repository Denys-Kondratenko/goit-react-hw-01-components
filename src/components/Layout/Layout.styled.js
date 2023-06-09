import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
