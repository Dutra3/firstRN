import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking
} from 'react-native'

const colorGithub = '#010409';
const colorFontGithub = '#c9d1d9';
const colorDarkFontGithub = '#4f565e';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/56978439?s=96&v=4';

const urlToGithub = 'https://github.com/Dutra3';

const App = () => {

  const handlePressGoToGithub = async ()=> {
    console.log('Verificando Link')
    const res = await Linking.canOpenURL(urlToGithub);
    if (res) {
      console.log('Link Aprovado')
      console.log('Abrindo Link....')
      await Linking.openURL(urlToGithub);
    }
  }

  return (
  <SafeAreaView style = {style.container}>
    <StatusBar backgroundColor={colorGithub} style="light-content" />
    <View style={style.content}>
      <Image 
        accessibilityLabel='Gabriel sorrindo com um fundo indefinido'
        style={style.avatar}
        source={{uri: imageProfileGithub}} 
      />
      <Text
        accessibilityLabel='Nome: Gabriel Dutra' 
        style={[style.defaultText, style.name]}>
        Gabriel Dutra
      </Text>
      <Text
        accessibilityLabel='Ocupação: Estudande de Análise e Desenvolvimento de Sistemas'
        style={[style.defaultText, style.student]}>
        Estudando Análise e Desenvolvimento de Sistemas
      </Text>
      <Text
        accessibilityLabel='Descrição: JavaScript com foco em React e React-Native'
        style={[style.defaultText, style.description]}>
        JavaScript com foco em React e React-Native
      </Text>
      <Pressable onPress={handlePressGoToGithub}>
        <View style={style.button}>
          <Text style={[style.defaultText, style.textButton]}>
            Open in Github
          </Text>
        </View>
      </Pressable>
    </View>
  </SafeAreaView>
  ); 
};

export default App;

const style = StyleSheet.create({
  container: {
    // Column
    backgroundColor: colorGithub,
    flex: 1, // Expande para a tela toda.
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1.5,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  student: {
    fontSize: 18,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 15,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});