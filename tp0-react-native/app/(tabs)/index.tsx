import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
  <ThemedView style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffffff',
  }}>
      <ThemedText
        type="title"
        style={{
          fontFamily: 'Arial',
          color: '#000000ff',
          fontSize: 12,
        }}>
        Hola Mundo!
      </ThemedText>
      
    </ThemedView>
  );
}

