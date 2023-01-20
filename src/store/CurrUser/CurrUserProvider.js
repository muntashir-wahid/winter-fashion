import { createContext, useEffect, useState } from "react";

export const CurrUserContext = createContext();

const CurrUserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);

  const contextValue = {
    currUser,
    setCurrUser,
    setIsUpdated,
    setIsUserLoading,
  };

  useEffect(() => {
    const userId = localStorage.getItem("currUser");

    fetch(`http://localhost:5000/api/v1/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const user = data?.data.user;
          setCurrUser(user);
          setIsUserLoading(false);
        }
      });
  }, [isUpdated]);

  console.log(currUser);

  return (
    <CurrUserContext.Provider value={contextValue}>
      {children}
    </CurrUserContext.Provider>
  );
};

export default CurrUserProvider;
