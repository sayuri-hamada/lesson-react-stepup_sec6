import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  //propsでchildrenを受け取りボタン内部のテキストを表示するようにする
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//BaseButtonから共通のStyleをimportし、background-colorのみ変更する
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
