import React, { memo } from "react";
import styled from "styled-components";
// import { UserContext } from "../../../providers/UserProvider";
//stateの値のみをrecoilから呼び出す時に使用
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

//memo化して再レンダリングを防ぐ
export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  const { image, name } = props;

  //useContextを使って定義したstateを利用する
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
