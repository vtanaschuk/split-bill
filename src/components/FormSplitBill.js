import { useState } from "react";

import Button from "./Button";

const FormSplitBill = ({selectedFrind, onSplitBill}) =>{
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const [whoIsPaying, setWhoIsPaying] = useState('user');
    const paidByFriend = bill ? bill - paidByUser : "";
  
    const handleSubmit = (e)=>{
      e.preventDefault();
  
      if(!bill || !paidByUser) return
      onSplitBill(whoIsPaying==='user' ? paidByFriend: -paidByFriend)
  
    }
    return (
      <form className="form-split-bill" onSubmit={(e)=>{handleSubmit(e)}}>
        <h2>Split a bill w/ {selectedFrind.name} </h2>
  
        <label>Bill value</label>
        <input type="number" value={bill} onChange={(e)=>{setBill(Number(e.target.value))}}/>
  
        <label>Your expense</label>
        <input 
          type="number" 
          value={paidByUser} 
          onChange={(e)=>
            setPaidByUser(
              Number(e.target.value) > bill ? paidByFriend : Number(e.target.value))
            }/>
  
        <label>{selectedFrind.name}'s expense</label>
        <input type="text" disabled value={paidByFriend}/>
  
        <label>Who is paing the bill</label>
        <select value={whoIsPaying} onChange={(e)=>{setWhoIsPaying(e.target.value)}}>
          <option value='user'>you</option>
          <option value='friend'>{selectedFrind.name}</option>
  
        </select>
  
        <Button>Add</Button>
  
      </form>
    )
  }

  export default FormSplitBill;