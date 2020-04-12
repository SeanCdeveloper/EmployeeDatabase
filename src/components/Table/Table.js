import React, { useState } from 'react';
import employees from '../../employees.json'
import TableRow from './subComponent/TableRow/TableRow.js'
import TableHeader from './subComponent/TableHeader/TableHeader.js'
import { AppContext } from '../../AppContexts.js'
import { EventContext, TableContext } from './tableContexts.js';

const Table = () => {

    const [sortBy, setSortBy] = useState();
    const [sortOrder, setSortOrder] = useState();

    const { searchText } = React.useContext(AppContext);

    const handleTableHeaderClick = (event) => {
        const target = event.currentTarget;
        const id = target.getAttribute('data-id');
        setSortBy(id);
    }

    const tableContext = {
        sortBy,
        sortOrder,
    }

    const eventContext = {
        onTableHeaderClick: handleTableHeaderClick
    }

    let toBeDisplayedEmployee = [...employees]

    if (searchText !== '') {
        toBeDisplayedEmployee = toBeDisplayedEmployee.filter(({ name }) => new RegExp(searchText, 'g').test(name));
    }

    const sortOrderModifier = sortOrder === 'ASC' ? 1 : -1;

    switch (sortBy) {
        case "Image":
            toBeDisplayedEmployee = toBeDisplayedEmployee.sort((a, b) => a.image.localeCompare(b.image));
            break;
        case "Name":
            toBeDisplayedEmployee = toBeDisplayedEmployee.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "Phone":
            toBeDisplayedEmployee = toBeDisplayedEmployee.sort((a, b) => a.phone.localeCompare(b.phone));
            break;
        case "Email":
            toBeDisplayedEmployee = toBeDisplayedEmployee.sort((a, b) => a.email.localeCompare(b.email));
            break;
        case "DOB":
            toBeDisplayedEmployee = toBeDisplayedEmployee.sort((a, b) => a.dob.localeCompare(b.dob));
            break;
        default:
            break;
    }

    return (
        <TableContext.Provider value={tableContext}>
            <EventContext.Provider value={eventContext}>
                <div className="card-body">
                    <table className='table table-striped'>
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toBeDisplayedEmployee.map((employee) => (
                                    <TableRow
                                        key={employee.id}
                                        employee={employee}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </EventContext.Provider>
        </TableContext.Provider>
    )
}

export default Table;

