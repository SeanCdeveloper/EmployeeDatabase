import React from 'react';

const TableHeader = (props) => {
    const {
        text
    } = props;

    return (
            <th>{text}</th>
    )
}

export default TableHeader;

