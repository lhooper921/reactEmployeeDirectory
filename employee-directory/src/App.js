import './App.css';
import EmployeeTable from "./components/EmployeeTable";
import employees from "./employees.json";
function App() {
  return (
    <EmployeeTable  employees = {employees} />
  );
}
export default App;