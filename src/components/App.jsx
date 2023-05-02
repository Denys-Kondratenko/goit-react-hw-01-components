import { Profile } from './Profile/Profile';
import user from '../user.json';
import data from '../data.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Layout>
      <Profile card={user} />
      <Statistics stats={data} title={'Upload stats'} />
      <Statistics stats={data} />
      <GlobalStyle />
    </Layout>
  );
};
