import Friend from "./Friend";

const FriendsList = ({data, onSelection, selectedFrind}) =>{

    return (
      <ul>
        {data.map( el => (
          <Friend 
            data={el} 
            key={el.id} 
            onSelection={onSelection}
            selectedFrind={selectedFrind}
          />
        ))}
      </ul>
    )
  }

  export default FriendsList;