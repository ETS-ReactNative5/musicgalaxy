
import { TextInput } from "@src/components/text-input";
import { APP_COLORS } from "@src/theme/colors";
import { spacing } from "@src/theme/spacing";
import LinearGradient from 'react-native-linear-gradient';
import styled from "styled-components";
import { SvgXml } from 'react-native-svg';
import { scale } from "@src/utils/media";


export const Icon = styled(SvgXml)`
  height: ${({ size }) => size || scale(32)}px;
  width: ${({ size }) => size || scale(32)}px;
`;

export const InputWrapper = styled.View`
  margin-bottom: ${scale(20)}px;
`;

export const StyledInput = styled(TextInput)`
  
`;

export const MainWrapper = styled(LinearGradient)`
    height: 100%;
    padding: ${spacing.large}px;
    margin-bottom: ${scale(20)}px;
    background-color: rgba(60, 66, 58, 0.73);
`;

export const SearchIcon = styled(Icon)`
  margin-bottom: ${spacing.xsmall};
  margin-right: ${spacing.xsmall};
`;

export const LeftIconWrapper = styled.View`
  position: absolute;
  top: ${scale(5)};
  bottom: 0;
  left: ${scale(14)};
  right:0;
  justify-content: center;
`;
