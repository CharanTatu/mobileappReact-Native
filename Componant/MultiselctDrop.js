
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
//import MultiSelect from 'react-native-multiple-select';
const fruits = ["mumbai", "pune", "aurangabad"];
const MultiselctDrop = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [chek,setChek] = useState(true)
 
  const onSelectedItemsChange = (selectedItems) => {
    setSelectedItems(selectedItems);
    console.log("===============yes",selectedItems)
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#FF0000"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="#48d22b"
          submitButtonText="Submit"
        /> */}
      </View>
    </SafeAreaView>
  );
};
 
export default MultiselctDrop;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
});