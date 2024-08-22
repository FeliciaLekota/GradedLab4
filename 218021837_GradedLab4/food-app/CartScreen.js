import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from './Cart';
import COLOURS from './colours';  

const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart, updateQuantity, getTotal, clearCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>R{item.price}</Text>
      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: R{getTotal()}</Text>
        <TouchableOpacity
          onPress={() => { clearCart(); navigation.navigate('MenuScreen'); }}
          style={styles.checkoutButton}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles ={
  container: {
    flex: 1,
    backgroundColor: COLOURS.secondary,  
    padding: 10,
  },
  card: {
    backgroundColor: COLOURS.white,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: COLOURS.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOURS.dark,
  },
  itemPrice: {
    fontSize: 16,
    color: COLOURS.primary,
    marginVertical: 5,
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: COLOURS.primary,
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: COLOURS.white,
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLOURS.dark,
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: COLOURS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: COLOURS.white,
    fontSize: 18,
    textAlign: 'center',
  },
};

export default CartScreen;
