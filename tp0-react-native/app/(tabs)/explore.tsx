import { Platform, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function TabTwoScreen() {
  return (
    <ThemedView style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#00ff00ff',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
        <ThemedText
          type="title"
          style={{
            fontFamily: 'Arial',
            
          }}>
          Estilos Adicionales
        </ThemedText>
       
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#ff009dff',
    flexDirection: 'row',
    gap: 8,
  },
});
