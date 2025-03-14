import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const HeaderContainer = styled.View`
  background-color: #007BFF;
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 40}px;
  padding-bottom: 15px;
  align-items: center;
  justify-content: center;
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
`;

export const HeaderTitle = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
