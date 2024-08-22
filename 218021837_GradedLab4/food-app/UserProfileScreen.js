import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from './U';
import { ThemeContext } from './Theme';
import COLOURS from './colours';

function ProfileScreen() {
  const { user } = useContext(UserContext);
  const { theme, setThemeColors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.card}>
        <Text style={[styles.text, { color: theme.text }]}>
          Name: {user.name}
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          Email: {user.email}
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          Phone: {user.phone}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.text, { color: theme.text }]}>
          Address: {user.address}
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          City: {user.city}
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          State: {user.state}
        </Text>
        <Text style={[styles.text, { color: theme.text }]}>
          Zip: {user.zip}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={[styles.text, { color: theme.text }]}>Payment Info</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: COLOURS.primary }]}
        onPress={() => setThemeColors(COLOURS.secondary, COLOURS.dark)}>
        <Text style={styles.buttonText}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: COLOURS.white,
    elevation: 5,
    shadowColor: COLOURS.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: COLOURS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
