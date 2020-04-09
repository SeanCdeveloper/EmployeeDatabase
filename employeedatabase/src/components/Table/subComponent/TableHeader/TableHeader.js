import React from 'react';
import {EventContext} from '../../tableContexts.js';

const TableHeader = (props) => {

const context = React.useContext(EventContext);
console.log(context);

    const {
        text
    } = props;

    return (
            <th
            data-id={text}
            onClick={context.onTableHeaderClick}
            >{text}</th>
    )
}

export default TableHeader;

