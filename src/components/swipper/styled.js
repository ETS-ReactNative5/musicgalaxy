import styled from "styled-components/native";
import Swiper from 'react-native-swiper'
import { ImageBackground } from 'react-native';
// import { Text } from '@src/components/text';

export const SwipperWrapper = styled(Swiper)``;

export const ItemWrapper = styled(ImageBackground)`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

export const TextWrapper = styled.Text``;