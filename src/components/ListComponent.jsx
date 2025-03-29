export const ListComponent = (props) => {
const list = props.ds;

    return (
        <div>{list.map((item,index)=>{
            return (<p key={index}>{item}</p>)
        })}
        </div>
    )
}