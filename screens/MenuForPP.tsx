import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const MenuForPP = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState('all'); 

  
  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const storedMenuItems = await AsyncStorage.getItem('menuItems');
        if (storedMenuItems) {
          const parsedItems = JSON.parse(storedMenuItems);
          setMenuItems(parsedItems);
          setFilteredItems(parsedItems); 
        }
      } catch (error) {
        console.error('Failed to load menu items', error);
      }
    };

    loadMenuItems();
  }, []);

 
  const handleFilter = (courseType: string) => {
    setFilter(courseType);
    if (courseType === 'all') {
      setFilteredItems(menuItems);
    } else {
      const filtered = menuItems.filter(item => item.course === courseType);
      setFilteredItems(filtered);
    }
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('all')}>
          <Text style={filter === 'all' ? styles.activeFilterText : styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('starter')}>
          <Text style={filter === 'starter' ? styles.activeFilterText : styles.filterText}>Starters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('main meal')}>
          <Text style={filter === 'main meal' ? styles.activeFilterText : styles.filterText}>Main Meals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('dessert')}>
          <Text style={filter === 'dessert' ? styles.activeFilterText : styles.filterText}>Desserts</Text>
        </TouchableOpacity>
      </View>

     
      <Text style={styles.counter}>Total Items: {filteredItems.length}</Text>

      
        
      <ScrollView style={styles.scrollView}>
        {filteredItems.map((item, index) => (
          <View key={index} style={styles.card}>
            
            <Text style={styles.cardText}>Dish Name: {item.name}</Text>
            <Text style={styles.cardText}>Description: {item.description}</Text>
            <Text style={styles.cardText}>Price: R{item.price}</Text>
            <Text style={styles.cardText}>Course Type: {item.course}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MenuForPP;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'peachpuff',
    height: '100%',
    padding: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  filterText: {
    color: 'white',
    fontSize: 16,
  },
  activeFilterText: {
    color: 'yellow',
    fontWeight: '900px',
    fontSize: 16,
  },
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollView: {
    marginTop: 10,
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
});
