import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from './U';
import COLOURS from './colours';  

function UserScreen  ({ navigation })  {
  const { updateUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit  () {
    updateUser({ name, email, phone });
    navigation.navigate('AddressDetails');
  }

  return (
    <View style={getStyles().container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={getStyles().input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={getStyles().input}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={getStyles().input}
      />
      <Button title="Next" onPress={handleSubmit} color={COLOURS.primary} />
    </View>
  );
};


const getStyles = {
  container: {
    flex: 1,
    backgroundColor: COLOURS.secondary,  
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: COLOURS.grey,  
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: COLOURS.white,  
  },
};



export default UserScreen;
