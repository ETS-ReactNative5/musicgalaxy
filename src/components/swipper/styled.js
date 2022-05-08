import styled from "styled-components/native";
import Swiper from 'react-native-swiper'
import { ImageBackground } from 'react-native';

export const SwipperWrapper = styled(Swiper)``;

export const ItemWrapper = styled(ImageBackground)`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

export const TextWrapper = styled.Text``;