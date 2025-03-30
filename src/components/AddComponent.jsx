import {useState} from "react";

export const AddComponent = (props) => {
    const {list, setList} = props;
    const[value , setValue] = useState("");
    let obj = {};
    const handleAdd =() =>{
        if(value === ""){
                return;
        }
        obj = genOBJ(value)
        setList([...list,obj]);
        setValue("");
        obj = {};
    }
    const getRandomEven = (min, max) => {
        let num;
        do {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (num % 2 !== 0);
        return num;
    };
    const genOBJ = (value)=>{
        return {
            id : getRandomEven(1,10000000),
            name : value,

        }
    }

    return (
        <>
        <div className="Add-component" >
            <input type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}/>

            <button onClick = {handleAdd}>Add</button>

        </div>
        <div>{value}</div>
    </>
    )
}