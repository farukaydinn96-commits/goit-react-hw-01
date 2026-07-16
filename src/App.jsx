import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx"; // BUNA DİKKAT

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json"; // BUNA DİKKAT

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      {/* TABLOMUZ BURADA ÇAĞRILMALI */}
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
