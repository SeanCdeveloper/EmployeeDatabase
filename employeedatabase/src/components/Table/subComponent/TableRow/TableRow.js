import React from 'react'

const TableRow = (props) => {
console.log(props);
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


