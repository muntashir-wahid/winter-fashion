import { createContext, useEffect, useState } from "react";

export const CurrUserContext = createContext();

const CurrUserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("currUser");

    if (userId) {
      fetch(`https://winter-fashion-server.vercel.app/api/v1/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            const user = data?.data.user;
            setCurrUser(user);
            setIsUserLoading(false);
          }
        });
    }
  }, [isUpdated]);

  const contextValue = {
    currUser,
    setCurrUser,
    setIsUpdated,
    setIsUserLoading,
    isUserLoading,
  };

  return (
    <CurrUserContext.Provider value={contextValue}>
      {children}
    </CurrUserContext.Provider>
  );
};

export default CurrUserProvider;
