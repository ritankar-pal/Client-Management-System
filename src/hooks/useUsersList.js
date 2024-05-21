import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const useUsersList = () => {
  const dispatch = useDispatch();

  const fetchClients = () => {
  
    // Retrieve data from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    // console.log(storedUsers);

    // Dispatch the stored users to the Redux store
    dispatch(addUser(storedUsers));

  };

  useEffect(() => {
    fetchClients();
  }, [dispatch]);
};

export default useUsersList;
