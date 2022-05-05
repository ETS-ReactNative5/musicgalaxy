import { APP_COLORS } from "@src/theme/colors";
import { spacing } from "@src/theme/spacing";
import { scaleFont } from "@src/utils/media";
import styled from "styled-components/native";

export const Container = styled.View`
    margin-bottom: ${({insets})=> insets.bottom}px;
    background: ${APP_COLORS.white};
    padding-top: ${spacing.default}px;
`;

export const TitleWrapper = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: ${spacing.small}px;
`;

export const StyledText = styled.Text`
    font-size: ${scaleFont(24)};
    color: ${APP_COLORS.orange};
    font-weight: bold;
`;
