import React, { useState } from 'react';
import { FlatList, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { HeaderContainer, HeaderTitle } from '../components/Header';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ]);

  const addItem = () => {
    if (text.trim()) {
      setItems([...items, { id: Date.now().toString(), text }]);
      setText('');
      Keyboard.dismiss(); // Fecha o teclado automaticamente
    } else {
      Alert.alert('Atenção', 'Digite algo antes de adicionar!');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <HeaderContainer>
          <HeaderTitle>Meu Primeiro App</HeaderTitle>
        </HeaderContainer>

        <Content>
          <Input 
            placeholder="Digite um item..." 
            onChangeText={setText} 
            value={text}
            placeholderTextColor="#6c757d"
          />

          <AddButton onPress={addItem} activeOpacity={0.8}>
            <ButtonText>Adicionar</ButtonText>
          </AddButton>

          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListItem>
                <ListItemText>{item.text}</ListItemText>
              </ListItem>
            )}
          />

          <AboutButton onPress={() => Alert.alert('Sobre', 'Aplicativo React Native')}>
            <AboutButtonText>Sobre</AboutButtonText>
          </AboutButton>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
};

// Estilos

const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
`;

const Content = styled.View`
  padding: 20px;
`;

const Input = styled.TextInput`
  height: 50px;
  border: 2px solid #007BFF;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  background-color: #fff;
  margin-bottom: 12px;
  elevation: 2;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #28a745;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 20px;
  elevation: 3;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

const ListItem = styled.View`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  elevation: 2;
`;

const ListItemText = styled.Text`
  font-size: 16px;
  color: #333;
`;

const AboutButton = styled.TouchableOpacity`
  background-color: #007BFF;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin-top: 20px;
  elevation: 3;
`;

const AboutButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export default HomeScreen;
