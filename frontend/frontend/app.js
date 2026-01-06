import MemberForm from "./components/MemberForm";
import MemberList from "./components/MemberList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <h2 className="mt-3">Trust Management System</h2>
      <MemberForm />
      <MemberList />
    </div>
  );
}

export default App;
