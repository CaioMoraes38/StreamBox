import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, FlatList, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { GetProcurarFilmes, getLacamento, GetDescricaoFilmes } from '@/services/api/TMDB';
import { StatusBar } from 'expo-status-bar';

interface Filme {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number; // Adicionado campo para avaliação
}

export default function HomeScreen() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [consulta, setConsulta] = useState('');
  const [filmeSelecionado, setFilmeSelecionado] = useState<Filme | null>(null);
  const [descricao, setDescricao] = useState('');


  useEffect(() => {
    const buscarFilmes = async () => {
      let resultados;
      if (consulta) {
        resultados = await GetProcurarFilmes(consulta);
      } else {
        resultados = await getLacamento();
      }
      setFilmes(resultados);
    };

    buscarFilmes();
  }, [consulta]);

  const selecionarFilme = async (filme: Filme) => {
    const detalhes = await GetDescricaoFilmes(filme.id);
    setFilmeSelecionado({ ...filme, vote_average: detalhes.vote_average });
    setDescricao(detalhes.overview);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image source={require('@/../assets/images/Img_Provisoria.png')} style={styles.imagem} />}
    >
      <StatusBar style="auto" />
      <ThemedView style={styles.container}>
          <TextInput
            style={styles.barraDePesquisa}
            placeholder="Buscar"
            value={consulta}
            onChangeText={setConsulta}
          />
          <FlatList
            data={filmes}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.containerImagem}
                onPress={() => selecionarFilme(item)}
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                  style={styles.imagem}
                />
                <Text style={styles.tituloFilme}>{item.title}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.conteudoLista}
          />
        </ThemedView>
        {filmeSelecionado && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={!!filmeSelecionado}
            onRequestClose={() => setFilmeSelecionado(null)}
          >
            <ThemedView style={styles.modalContainer}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${filmeSelecionado.poster_path}` }}
                style={styles.imagemModal}
              />
              <Text style={styles.tituloFilme}>{filmeSelecionado.title}</Text>
              <Text style={styles.descricaoFilme}>{descricao}</Text>
              <Text style={styles.avaliacaoFilme}>Avaliação: {filmeSelecionado.vote_average}</Text>
              <TouchableOpacity onPress={() => setFilmeSelecionado(null)}>
                <Text style={styles.voltar}>Voltar</Text>
              </TouchableOpacity>
            </ThemedView>
          </Modal>
        )}

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 2,
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
  },
  containerImagem: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
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