import styled from "styled-components/native";
import FastImage from "react-native-fast-image";
import { scale } from "@src/utils/media";


export const StyledView = styled.View`
    height: 100%;
`;

export const StyledImage = styled(FastImage)`
    height: ${scale(400)}px;
    width: ${scale(400)}px;
`;

