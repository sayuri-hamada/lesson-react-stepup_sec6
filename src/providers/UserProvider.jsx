import React, { createContext } from "react";

//contextを利用するためにcreateContextを初期化
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "じゃけぇ";
  //UserContext内のProviderを使用してvalueで値を渡す
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
