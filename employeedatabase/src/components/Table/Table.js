import React, { useState } from 'react';
import employees from '../../employees.json'
import TableRow from './subComponent/TableRow/TableRow.js'
import TableHeader from './subComponent/TableHeader/TableHeader.js'
import { EventContext } from './tableContexts.js';
import { TableContext } from './tableContexts.js';

const Table = () => {

    const [sortBy, setSortBy] = useState();
    const [sortOrder, setSortOrder] = useState();


    const handleTableHeaderClick = (event) => {
        const target = event.target;
        const id = target.getAttribute('data-id');
        // if (id === sortBy) {
        //     switch (sortOrder) {
        //         case 'ASC':
        //             setSortOrder('DESC')
        //             break;
        //         case 'DESC':
        //             setSortOrder(undefined)
        //             setSortBy(undefined)
        //             break;
        //         default:
        //             break;
        //     }
        // } else {
            setSortBy(id);
        //     setSortOrder('ASC')
        // }
    }

    const tableContext = {
        sortBy,
        sortOrder,
    }

    const eventContext = {
        onTableHeaderClick: handleTableHeaderClick
    }

    let sortedData = employees;

    switch (sortBy) {
        case "Image":
            sortedData = employees.sort((a, b) => a.image.localeCompare(b.image));
            break;
        case "Name":
            sortedData = employees.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "Phone":
            sortedData = employees.sort((a, b) => a.phone.localeCompare(b.phone));
            break;
        case "Email":
            sortedData = employees.sort((a, b) => a.email.localeCompare(b.email));
            break;
        case "DOB":
            sortedData = employees.sort((a, b) => a.dob.localeCompare(b.dob));
            break;
        default:
            break;
    }

    return (
        <TableContext.Provider value={tableContext}>
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
        </TableContext.Provider>
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