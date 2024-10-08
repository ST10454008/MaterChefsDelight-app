import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Menu = () => {
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [price, setPrice] = useState('');
  const [courseType, setCourseType] = useState('starter'); 
  const [menuItems, setMenuItems] = useState([]);

  
  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const storedMenuItems = await AsyncStorage.getItem('menuItems');
        if (storedMenuItems) {
          setMenuItems(JSON.parse(storedMenuItems));
        }
      } catch (error) {
        console.error('Failed to load menu items', error);
      }
    };

    loadMenuItems();
  }, []);

 
  useEffect(() => {
    const saveMenuItems = async () => {
      try {
        await AsyncStorage.setItem('menuItems', JSON.stringify(menuItems));
      } catch (error) {
        console.error('Failed to save menu items', error);
      }
    };

    saveMenuItems();
  }, [menuItems]);

  
  const handleAddDish = () => {
    
    if (!dishName || !dishDescription || !price) {
      Alert.alert('Error', 'Please fill in all the fields before adding the dish.');
      return;
    }

    
    const newDish = {
      name: dishName,
      description: dishDescription,
      price: price,
      course: courseType,
    };

    
    setMenuItems([...menuItems, newDish]);

  
    setDishName('');
    setDishDescription('');
    setPrice('');
    setCourseType('starter'); 
  };

  const handleDeleteDish = (index) => {
    
    const updatedMenuItems = menuItems.filter((item, i) => i !== index);
    setMenuItems(updatedMenuItems);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.ChefsInputs}>
        <TextInput
          placeholder='Name of Dish'
          style={styles.DishName}
          value={dishName}
          onChangeText={setDishName}
        />
        <TextInput
          placeholder='The description of the Dish'
          style={styles.DishDescription}
          value={dishDescription}
          onChangeText={setDishDescription}
        />
        <TextInput
          placeholder='The Price'
          style={styles.Price}
          value={price}
          onChangeText={setPrice}
          keyboardType='numeric'
          
        />

      
        <Picker
          selectedValue={courseType}
          onValueChange={(itemValue) => setCourseType(itemValue)}
          style={styles.Picker}
        >
          <Picker.Item label="Starter" value="starter" />
          <Picker.Item label="Main Meal" value="main meal" />
          <Picker.Item label="Dessert" value="dessert" />
        </Picker>
      </View>

      
      <TouchableOpacity style={styles.AddBtn} onPress={handleAddDish}>
        <Text style={{ color: 'white' }}>Add</Text>
      </TouchableOpacity>

      
      <ScrollView style={styles.scrollView}>
        {menuItems.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>Dish Name: {item.name}</Text>
            <Text style={styles.cardText}>Description: {item.description}</Text>
            <Text style={styles.cardText}>Price: R{item.price}</Text>
            <Text style={styles.cardText}>Course Type: {item.course}</Text>

         
            <TouchableOpacity
              style={styles.DeleteBtn}
              onPress={() => handleDeleteDish(index)}
            >
              <Text style={{ color: 'white' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'peachpuff',
    height: '100%',
    padding: 20,
  },
  ChefsInputs: {
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },
  DishName: {
    padding: 20,
    borderWidth: 2,
    borderColor: 'blue',
    width: '100%',
  },
  DishDescription: {
    padding: 20,
    borderWidth: 2,
    borderColor: 'blue',
    width: '100%',
  },
  Price: {
    padding: 20,
    borderWidth: 2,
    width: '100%',
  },
  Picker: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'blue',
  },
  AddBtn: {
    padding: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginBottom: 20,
  },
  scrollView: {
    marginTop: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  DeleteBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
});
