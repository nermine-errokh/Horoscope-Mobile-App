import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horoscope</Text>
        <Image source={require('./assets/horoscope.png')} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Scorpion')}
      >
      <Text style={styles.buttonText}>Scorpion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('belier')}
      >
        <Text style={styles.buttonText}>Bélier</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('taureau')}
      >
        <Text style={styles.buttonText}>Taureau</Text>
      </TouchableOpacity>
    </View>
  );
}

function Scorpion({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scorpion</Text>
      <Image source={require('./assets/scorpion.png')} style={styles.image} />
      <Text style={styles.description}>Description</Text>
      <Text style={styles.descriptionText}>
        Scorpio is one of the most misunderstood signs of the zodiac. Because
        of its incredible passion and power, Scorpio is often mistaken for a
        fire sign. In fact, Scorpio is a water sign that derives its strength
        from the psychic, emotional realm. Like fellow water signs, Cancer and
        Pisces, Scorpio is extremely clairvoyant and intuitive.
      </Text>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

function belier({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Belier</Text>
      <Image source={require('./assets/belier.webp')} style={styles.image} />
      <Text style={styles.description}>Description</Text>
      <Text style={styles.descriptionText}>
      Le signe astrologique du Bélier, de symbole ♈︎, 
      est lié aux personnes nées entre le 21 mars et le 20 avril1 en astrologie tropicale3. 
      Il correspond pour celle-ci (la plus populaire en Occident) à un angle compris entre 0 
      et 30 degrés comptés sur l'écliptique (le cercle des signes du zodiaque) à partir du point vernal4. 
      Il est associé à la constellation du même nom en astrologie sidérale.
      </Text>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

function taureau({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taureau</Text>
      <Image source={require('./assets/taureau.png')} style={styles.image} />
      <Text style={styles.description}>Description</Text>
      <Text style={styles.descriptionText}>
     Le Taureau est un signe fixe lié à l'élément classique de terre, principe de sens concret qu'il partage avec la Vierge et le Capricorne. Sa planète maîtresse est Vénus. Dans son Tetrabiblos, Claude Ptolémée rejette les décans, dont les maîtres nous sont toutefois connus par Teukros ( I er siècle apr.
      </Text>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
     

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Scorpion' component={Scorpion} />
        <Stack.Screen name='belier' component={belier} />
        <Stack.Screen name='taureau' component={taureau} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    padding: 15,
    width: 200,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  goBackButton: {
    marginTop: 20,
    padding: 15,
    width: 200,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    alignItems: 'center',
  },
});
