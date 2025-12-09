import Profile from "./profile/Profile.jsx";
import Stats from './stats/Stats.jsx'
import FriendList from './friendlist/FriendList.jsx'
import TransactionsHistory from "./TransactionHistory/TransactionHistory.jsx";

export default function App() {
  return (
    <>
      <Profile></Profile>
      <Stats></Stats>
      <FriendList></FriendList>
      <TransactionsHistory></TransactionsHistory>
    </>
  );
}
