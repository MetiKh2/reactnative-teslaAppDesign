import { StatusBar } from 'expo-status-bar';
import { I18nManager, StyleSheet, Text, View } from 'react-native';
import CartItem from './components/CartItem';
export default function App() {
  
  I18nManager.allowRTL(false)
  I18nManager.forceRTL(false)
  return (
    <View style={styles.container}>
      <CartItem/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
