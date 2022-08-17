import React, { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";

//memo化して再レンダリングを防ぐ
export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

//検索内の要素を横並びにする
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

//検索ボタンの左側に余白をつける
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
