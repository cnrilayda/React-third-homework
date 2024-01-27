import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import axios from "axios";

const AddProductScreen = () => {
  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantityPerUnit, setQuantityPerUnit] = useState("");
  const [unitsInStock, setUnitsInStock] = useState(""); // corrected variable name

  const add = () => {
    let newProduct = {
      name: name,
      unitPrice: unitPrice,
      quantityPerUnit: quantityPerUnit,
      unitsInStock: unitsInStock, // corrected variable name
    };

    axios
      .post("https://northwind.vercel.app/api/products", newProduct) // corrected endpoint URL
      .then((res) => {
        Alert.alert("Success", "Product added successfully.");
      })
      
  };

  return (
    <>
      <View>
        <Text> Name</Text>
        <TextInput onChangeText={setName} />
      </View>
      <View>
        <Text>Unit Price</Text>
        <TextInput onChangeText={setUnitPrice} />
      </View>
      <View>
        <Text>Quantity Per Unit</Text>
        <TextInput onChangeText={setQuantityPerUnit} />
      </View>
      <View>
        <Text> Units In Stock</Text>
        <TextInput onChangeText={setUnitsInStock} />
      </View>
      <View>
        <Button onPress={add}>Add</Button>
      </View>
    </>
  );
};

export default AddProductScreen;
