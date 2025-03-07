import DefaultPage from '../../components/DefaultPage/defaultPage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { GetProcurarFilmes, getLacamento, GetDescricaoFilmes } from '@/services/api/TMDB';
import styles from '@/app/styles/home';


interface Filme {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number; 
}

export default function Index() {

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
    <DefaultPage
    headerImage={<Image source={require('@/../assets/images/Img_Provisoria.png')} style={styles.imagem} />}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.barraDePesquisa}
          placeholder="Buscar"
          value={consulta}
          onChangeText={setConsulta}
        />
        <ScrollView contentContainerStyle={styles.conteudoLista}>
          {filmes.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.containerImagem}
              onPress={() => selecionarFilme(item)}
            >
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.imagem}
              />
              <Text style={styles.tituloFilme}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {filmeSelecionado && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!filmeSelecionado}
          onRequestClose={() => setFilmeSelecionado(null)}
        >
          <View style={styles.modalContainer}>
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
          </View>
        </Modal>
      )}
    </DefaultPage>
  );
}

