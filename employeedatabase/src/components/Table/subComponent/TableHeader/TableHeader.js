import React from 'react';
import {EventContext, TableContext} from '../../tableContexts.js';

const TableHeader = (props) => {
const tableContext = React.useContext(TableContext);
const eventContext = React.useContext(EventContext);

//console.log(context);

    const {
        text
    } = props;

    const {
        sortBy
    } = tableContext



    return (
            <th
            data-id={text}
            onClick={eventContext.onTableHeaderClick}
            >
            {text}
           { sortBy === text && 'sort'} 
            </th>
    )
}

export default TableHeader;

