
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Stack, router } from 'expo-router';

export default function TabOneScreen() {
  const [curtido, setCurtido] = useState(false);

  function abrirDetalhes() {
    router.push('/detalhe');
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.tela}>

        {/* MENU LATERAL */}
        <View style={styles.esquerda}>
          <Text style={styles.logo}>𝕏</Text>

          <Text style={styles.menu}>🏠  Home</Text>
          <Text style={styles.menu}>🔎  Explore</Text>
          <Text style={styles.menu}>🖤  Notifcations</Text>
          <Text style={styles.menu}>👤  Follow</Text>
          <Text style={styles.menu}>💬  Chat</Text>
          <Text style={styles.menu}>✨  Grok</Text>
          <Text style={styles.menu}>👤  Profile</Text>
          <Text style={styles.menu}>...  More</Text>

          <View style={styles.botao}>
            <Text style={styles.textoBotao}>Publicar</Text>
          </View>

          <Text style={styles.perfil}>Dani</Text>
          <Text style={styles.usuario}>@dani</Text>
        </View>

        {/* COLUNA CENTRAL */}
        <View style={styles.meio}>
          <ScrollView
            style={styles.rolagem}
            showsVerticalScrollIndicator={true}
          >

            {/* ABAS */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.abas}>
                <Text style={styles.abaSelecionada}>
                  Para você
                </Text>

                <Text style={styles.aba}>Seguindo</Text>
                <Text style={styles.aba}>Esportes</Text>
                <Text style={styles.aba}>Negócios</Text>
                <Text style={styles.aba}>Tecnologia</Text>

                <TouchableOpacity onPress={abrirDetalhes}>
                  <Text style={styles.aba}>Travel</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* PUBLICAÇÃO DO PATINHO */}
            <View style={styles.publicacao}>

              <Text style={styles.nome}>Dani</Text>

              <Text style={styles.usuarioPost}>
                @dani · 1h
              </Text>

              <Text style={styles.texto}>
                Sem comentariosss kkkkk
              </Text>

              {/* IMAGEM PELO LINK */}
              <Image
                source={{
                  uri: 'https://pbs.twimg.com/media/HSyOz9aXkAAEW_d?format=jpg&name=small',
                }}
                style={styles.imagem}
                resizeMode="cover"
              />

              {/* AÇÕES */}
              <View style={styles.acoes}>
                <Text style={styles.acao}>💬</Text>
                <Text style={styles.acao}>🔁</Text>

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

                <Text style={styles.acao}>📊</Text>
                <Text style={styles.acao}>↗</Text>
              </View>

            </View>

          </ScrollView>
        </View>

        {/* COLUNA DIREITA */}
        <View style={styles.direita}>

          <View style={styles.pesquisa}>
            <Text style={styles.textoPesquisa}>
              🔍  Pesquisar
            </Text>
          </View>

          <View style={styles.caixa}>
            <Text style={styles.titulo}>
              O que está acontecendo?
            </Text>

            <Text style={styles.assunto}>Animais</Text>
            <Text style={styles.assunto}>Patinhos</Text>
            <Text style={styles.assunto}>Natureza</Text>

            <Text style={styles.mostrar}>
              Mostrar mais
            </Text>
          </View>

          <View style={styles.caixa}>
            <Text style={styles.titulo}>
              Quem seguir
            </Text>

            <Text style={styles.assunto}>Natanael</Text>
            <Text style={styles.assunto}>Vicky</Text>

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

  tela: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
  },

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

  meio: {
    flex: 1,
    height: '100%',
  },

  rolagem: {
    flex: 1,
  },

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

  imagem: {
    width: '100%',
    height: 350,
    backgroundColor: '#222',
    borderRadius: 15,
  },

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

});
