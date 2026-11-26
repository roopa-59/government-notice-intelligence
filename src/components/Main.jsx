import NoticeCard from "./NoticeCard";
import {useState} from "react";
export default function Main(){
    const [searchTerm,setSearchTerm] = useState("");
    const notices = [
        {id:1,
            title:"Tamil Nadu Student Scholarship",
            department:"Government of Tamil Nadu",
            location:"Chennai",
            deadline:"15 december 2026",
            isOpen: true,
            description: "Scholarship opportunities for eligible students",
            qualification: "undergraduate"
        },
        {id:2,
            title:"Railway Recruitment",
            department:"Indian Railways",
            location:"Gujarat",
            deadline:"25 december 2026",
            isOpen: false,
            description : "Railway job opportunities",
            qualification: "tenth"
        },
        {id:3,
            title:"SSC Combined Graduate Level",
            department:"Staff Selection Commission",
            location:"Madurai",
            deadline:"30 december 2026",
            isOpen: true,
            description: "State level government exam",
            qualification: "Second year higher secondary"
        }
    ];
    const filteredNotices = notices.filter((notice)=>{
        return (
            notice.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    const noticeCards = filteredNotices.map((notice)=>{
        return (
            <NoticeCard
                key={notice.id}
                title={notice.title}
                department={notice.department}
                location={notice.location}
                deadline={notice.deadline}
                isOpen = {notice.isOpen}
                description = {notice.description}
                qualification = {notice.qualification}
            />
        );
    })
    return(
        <main>
        <h2>Latest Government Notices</h2>
        <p>Explore the latest job notifications and opportunities</p>
        <input 
        placeholder = "Search notices by title..."
        value = {searchTerm}
        onChange={(event) => {
            setSearchTerm(event.target.value);
        }}        
        />
        {filteredNotices.length > 0 ? noticeCards : <p>No notices found.</p>}
        </main>
    );
}