import { NavLink } from "react-router-dom";
import React from 'react';

const ComplaintD = ({data, deleteComplaint}) => {
    return (
        <div className="card card-body">
            <table className="table table-sm">
              <tr>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{data.user}</td>
                <td>
                <NavLink className="btn btn-outline-danger m-2" exact to={`/edit-complaint/${parseInt(data.id)}`}>
                    <i className="fa fa-pencil"></i>
                </NavLink>
                </td>
                <td>
                <button className="btn btn-outline-danger m-2" onClick={() => deleteComplaint(data.id)}>
                    <i className="fa fa-trash"></i>
                </button>
                </td>
              </tr>
            </table>
          </div>
    )
}


export default ComplaintD;
