import { BsSearch } from "react-icons/bs";
import AdminSidbar from "../components/AdminSidbar";
import { FaRegBell } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidbar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data , user,docs" />
          <FaRegBell />
          <img src={} alt="User" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
