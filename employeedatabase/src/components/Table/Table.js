import React from 'react';
import employees from '../../employees.json'

const Table = () => {
   // console.log(employees);
    return (
      <table border="2px">
          <thead>
              <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>DOB</th>
              </tr>
          </thead>
          <tbody>
                  {
                      employees.map((employee) => (
                          //console.log(employee)
                        <tr key={employee.id}>
                            <td>{employee.image}</td>
                            <td>{employee.name}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob}</td>
                        </tr>
                      ))
                  }
          </tbody>
      </table>
    )
}

export default Table;

