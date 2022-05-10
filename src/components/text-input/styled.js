import styled from 'styled-components';
import { APP_COLORS } from '@src/theme/colors';
import { scale } from '@src/utils/media';
import { radius, spacing } from '@src/theme/spacing';
import { TextInput } from 'react-native';


export const StyledTextInput = styled(TextInput)`
  border: ${APP_COLORS.white};
  padding: ${spacing.small}px;
  padding-left: ${({ leftIconPadding }) =>
    scale(leftIconPadding) || spacing.small}}px;
  color: ${APP_COLORS.white};
  border-radius: ${radius.default}
  font-size: ${scale(16)};
`;

