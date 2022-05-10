import styled from "styled-components/native";
import { SvgXml } from 'react-native-svg';
import Animated from "react-native-reanimated";
import { scale } from "@src/utils/media";
import { APP_COLORS } from "@src/theme/colors";
import { radius, spacing } from "@src/theme/spacing";
import { TextInput } from "@src/components/text-input";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window')
export const StyledWrapper = styled(Animated.View)`
  position: absolute;
  z-index: 5;
  top: 0;
  width: 100%;
  height: ${({ insets }) => insets.top + 80}px;
  background: white;
  flex-direction: row;
  padding-top:${({ insets }) => insets.top}px;
  align-items: center;
  justify-content: center;
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

export const LeftIconWrapper = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10;
  justify-content: center;
  align-items: center;
  
`;

export const StyledTextInput = styled(TextInput)`
  border: ${APP_COLORS.red};
  padding: ${spacing.medium}px;
  color: ${APP_COLORS.black};
  border-radius: ${radius.half}
  font-size: ${scale(14)};
  padding-left: 26px;
  width: ${width - 80}px;
`;

export const SearchIconInput = styled(SvgXml)`
  height: 14px;
  width: 14px;
`;

export const FilterIcon = styled(SvgXml)`
  height: 20px;
  width: 20px;
  margin-left: 5px;
`;

export const AnimatedView = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
`;

export const FilterWrapper = styled.View`
  background-color: ${APP_COLORS.black};
  padding-horizontal: ${scale(5)}px;
  border-radius: ${scale(5)}px;
  position: absolute;
  right: -${scale(15)};
  top: -${scale(8)};
`;

