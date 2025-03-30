export const ListComponent = (props) => {
const list = props.ds;
const setList=props.setList;
    const deleteButton = (index)=>{
        setList(list.filter((item , i)=>{
            return i !== index;
        }))

    }

    return (
        <div>{list.map((item,index)=>{
            return (<p key={index}>{item.name}
            <button onClick={()=>deleteButton(index)}>Delete</button>
            </p>)
        })}
        </div>
    )
}