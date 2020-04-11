import React from 'react';
import {EventContext, TableContext} from '../../tableContexts.js';

const TableHeader = (props) => {
const tableContext = React.useContext(TableContext);
const eventContext = React.useContext(EventContext);

    const {
        text
    } = props;

    const {
        sortBy,
        sortOrder
    } = tableContext

    return (
            <th
            //scope='col'
            data-id={text}
            onClick={eventContext.onTableHeaderClick}
            >
            {text}
           { sortBy === text && sortOrder} 
            </th>
    )
}

export default TableHeader;


