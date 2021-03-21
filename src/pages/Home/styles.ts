import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: #019;
  padding: 0 30px;
  flex: 1;
  padding: 16px 30px ${16 + getBottomSpace()}px;
`;


