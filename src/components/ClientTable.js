import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ClientTable = (props) => {
  const navigate = useNavigate();
  const { id, addressValue, cityValue, stateValue, zipValue, genderValue, dobValue, dropDownValue } = props.data;

  const deleteButtonhandler = () =>{
    const canDelete = window.confirm("Are you sure you want to delete the user?");
    if(canDelete){
      props.onDeleteUser(id);
      navigate("/clientInfo/clientList");
    }
  }

  return (
    <>
      <td className="border border-gray-300 py-2 px-4 text-left">{addressValue}</td>
      <td className="border border-gray-300 py-2 px-4">{cityValue}</td>
      <td className="border border-gray-300 py-2 px-4">{stateValue}</td>
      <td className="border border-gray-300 py-2 px-4">{zipValue}</td>
      <td className="border border-gray-300 py-2 px-4">{genderValue}</td>
      <td className="border border-gray-300 py-2 px-4">{dobValue}</td>
      <td className="border border-gray-300 py-2 px-4">{dropDownValue}</td>
      <td className="underline text-customBlue flex justify-between border border-gray-300 py-2 px-4">
        <Link to={`/clientInfo/clientList/edit/${id}`}>Edit</Link>
        <button className="text-customBlue p-1 text-sm" onClick={deleteButtonhandler}>Delete</button>
      </td>
    </>
  );
};

export default ClientTable;
