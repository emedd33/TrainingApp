import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { useSelector, connect, dispatch } from 'react-redux';
import { deleteFood } from '../../actions/TypedActions';
function ExcerciseScreen(props) {
  const list = props.foodlist
  console.log(props)
  return (
    <View style={page.container}>
      {
        list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
            style={page.item}
          />
        ))
      }
    </View>
  );
}
const page = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    flexDirection: "column",
  },
  item: {
    margin: 'auto'
  }
})
const mapStateToProps = (state) => {
  return {
    foodlist: state.foodReducer.foodlist
  }
}
export default connect(mapStateToProps)(ExcerciseScreen)