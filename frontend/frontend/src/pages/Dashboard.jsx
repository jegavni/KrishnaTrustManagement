import CommitteeForm from "../components/CommitteeForm";
import DonationForm from "../components/DonationForm";

function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <div className="container mt-3">
      <h3>Dashboard</h3>

      {role === "treasurer" && <DonationForm />}
      {role === "secretary" && <CommitteeForm />}
      {role === "president" && (
        <>
          <CommitteeForm />
          <DonationForm />
        </>
      )}
    </div>
  );
}

export default Dashboard;
