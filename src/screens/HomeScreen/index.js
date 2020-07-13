import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { connect } from "react-redux"
import { addFood } from '../../actions/TypedActions';

function HomeScreen(props) {
  const [newItem, setNewItem] = useState("")

  const submitItem = () => {
    props.addFood(newItem)
    setNewItem("")
  }
  console.log(props.foodlist)
  return (
    <View style={page.container}>
      <Text style={page.title}>Home Screen</Text>
      <Input
        placeholder='Write food'
        value={newItem}
        onChangeText={(text) => { setNewItem(text) }}
      />
      <Button
        title="submit"
        style={page.inputButton}
        type="clear"
        onPress={() => submitItem()}
      />
      <Button
        style={page.navigationButton}
        title="Go to Excercise"
        onPress={() => props.navigation.navigate('Excercise')} />
    </View>
  );
}
const page = StyleSheet.create({
  container: { flex: 1 },
  title: {
    textAlign: "center",
    fontSize: "2rem",
  },
  navigationButton: {
    margin: "auto"
  },
  inputButton: {
    margin: "auto",
  }
})
const mapStateToProps = (state) => {
  return {
    foodlist: state.foodReducer.foodlist
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFood: (name) => dispatch(addFood(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)