import React from "react"
import TableHeader from "./TableHeader"

function EmployeeTable(props) {

    return (
        <div>
        <h1>Employee Directory</h1>
        <table>
            < TableHeader />
            {  props.employees.map
                ((employee, index) =>
                    <tr>
                        <td><img src={employee.picture.thumbnail}></img></td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob.date}</td>
                    </tr>
                )}
        </table>
        </div>
    )
}

export default EmployeeTable