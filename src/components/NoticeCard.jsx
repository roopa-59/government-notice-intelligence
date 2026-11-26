export default function NoticeCard(props){
    return(
        <article>
        <h3>{props.title}</h3>
        <p>{props.department}</p>
        <p>{props.location}</p>
        <p>{props.deadline}</p>
        <div>{props.children}</div>
        </article>
    );
}