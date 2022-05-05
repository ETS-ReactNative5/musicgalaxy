import styled from 'styled-components';

import {scaleFont} from '@src/utils/media';
import {APP_COLORS} from '@src/theme/colors';

export const TEXT_VARIANTS = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  SUBJECT: 'subject',
  SMALL: 'small',
  BODY: 'body',
  LINK: 'link',
  LABEL: 'label',
  ERROR: 'error',
  UNDERLINE: 'underline',
};

const getTextColor = ({isLink, isError, color}) => {
  if (color) {
    return color;
  }
  if (isError) {
    return APP_COLORS.red;
  }
  return isLink ? APP_COLORS.orange : APP_COLORS.black;
};

const BASE_TEXT = styled.Text`
  color: ${getTextColor};
  font-family: GothamPro;
`;

export const TEXT_STYLE_VARIANTS = {
  [TEXT_VARIANTS.H1]: styled(BASE_TEXT)`
    font-family: GothamPro-Bold;
    font-size: ${scaleFont(32)};
    line-height: ${scaleFont(40)};
  `,
  [TEXT_VARIANTS.H2]: styled(BASE_TEXT)`
    font-family: GothamPro-Medium;
    font-size: ${scaleFont(28)};
    line-height: ${scaleFont(30)};
  `,
  [TEXT_VARIANTS.H3]: styled(BASE_TEXT)`
    font-family: GothamPro-Medium;
    font-size: ${scaleFont(19)};
  `,
  [TEXT_VARIANTS.BODY]: styled(BASE_TEXT)`
    font-size: ${scaleFont(16)};
    font-family: GothamPro;
    line-height: ${scaleFont(20)};
  `,
  [TEXT_VARIANTS.SMALL]: styled(BASE_TEXT)`
    font-size: ${scaleFont(14)};
  `,
  [TEXT_VARIANTS.LABEL]: styled(BASE_TEXT)`
    font-size: ${scaleFont(16)};
    font-family: GothamPro;
    color: ${APP_COLORS.blue};
  `,
  [TEXT_VARIANTS.ERROR]: styled(BASE_TEXT)`
    color: ${APP_COLORS.red};
  `,
  [TEXT_VARIANTS.LINK]: styled(BASE_TEXT)`
    color: ${APP_COLORS.orange};
  `,
  [TEXT_VARIANTS.UNDERLINE]: styled(BASE_TEXT)``,
};
