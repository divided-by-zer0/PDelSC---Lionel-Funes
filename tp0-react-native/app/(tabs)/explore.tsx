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
            color: '#ff00bfff',
          }}>
          Estilos Adicionales
        </ThemedText>
       
      </ThemedView>
  );
}
