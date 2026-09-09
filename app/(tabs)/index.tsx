import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>

      <View style={styles.esquerda}>

        <Text style={styles.logo}>𝕏</Text>

        <Text style={styles.menu}>🏠  Home</Text>
        <Text style={styles.menu}>🔎  Explore</Text>
        <Text style={styles.menu}>🖤  Notifications</Text>
        <Text style={styles.menu}>👤  Follow</Text>
        <Text style={styles.menu}>💬 Chat</Text>
        <Text style={styles.menu}>✨  Grok</Text>
        <Text style={styles.menu}>👤  Profile</Text>
        <Text style={styles.menu}>...  More</Text>

        <View style={styles.botao}>
          <Text style={styles.textoBotao}>Post</Text>
        </View>


        <Text style={styles.perfil}>Dani</Text>
        <Text style={styles.usuario}>@dani</Text>

      </View>

      <View style={styles.meio}>

        <View style={styles.abas}>
          <Text style={styles.abaSelecionada}>For you</Text>
          <Text style={styles.aba}>Following</Text>
          <Text style={styles.aba}>Sports</Text>
          <Text style={styles.aba}>Business</Text>
          <Text style={styles.aba}>Tech</Text>
        </View>

        <View style={styles.publicacao}>

          <Text style={styles.nome}>Dani</Text>

          <Text style={styles.usuarioPost}>
            @dani · 2h
          </Text>

          <Text style={styles.texto}>
            Amo outer banks!!!
          </Text>

          <View style={styles.imagem}>
            <Text style={styles.textoImagem}>
              IMAGEM
            </Text>
          </View>

          <Text style={styles.acoes}>
            💬     🔁     ♡     📊     ↗
          </Text>

        </View>

      </View>

      <View style={styles.direita}>

        <View style={styles.pesquisa}>
          <Text style={styles.textoPesquisa}>
            🔍  Search
          </Text>
        </View>

        <View style={styles.caixa}>

          <Text style={styles.titulo}>
            What's happening
          </Text>

          <Text style={styles.assunto}>
            Nyeme
          </Text>

          <Text style={styles.assunto}>
            Soteldo
          </Text>

          <Text style={styles.assunto}>
            Renê
          </Text>

          <Text style={styles.mostrar}>
            Show more
          </Text>

        </View>


        <View style={styles.caixa}>

          <Text style={styles.titulo}>
            Who to follow
          </Text>

          <Text style={styles.assunto}>
            Ana
          </Text>

          <Text style={styles.assunto}>
            João
          </Text>

          <Text style={styles.mostrar}>
            Show more
          </Text>

        </View>

      </View>

    </View>
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
    width: 500,
  },

  abas: {
    flexDirection: 'row',
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
    height: 250,
    backgroundColor: '#222',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },


  textoImagem: {
    color: 'gray',
  },

  acoes: {
    color: 'gray',
    fontSize: 18,
    marginTop: 15,
  },


  direita: {
    flex: 1,
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