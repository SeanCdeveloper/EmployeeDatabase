import React from 'react'

const TableRow = (props) => {
const {
employee: {
    image, name, phone, email, dob
}
} = props

    return (
        <tr>
        
            <td>{image}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{dob}</td>
        </tr>
    )
}

export default TableRow

// Code For Bringing Images into Code

// <td><img src={image}/></td>

