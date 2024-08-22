import React, { useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from './Cart';
import COLOURS from "./colours"

const FoodItems = [

  {
    'id': '1',
    'name': 'Lamb Chops',
    'image': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZeHQsFUFnGVreIEQc8lppF4NMDMBreW2zKA&s",
     ingredients: 'Lamb Chops served with vegetables or rice', 
    rating:4.5,
    price: 149.99
  },
   {
    'id': '2',
    'name': 'Cheese Burger',
    
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfdn2VJhVLKmJ0Q-A2s_BFCzfxrSUzSgH2A&s',
      ingredients: 'Beef Burger with cheese',
    rating:2.8,
     price: 119.99
  },
 {
    id: '3',
    name: 'Meat Pizza',
    ingredients: 'Mixed Pizza',
    price: 99.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XKESyxsNttO5zml1Ab4HcxvxZ1HWlyLi1Q&s',
  },
  {
    id: '4',
    name: 'Greek salad',
    ingredients: 'Cheese Pizza',
    price: 75.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF58YPpslPmLxylvnhjFp59SQrgTCmi50Ckw&s',
  },
  {
    id: '5',
    name: 'Fried Chicken Wings',
    ingredients: 'Fried Chicken',
    price: 90.10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9B2BaLtLnxmK19yBwX7GA8I3Ulit7pGO5_g&s",
  },
  {
    id: '6',
    name: 'Fried Sushi ',
    ingredients: 'Salmon Meat',
    price: 158.00,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPVlFxz2uxKDWYpmTthIwryhRbM5GC-oF_A&s"
  },
];




function MenuScreen ({ navigation }) {
  const { addToCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.foodImg} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.price}>R{item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={FoodItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
const styles = {
  
  
  card: {
    backgroundColor: COLOURS.white,  
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: COLOURS.dark, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  foodImg: {
    height: 150,
    width: '100%',
    borderRadius: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOURS.dark,
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: COLOURS.grey,
  },
  button: {
    backgroundColor: COLOURS.primary, 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: COLOURS.white,  
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default MenuScreen;
