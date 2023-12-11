import { useState } from "react";

import FriendsList from "./FriendsList";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friendList, setFriendList] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFrind, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () =>{
    setShowAddFriend(val=> !val)
  }
  const handleAddFriend = (data) =>{
    setFriendList([...friendList, data]);
    setShowAddFriend(false);
  }
  
  const handleSelection = (friend) =>{
    setSelectedFriend((cur) => cur?.id === friend.id ? null : friend)
  }

  const handleSplitBill = (value) =>{
    setFriendList(friends=>friends.map(el=>(el.id === selectedFrind.id ? {...el, balance: el.balance + value} : el )));
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList 
          data={friendList} 
          onSelection={handleSelection}
          selectedFrind={selectedFrind}
        />
        {showAddFriend && 
          <FormAddFriend onAddFriend={handleAddFriend}/>}
        <Button onBtnCkick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFrind && 
        <FormSplitBill 
          selectedFrind={selectedFrind} 
          onSplitBill={handleSplitBill}
        />
      }
    </div>
  )
}

export default App;