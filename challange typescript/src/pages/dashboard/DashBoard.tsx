import React from "react";
import { useSelector } from "react-redux";
import LandingPage from "../landingpage/LandingPage";

interface dataUser {
  known_for: any[];
  [x: string]: any;
}

interface dataStateInfo {
  dataReducer: {
    user: dataUser;
    error_message: Boolean;
    isLoading: Boolean;
  };
}

export default function DashBoard() {
  const users = useSelector((state: dataUser) => state.dataReducer?.user);
  const error = useSelector(
    (state: dataStateInfo) => state?.dataReducer?.error_message
  );
  const isLoading = useSelector(
    (state: dataStateInfo) => state.dataReducer?.isLoading
  );

  if ( users && users.length === 0) {
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
