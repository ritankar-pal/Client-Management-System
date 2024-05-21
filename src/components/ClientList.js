import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientTable from "./ClientTable";
import useUsersList from "../hooks/useUsersList";
import { addUser } from "../utils/userSlice";
import { Link } from "react-router-dom";

const ClientList = () => {

  const dispatch = useDispatch();

  //fetching the saved list of users:
  useUsersList();

  const users = useSelector((store) => store?.user?.users);
  console.log(users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Users from the Redux store: " + users);
    if (users !== null) {
      setLoading(false);
    }
  }, [users]);

  if (loading) {
    return <p>Loading Users...</p>;
  }

  const deleteHadler = (id) =>{
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = existingUsers.filter(elem => elem.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    //adding the updated user in the redux store:
    dispatch(addUser(updatedUsers));
  }


  return (
    <div>
      <h1 className="text-4xl text-customBlue font-bold text-center mt-8 mb-4">
        List of Clients
      </h1>
      
      <div className="ml-36 mb-5">
        <Link to="/clientInfo" className="bg-customBlue text-white rounded-md p-2">Add Clients</Link>
      </div>

      <table className="w-9/12 border-collapse border border-gray-300 text-center mx-auto mb-10">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 py-2 px-4">Address</th>
            <th className="border border-gray-300 py-2 px-4">City</th>
            <th className="border border-gray-300 py-2 px-4">State</th>
            <th className="border border-gray-300 py-2 px-4">Zip</th>
            <th className="border border-gray-300 py-2 px-4">Gender</th>
            <th className="border border-gray-300 py-2 px-4">Date of Birth</th>
            <th className="border border-gray-300 py-2 px-4">Drop Down Options</th>
            <th className="border border-gray-300 py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((elem, index) => (
              <tr
                key={elem.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
              >
                <ClientTable data={elem} onDeleteUser={deleteHadler} />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
