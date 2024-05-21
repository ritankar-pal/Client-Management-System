import React, { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../utils/Input";


const DeleteClient = () => {

  const { clientId } = useParams();
  const navigate = useNavigate();

  const users = useSelector((store) => store?.user?.users);
  // console.log(users);

  //find the user with the desired clientID from the list of users:
  const user = users.find((elem) => elem.id === clientId);
  console.log(user);

  const address = useRef();
  const city = useRef();
  const zip = useRef();

  const populateFormFields = () => {
    if (user) {
      address.current.value = user.addressValue || "";
      city.current.value = user.cityValue || "";
      zip.current.value = user.zipValue || "";
    }
  };

  // Call the populateFormFields function when the component mounts
  useEffect(() => {
    populateFormFields();
  }, [users]); // Trigger the effect whenever user details change


  const saveHandler = (e) => {
    e.preventDefault();

    //Updating in the local storage:
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = existingUsers.filter((user) => user.id !== clientId);
    
    const canDelete = window.confirm("Are you sure you want to delete the user?");
    if(canDelete){
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        address.current.value = "";
        city.current.value = "";
        zip.current.value = "";
        navigate("/clientInfo/clientList");
    }
    
  };

  return (
    <div className="form-container">
      <h1 className="mb-10 font-bold text-customBlue text-center text-2xl">
        Delete User
      </h1>

      <form onSubmit={saveHandler}>
        <Input
          label="Address:"
          id="address"
          name="address"
          placeholder="Enter your address"
          ref={address}
          errorMessage="Address cannot be empty"
          required
          disabled
        />

        <Input
          label="City:"
          id="city"
          name="city"
          placeholder="Enter your city"
          ref={city}
          errorMessage="City cannot be empty"
          required
          disabled
        />

        <Input
          label="Zip Code:"
          id="zip"
          name="zip"
          placeholder="Enter your Zip Code"
          ref={zip}
          errorMessage="Zip cannot be empty"
          required
          disabled
        />

        <div className="flex justify-end">
          <button
            className="w-1/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Delete
          </button>
          <Link
            className="w-24 ml-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-block"
            to="/clientInfo/clientList"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DeleteClient;
