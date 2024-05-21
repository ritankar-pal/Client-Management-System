import React, { useRef, useState } from "react";
import Input from "../utils/Input";
import { Link } from "react-router-dom";
import { uniqId } from "../utils/validate";

const ClientDetails = () => {
  const address = useRef();
  const city = useRef();
  const state = useRef();
  const zip = useRef();
  const dob = useRef();
  const dropDown = useRef();
  const gender = useRef({ current: {} }); // Initialize as an empty object
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("FORM SUBMITTED");
    
    const addressValue = address.current.value;
    const cityValue = city.current.value;
    const stateValue = state.current.value;
    const zipValue = zip.current.value;
    const dobValue = dob.current.value;
    const dropDownValue = dropDown.current.value;
    const genderValue = Object.keys(gender.current).find(
      (key) => gender.current[key]?.checked
    );

    const userInput = {
      id: uniqId(),
      addressValue,
      cityValue,
      stateValue,
      zipValue,
      dobValue,
      genderValue,
      dropDownValue
    };
    console.log(userInput);

    // // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // // Add the new user to the array
    existingUsers.push(userInput);

    // // Save the updated array back to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    address.current.value = "";
    city.current.value = "";
    state.current.value = "";
    zip.current.value = "";
    dob.current.value = "";
    dropDown.current.value = "";
    Object.values(gender.current).forEach((input) => {
      if (input) input.checked = false;
    });

    alert("User Added Successfully");
  };

  return (
    <div className="text-center mt-10 font-bold text-md">
      <h4 className="underline">Tell Us About Your Property</h4>

      <div className="mt-5 flex justify-center">
        <div className="text-left mr-10">
          <a className="inline-block px-4 py-2 bg-customBlue text-white rounded-lg no-underline hover:bg-blue-600 transition duration-300 hover:cursor-pointer">
            Home
          </a>
        </div>
        <div className="text-left">
          <a className="inline-block px-4 py-2 bg-customBlue text-white rounded-lg no-underline hover:bg-blue-600 transition duration-300 hover:cursor-pointer">
            Business
          </a>
        </div>
        <div className="text-left ml-6">
          <Link
            to="/clientInfo/clientList"
            className="inline-block px-4 py-2 bg-customBlue text-white rounded-lg no-underline hover:bg-blue-600 transition duration-300 hover:cursor-pointer"
          >
            Clients
          </Link>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={formSubmitHandler}>
          <Input
            label="Address:"
            id="address"
            name="address"
            type="text"
            placeholder="Enter your address"
            ref={address}
            errorMessage="Address cannot be empty"
            required
          />

          <Input
            label="City:"
            id="city"
            name="city"
            type="text"
            placeholder="Enter your city"
            ref={city}
            errorMessage="City cannot be empty"
            required
          />

          <Input
            label="State:"
            id="state"
            name="state"
            type="text"
            placeholder="Enter your state"
            ref={state}
            errorMessage="State cannot be empty"
            required
          />

          <Input
            label="Zip Code:"
            id="zip"
            name="zip"
            type="text"
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
            required
          />

          <Input
            label="Dropdown:"
            id="dropdown"
            name="dropdown"
            type="select"
            ref={dropDown}
            placeholder="Select from the list"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
              { label: "Option 5", value: "option5" },
              { label: "Option 6", value: "option6" },
              { label: "Option 7", value: "option7" },
              { label: "Option 8", value: "option8" },
              { label: "Option 9", value: "option9" },
              { label: "Option 10", value: "option10" },
            ]}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ClientDetails;
