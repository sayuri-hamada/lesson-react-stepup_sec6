import styled from "styled-components";

//placeholderはpropsで受け取って任意の文字列を指定可能にする
export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

//inputタグの基本のスタイルを定義
const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;
