import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  overflow: hidden;
  border-collapse: collapse;
  box-shadow: 0px 2px 0px 1px rgba(0, 0, 0, 0.3);
`;

export const TransactionHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const HeaderText = styled.th`
  padding: 15px 0;
  color: ${({ theme }) => theme.colors.white};
  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const TransactionBody = styled.tbody`
  text-align: center;
`;

export const TransactionList = styled.tr`
  :nth-child(even) {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }
`;

export const BodyText = styled.td`
  padding: 15px 0;
  :first-child {
    text-transform: capitalize;
  }
  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;
