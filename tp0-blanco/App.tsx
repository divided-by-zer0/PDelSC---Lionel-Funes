import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, ScrollView, StyleSheet} from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Componentes Nativos de React Native</Text>

      <View style={styles.card}>
        <Text style={styles.componentName}>View</Text>
        <View style={styles.demoBox} />
        <Text style={styles.description}>
          Es un contenedor genérico que se usa para estructurar la interfaz, 
          parecido a un "div" en la web.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.componentName}>Text</Text>
        <Text style={styles.demoText}>Hola, soy un texto!</Text>
        <Text style={styles.description}>
          Se utiliza para mostrar texto en pantalla, soporta estilos y 
          diferentes tamaños/tipos de fuente.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.componentName}>Image</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={styles.demoImage}
        />
        <Text style={styles.description}>
          Sirve para mostrar imágenes locales o remotas desde una URL.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.componentName}>TextInput</Text>
        <TextInput
          style={styles.demoInput}
          placeholder="Escribe aquí..."
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Text style={styles.description}>
          Permite la entrada de texto por parte del usuario, 
          similar a un &lt;input&gt; en HTML.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.componentName}>Pressable</Text>
        <Pressable
          style={({ pressed }) => [
            styles.demoButton,
            { backgroundColor: pressed ? '#00aa00' : '#0077ff' },
          ]}
          onPress={() => alert('¡Presionaste el botón!')}
        >
          <Text style={styles.buttonText}>Presióname</Text>
        </Pressable>
        <Text style={styles.description}>
          Detecta interacciones táctiles (toques, presiones, etc.). 
          Ideal para botones personalizados.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.componentName}>ScrollView</Text>
        <ScrollView horizontal style={styles.demoScroll}>
          {Array.from({ length: 5 }, (_, i) => (
            <View key={i} style={styles.scrollItem}>
              <Text style={styles.scrollText}>Item {i + 1}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.description}>
          Permite desplazar contenido en forma vertical u horizontal 
          cuando no entra en la pantalla.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.componentName}>StyleSheet</Text>
        <Text style={styles.demoText}>Los estilos de esta app se definen con StyleSheet.</Text>
        <Text style={styles.description}>
          Permite organizar y reutilizar estilos de manera más clara, 
          parecido al CSS pero dentro de JavaScript/TypeScript.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6ff',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#222',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  componentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077ff',
    marginBottom: 8,
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: '#444',
  },
  demoBox: {
    width: 60,
    height: 60,
    backgroundColor: '#ffcc00',
    borderRadius: 8,
  },
  demoText: {
    fontSize: 16,
    color: '#333',
  },
  demoImage: {
    width: 60,
    height: 60,
    marginVertical: 8,
  },
  demoInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    width: '100%',
  },
  demoButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  demoScroll: {
    marginVertical: 8,
  },
  scrollItem: {
    backgroundColor: '#ffcc00',
    padding: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  scrollText: {
    fontWeight: 'bold',
    color: '#222',
  },
});
