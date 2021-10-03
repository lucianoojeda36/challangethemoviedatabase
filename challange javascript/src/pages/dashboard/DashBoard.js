import React from "react";
import { useSelector } from "react-redux";
import LandingPage from "../landingpage/LandingPage";

export default function DashBoard() {
  const users = useSelector((state) => state.dataReducer?.user);
  const error = useSelector((state) => state?.dataReducer?.error_message);
  const isLoading = useSelector((state) => state.dataReducer?.isLoading);

  if (users && users.length === 0) {
    return <h1>No results</h1>;
  } else if (isLoading === false) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1 style={{ color: "red" }}>Ooops Something went wrong</h1>;
  } else {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}
