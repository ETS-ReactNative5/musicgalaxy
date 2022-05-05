import { APP_COLORS } from '@src/theme/colors';
import { spacing } from '@src/theme/spacing';
import { scaleFont } from '@src/utils/media';
import styled from 'styled-components/native';

export const CarouselListWrapper = styled.View``;

export const CarouselListHeader =  styled.Text`
    font-weight: bold;
    font-size: ${scaleFont(25)};
    color: ${APP_COLORS.orange};  
`;

export const HeaderContainer= styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-vertical: ${spacing.medium}px;
    margin-horizontal: ${spacing.default}px;
    align-items: center;  
`;

export const ViewAll =  styled.Text`
    font-size: ${scaleFont(14)};
    color: #176fb9;
    text-decoration-line: underline;
`;
