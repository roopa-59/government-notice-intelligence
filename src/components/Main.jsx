import NoticeCard from "./NoticeCard";
export default function Main(){
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
    const noticeCards = notices.map((notice)=>{
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
        {noticeCards}
        </main>
    );
}