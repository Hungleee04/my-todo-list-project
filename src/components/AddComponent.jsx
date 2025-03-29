import {useState} from "react";

export const AddComponent = (props) => {
    const {list, setList} = props;
    const[value , setValue] = useState("");
    const handleAdd =() =>{
        if(value === ""){
                return;
        }

        setList([...list,value]);
        setValue("");
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