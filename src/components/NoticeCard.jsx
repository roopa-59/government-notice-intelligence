import {useState} from "react";
export default function NoticeCard(props){
    const [showDetails,setShowDetails] = useState(false);
    return(
        <article>
        <h3>{props.title}</h3>
        <p>{props.department}</p>
        <p>{props.location}</p>
        <p>{props.deadline}</p>
        <div>{props.children}</div>
        <p>{props.isOpen? "Application Open" : "Application closed"}</p>
        <p>{props.qualification}</p>
        <button onClick = {()=>{
            setShowDetails(!showDetails)
        }}>{showDetails?"hide details":"view details"}</button>
        <p>{showDetails ? props.description: null}</p>
        </article>
    );
}