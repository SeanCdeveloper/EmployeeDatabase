import React from 'react';
import employees from '../../employees.json'
import TableRow from './subComponent/TableRow/TableRow.js'
import TableHeader from './subComponent/TableHeader/TableHeader.js'
import {EventContext} from './tableContexts.js';

const Table = () => {
   // console.log(employees);

const handleTableHeaderClick = (event) => {
    //console.log(event.target);
    const target = event.target;
    const id = target.getAttribute('data-id');
    console.log(id);
}

const eventContext = {
    onTableHeaderClick: handleTableHeaderClick
}

    return (
        <EventContext.Provider value={eventContext}>
      <table border="2px">
          <thead>
              <tr>
                  <TableHeader 
                  text="Image" 
                  />
                  <TableHeader 
                  text="Name" 
                  />
                  <TableHeader 
                  text="Phone" 
                  />
                  <TableHeader 
                  text="Email" 
                  />
                  <TableHeader 
                  text="DOB" 
                  />
                  {/* <th>Image</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>DOB</th> */}
              </tr>
          </thead>
          <tbody>
                  {
                      employees.map((employee) => (
                          //console.log(employee)
                        <TableRow 
                        key={employee.id}
                        employee={employee}
                        />
                      ))
                  }
          </tbody>
      </table>
      </EventContext.Provider>
    )
}

export default Table;

// import React from 'react';
// import employees from '../../employees.json'

// const Table = () => {
//    // console.log(employees);
//     return (
//       <table border="2px">
//           <thead>
//               <tr>
//                   <th>Image</th>
//                   <th>Name</th>
//                   <th>Phone</th>
//                   <th>Email</th>
//                   <th>DOB</th>
//               </tr>
//           </thead>
//           <tbody>
//                   {
//                       employees.map((employee) => (
//                           //console.log(employee)
//                         <tr key={employee.id}>
//                             <td>{employee.image}</td>
//                             <td>{employee.name}</td>
//                             <td>{employee.phone}</td>
//                             <td>{employee.email}</td>
//                             <td>{employee.dob}</td>
//                         </tr>
//                       ))
//                   }
//           </tbody>
//       </table>
//     )
// }

// export default Table;