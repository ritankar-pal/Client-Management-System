import React, { useRef, useEffect } from "react";
import Input from "../utils/Input";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const EditClient = () => {
  //Get the id of the client:
  const { clientId } = useParams();

  const users = useSelector((store) => store?.user?.users);
  // console.log(users);

  //find the user with the desired clientID from the list of users:
  const user = users.find((elem) => elem.id === clientId);
  // console.log(user);

  const address = useRef();
  const city = useRef();
  const state = useRef();
  const zip = useRef();
  const dob = useRef();
  const gender = useRef({ current: {} }); // Initialize as an empty object
  const dropDown = useRef();

  const populateFormFields = () => {
    if (user) {
      address.current.value = user.addressValue || "";
      city.current.value = user.cityValue || "";
      state.current.value = user.stateValue || "";
      zip.current.value = user.zipValue || "";
      dob.current.value = user.dobValue || "";
      dropDown.current.value = user.dropDownValue || "";

      if (gender.current[user.genderValue]) {
        gender.current[user.genderValue].checked = true;
      }
    }
  };

  // Call the populateFormFields function when the component mounts
  useEffect(() => {
    populateFormFields();
  }, [users]); // Trigger the effect whenever user details change

  const saveHandler = (e) => {
    e.preventDefault();

    // Retrieve updated values from form fields
    const updatedUser = {
      id: user.id,
      addressValue: address.current.value,
      cityValue: city.current.value,
      stateValue: state.current.value,
      zipValue: zip.current.value,
      dobValue: dob.current.value,
      dropDownValue: dropDown.current.value,
      genderValue: Object.keys(gender.current).find(
        key => gender.current[key]?.checked
      )
    };

    //Updating in the local storage:
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = existingUsers.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("User Updated Successfully");
  };

  return (
    <div className="form-container">
      <h1 className="mb-10 font-bold text-customBlue text-center text-2xl">
        Edit User Details
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
        />

        <Input
          label="City:"
          id="city"
          name="city"
          placeholder="Enter your city"
          ref={city}
          errorMessage="City cannot be empty"
          required
        />

        <Input
          label="State:"
          id="state"
          name="state"
          placeholder="Enter your state"
          ref={state}
          errorMessage="State cannot be empty"
          required
        />

        <Input
          label="Zip Code:"
          id="zip"
          name="zip"
          placeholder="Enter your Zip Code"
          ref={zip}
          errorMessage="Zip cannot be empty"
          required
        />

        <Input
          label="Date of Birth:"
          id="dob"
          name="dob"
          type="date"
          ref={dob}
          errorMessage="DOB cannot be empty"
          required
        />

        <Input
          label="Gender:"
          id="gender"
          name="gender"
          type="radio"
          ref={gender}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
        />

        <div className="flex justify-end">
          <button
            className="w-1/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Save
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

export default EditClient;
