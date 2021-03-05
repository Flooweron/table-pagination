import React from 'react';

export default props => (
    <table className="table">
        <thead>
            <tr>
                <th onClick={props.onSort.bind(null, 'id')}>
                    ID {props.sortField === 'id' ? <small>{props.sort}</small> : null}
                </th>
                <th onClick={props.onSort.bind(null, 'firstName')}>
                    First Name {props.sortField === 'firstName' ? <small>{props.sort}</small> : null}
                </th>
                <th onClick={props.onSort.bind(null, 'lastName')}>
                    Last Name {props.sortField === 'lastName' ? <small>{props.sort}</small> : null}
                </th>
            </tr>
        </thead>
        <tbody>
            { props.data.map(item =>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                </tr>
            ))}
        </tbody>
    </table>
)