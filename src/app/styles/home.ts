import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
  
      marginTop: 10,  
    },
    barraDePesquisa: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      color: 'white',
    },
    conteudoLista: {
      paddingHorizontal: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    containerImagem: {
      width: '48%',
      padding: 5,
      alignItems: 'center',
      marginBottom: 10,
    },
    imagem: {
      width: '100%',
      height: 250,
      resizeMode: 'cover',
    },
    tituloFilme: {
      textAlign: 'center',
      marginTop: 5,
      color: 'white',
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    descricaoContainer: {
      padding: 20,
      alignItems: 'center',
    },
    imagemModal: {
      width: '100%',
      height: 400,
      resizeMode: 'contain',
    },
    descricaoFilme: {
      color: 'white',
      textAlign: 'justify',
      marginTop: 10,
    },
    avaliacaoFilme: {
      color: 'white',
      textAlign: 'left',
      marginTop: 10,
    },
    voltar: {
      color: 'blue',
      marginTop: 20,
    },
  });

  export default styles;