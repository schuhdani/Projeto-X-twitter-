import React, { useState } from 'react';

import {
  Alert,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Stack,
  router,
  useLocalSearchParams,
} from 'expo-router';

import * as Location from 'expo-location';

export default function Detalhe() {
  const { nome } = useLocalSearchParams<{ nome: string }>();
  const [curtido, setCurtido] = useState(false);

  // LOCALIZAÇÃO
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  async function descobrirLocalizacao() {
    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permissão negada',
        'Permita o acesso à localização para usar esta função.'
      );
      return;
    }
    const location =
      await Location.getCurrentPositionAsync({});

    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  }

  return (
    <>
      {/* ESCONDE O CABEÇALHO BRANCO */}
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.tela}>

        {/* MENU LATERAL */}
        <View style={styles.esquerda}>

          <Text style={styles.logo}>𝕏</Text>

          <TouchableOpacity
            onPress={() => router.replace('/')}
          >
            <Text style={styles.menu}>🏠  Lar</Text>
          </TouchableOpacity>

          <Text style={styles.menu}>🔎  Explore</Text>
          <Text style={styles.menu}>🖤  Notificações</Text>
          <Text style={styles.menu}>👤  Seguir</Text>
          <Text style={styles.menu}>💬  Bate-papo</Text>
          <Text style={styles.menu}>✨  Grok</Text>
          <Text style={styles.menu}>👤  Perfil</Text>
          <Text style={styles.menu}>...  Mais</Text>

          <View style={styles.botao}>
            <Text style={styles.textoBotao}>
              Publicar
            </Text>
          </View>
          <Text style={styles.perfil}>
            {nome || 'Dani'}
          </Text>
          <Text style={styles.usuario}>
            @dani
          </Text>
        </View>

        {/* COLUNA CENTRAL */}
        <View style={styles.meio}>
          <ScrollView
            style={styles.rolagem}
            contentContainerStyle={styles.conteudoMeio}
            showsVerticalScrollIndicator={true}
          >

            {/* ABAS */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.abas}>
                <TouchableOpacity
                  onPress={() => router.replace('/')}
                >
                  <Text style={styles.aba}>
                    Para você
                  </Text>
                </TouchableOpacity>
                <Text style={styles.aba}>
                  Seguindo
                </Text>
                <Text style={styles.aba}>
                  Esportes
                </Text>
                <Text style={styles.aba}>
                  Negócios
                </Text>
                <Text style={styles.aba}>
                  Tecnologia
                </Text>
                <Text style={styles.abaSelecionada}>
                  Travel
                </Text>
              </View>
            </ScrollView>

            {/* PUBLICAÇÃO */}
            <View style={styles.publicacao}>
              <Text style={styles.nome}>
                {nome || 'Dani'}
              </Text>
              <Text style={styles.usuarioPost}>
                @dani · 1h
              </Text>
              <Text style={styles.texto}>
                Locais que já conheci!!
              </Text>

              {/* IMAGENS DA PUBLICAÇÃO */}
              <View style={styles.imagens}>
                <Image
                  source={require('../assets/Chile.jpeg')}
                  style={styles.imagem}
                  resizeMode="cover"
                />
                <Image
                  source={require('../assets/Chile1.jpeg')}
                  style={styles.imagem}
                  resizeMode="cover"
                />
                <Image
                  source={require('../assets/Dubai1.jpeg')}
                  style={styles.imagem}
                  resizeMode="cover"
                />
                <Image
                  source={require('../assets/Dubai2.jpg')}
                  style={styles.imagem}
                  resizeMode="cover"
                />
                <Image
                  source={require('../assets/Italia1.jpeg')}
                  style={styles.imagem}
                  resizeMode="cover"
                />
                <Image
                  source={require('../assets/Corretochile.png')}
                  style={styles.imagem}
                  resizeMode="cover"
                />
              </View>

              {/* AÇÕES */}
              <View style={styles.acoes}>
                <Text style={styles.acao}>
                  💬
                </Text>
                <Text style={styles.acao}>
                  🔁
                </Text>

                <TouchableOpacity
                  onPress={() => setCurtido(!curtido)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.coracao,
                      curtido && styles.coracaoCurtido,
                    ]}
                  >
                    {curtido ? '♥' : '♡'}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.acao}>
                  📊
                </Text>
                <Text style={styles.acao}>
                  ↗
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* COLUNA DIREITA */}
        <View style={styles.direita}>

          {/* PESQUISA */}
          <View style={styles.pesquisa}>
            <Text style={styles.textoPesquisa}>
              🔍  Pesquisar
            </Text>
          </View>

          {/* ASSUNTOS */}
          <View style={styles.caixa}>
            <Text style={styles.titulo}>
              Ideias de viagem?
            </Text>
            <Text style={styles.assunto}>
              Viagens
            </Text>
            <Text style={styles.assunto}>
              Turismo
            </Text>
            <Text style={styles.assunto}>
              Praias
            </Text>

            {/* LOCALIZAÇÃO */}
            <TouchableOpacity
              onPress={descobrirLocalizacao}
            >
              <Text style={styles.mostrar}>
                Mostrar mais perto de mim
              </Text>
            </TouchableOpacity>

            {/* RESULTADO DA LOCALIZAÇÃO */}
            {latitude !== null && longitude !== null && (
              <View style={styles.resultado}>
                <Text style={styles.coordenadas}>
                  Latitude: {latitude}
                </Text>
                <Text style={styles.coordenadas}>
                  Longitude: {longitude}
                </Text>
                <TouchableOpacity
                  style={styles.botaoMapa}
                  onPress={() => {
                    Linking.openURL(
                      `https://www.google.com/maps?q=${latitude},${longitude}`
                    );
                  }}
                >
                  <Text style={styles.textoBotaoMapa}>
                    Ver no mapa
                  </Text>
                </TouchableOpacity>

              </View>
            )}
          </View>

          {/* QUEM SEGUIR */}
          <View style={styles.caixa}>
            <Text style={styles.titulo}>
              Quem seguir
            </Text>
            <Text style={styles.assunto}>
              Natanael
            </Text>
            <Text style={styles.assunto}>
              Vicky
            </Text>
            <Text style={styles.mostrar}>
              Mostrar mais
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  /* TELA */
  tela: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
  },

  /* MENU LATERAL */
  esquerda: {
    width: 250,
    padding: 20,
    borderRightWidth: 1,
    borderRightColor: '#333',
  },
  logo: {
    color: 'white',
    fontSize: 35,
    marginBottom: 20,
  },
  menu: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
    marginTop: 10,
  },
  textoBotao: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  perfil: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
  usuario: {
    color: 'gray',
    fontSize: 14,
  },

  /* COLUNA CENTRAL */
  meio: {
    width: 500,
    flexShrink: 0,
    height: '100%',
  },
  rolagem: {
    flex: 1,
  },
  conteudoMeio: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  /* ABAS */
  abas: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    padding: 15,
  },
  aba: {
    color: 'gray',
    marginRight: 20,
  },
  abaSelecionada: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 20,
  },

  /* PUBLICAÇÃO */
  publicacao: {
    padding: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  nome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  usuarioPost: {
    color: 'gray',
    marginBottom: 10,
  },
  texto: {
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
  },

  /* GRADE DE IMAGENS */
  imagens: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 10,
  },
  imagem: {
    width: '48%',
    height: 150,
    backgroundColor: '#222',
    borderRadius: 12,
  },

  /* AÇÕES */
  acoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingBottom: 10,
  },
  acao: {
    color: 'gray',
    fontSize: 20,
  },
  coracao: {
    color: 'gray',
    fontSize: 27,
  },
  coracaoCurtido: {
    color: '#f91880',
  },

  /* COLUNA DIREITA */
  direita: {
    flex: 1,
    minWidth: 0,
    padding: 20,
  },
  pesquisa: {
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 25,
  },
  textoPesquisa: {
    color: 'gray',
    fontSize: 16,
  },
  caixa: {
    backgroundColor: '#16181c',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  assunto: {
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
  },
  mostrar: {
    color: '#1d9bf0',
    marginTop: 5,
  },

  /* LOCALIZAÇÃO */
  resultado: {
    marginTop: 15,
  },
  coordenadas: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  botaoMapa: {
    backgroundColor: '#1d9bf0',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  textoBotaoMapa: {
    color: 'white',
    fontWeight: 'bold',
  },

});