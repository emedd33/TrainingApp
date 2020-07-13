

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements'

export default function HeaderBar(props) {
  const [headerTitle, setHeaderTitle] = useState(props.headerName)
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: headerTitle, style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />);

}
