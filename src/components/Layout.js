import React, { Fragment } from "react";
import Header from "../app/components/Header";
import Nav from "../app/Dashboard/Nav";
import { AuthContext } from "../app/ContextAPI/Controller";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log("Y-user", user);

  return (
    <Fragment>
      {user != null ? (
        <div className="min-h-screen bg-gray-50/95">
          <Nav />
          <Header />
          <div className="p-4 xl:ml-80">
            {/* THE CONTENT */}
            {children}
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50/95">
          {/* THE CONTENT */}
          {children}
        </div>
      )}
    </Fragment>
  );
};

export default Layout;
