import styled from "styled-components/native";
import { SvgXml } from 'react-native-svg';
import Animated from "react-native-reanimated";
import { scale } from "@src/utils/media";

export const StyledWrapper = styled(Animated.View)`
  position: absolute;
  z-index: 5;
  top: 0;
  width: 100%;
  height: ${({ insets }) => insets.top + 50}px;
  background: white;
  flex-direction: row;
  padding-top:${({ insets }) => insets.top}px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledIcon = styled(SvgXml)`
  height: 30px;
  width: 30px;
  margin-left:6px;
`;

export const SearchIcon = styled(SvgXml)`
  height: 24px;
  width: 24px;
  margin-right: 10px;
`;

export const Title = styled.Text`
    flex:1;
    padding-left: ${scale(25)}px;
    margin-left: ${({ showBackButton }) => showBackButton ? -20 : 0}px;
    text-align: center;
    color: black;
`;