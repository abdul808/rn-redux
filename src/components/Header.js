import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';

function Header({title}) {
  const itemList = useSelector(state => state.itemList)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.subText}>Left: {itemList.length}</Text>
    </View>
  )};
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 125,
    paddingTop: 20
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '500'
  },
  subText:{
    paddingTop:5,
    fontSize:14,
    color:'#fff',
  }
});
export default Header;