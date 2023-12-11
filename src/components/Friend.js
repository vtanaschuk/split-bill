import Button from "./Button";

const Friend = ({data, onSelection, selectedFrind}) =>{
    const isSelected = selectedFrind?.id === data.id
  
    return (
        <li className={isSelected ? 'selected' : ''}>
            <img src={data.image} alt={data.name}/>
            <h3>{data.name}</h3>
            {data.balance<0 && <p className="red">you owe {data.name} {Math.abs(data.balance)}$</p>}
            {data.balance>0 && <p className="green">you owes {data.name} {Math.abs(data.balance)}$</p>}
            {data.balance === 0 && <p>even w/ {data.name}</p>}
            <Button onBtnCkick={()=>onSelection(data)}>{isSelected ? 'Close' : 'Select'}</Button>
        </li>
    )
}

export default Friend;
  