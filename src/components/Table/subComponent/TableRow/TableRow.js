import React from 'react'
import './style.css'

const TableRow = (props) => {
const {
employee: {
    image, name, phone, email, dob
}
} = props

    return (
        <tr>
            <td><img className="img-fluid" src={image} alt={name}/></td>
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
