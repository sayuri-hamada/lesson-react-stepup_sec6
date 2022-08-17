import React, { createContext, useState } from "react";

//contextを利用するためにcreateContextを初期化
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  //useStateを定義する
  const [userInfo, setUserInfo] = useState(null);

  //UserContext内のProviderを使用してvalueで値を渡す
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
