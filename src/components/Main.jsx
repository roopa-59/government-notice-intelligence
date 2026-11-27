import NoticeCard from "./NoticeCard";
import { useState } from "react";
export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedQualification, setSelectedQualification] =
    useState("All Qualifications");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("All Departments");
    setSelectedLocation("All Locations");
    setSelectedQualification("All Qualifications");
    setSelectedStatus("All Statuses");
  };
  const notices = [
    {
      id: 1,
      title: "Tamil Nadu Student Scholarship",
      department: "Government of Tamil Nadu",
      location: "Chennai",
      deadline: "15 december 2026",
      isOpen: true,
      description: "Scholarship opportunities for eligible students",
      qualification: "undergraduate",
    },
    {
      id: 2,
      title: "Railway Recruitment",
      department: "Indian Railways",
      location: "Gujarat",
      deadline: "25 december 2026",
      isOpen: false,
      description: "Railway job opportunities",
      qualification: "tenth",
    },
    {
      id: 3,
      title: "SSC Combined Graduate Level",
      department: "Staff Selection Commission",
      location: "Madurai",
      deadline: "30 december 2026",
      isOpen: true,
      description: "State level government exam",
      qualification: "Second year higher secondary",
    },
  ];
  const filteredNotices = notices.filter((notice) => {
    return (
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedDepartment === "All Departments" ||
        notice.department === selectedDepartment) &&
      (selectedLocation === "All Locations" ||
        notice.location === selectedLocation) &&
      (selectedQualification === "All Qualifications" ||
        notice.qualification === selectedQualification) &&
      (selectedStatus === "All Statuses" ||
        (selectedStatus === "open" && notice.isOpen === true) ||
        (selectedStatus === "closed" && notice.isOpen === false))
    );
  });
  const noticeCards = filteredNotices.map((notice) => {
    return (
      <NoticeCard
        key={notice.id}
        title={notice.title}
        department={notice.department}
        location={notice.location}
        deadline={notice.deadline}
        isOpen={notice.isOpen}
        description={notice.description}
        qualification={notice.qualification}
      />
    );
  });
  return (
    <main>
      <h2>Latest Government Notices</h2>
      <p>Explore the latest job notifications and opportunities</p>
      <input
        placeholder="Search notices by title..."
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <select
        value={selectedDepartment}
        onChange={(event) => {
          setSelectedDepartment(event.target.value);
        }}
      >
        <option value="All Departments">All Departments</option>
        <option value="Government of Tamil Nadu">
          Government of Tamil Nadu
        </option>
        <option value="Indian Railways">Indian Railways</option>
        <option value="Staff Selection Commission">
          Staff Selection Commission
        </option>
      </select>
      <select
        value={selectedLocation}
        onChange={(event) => setSelectedLocation(event.target.value)}
      >
        <option value="All Locations">All Locations</option>
        <option value="Chennai">Chennai</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Madurai">Madurai</option>
      </select>
      <select
        value={selectedQualification}
        onChange={(event) => {
          setSelectedQualification(event.target.value);
        }}
      >
        <option value="All Qualifications">All Qualifications</option>
        <option value="tenth">Tenth</option>
        <option value="undergraduate">Undergraduate</option>
        <option value="Second year higher secondary">Higher Secondary</option>
      </select>
      <select
        value={selectedStatus}
        onChange={(event) => {
          setSelectedStatus(event.target.value);
        }}
      >
        <option value="All Statuses">All Statuses</option>
        <option value="open">Application Open</option>
        <option value="closed">Application Closed</option>
      </select>
      <button onClick={clearFilters}>Clear Filters</button>
      {filteredNotices.length > 0 ? noticeCards : <p>No notices found.</p>}
    </main>
  );
}
