import PropTypes from 'prop-types';
import {
  TransactionHeader,
  TransactionTable,
  HeaderText,
  TransactionBody,
  TransactionList,
  BodyText,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHeader>
        <tr>
          <HeaderText>Type</HeaderText>
          <HeaderText>Amount</HeaderText>
          <HeaderText>Currency</HeaderText>
        </tr>
      </TransactionHeader>

      <TransactionBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionList key={id}>
            <BodyText>{type}</BodyText>
            <BodyText>{amount}</BodyText>
            <BodyText>{currency}</BodyText>
          </TransactionList>
        ))}
      </TransactionBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
