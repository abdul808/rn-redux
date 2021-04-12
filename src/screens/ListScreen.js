import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'
import Header from '../components/Header';
import ListView from '../components/ListView';

const ListScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Header title='List'/>
            <ListView/>
            <View style = {styles.fabContainer}>
                <TouchableOpacity
                onPress={ () => navigation.navigate('Modal')}
                style = {styles.fabButton}
               >
                    <Ionicons name='ios-add' color='#fff' size={70}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
    },
    fabButton:{
      backgroundColor:'blue',
      borderRadius:35,
      width:70,
      height:70,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center'
    },
    fabContainer: {
            justifyContent: 'flex-end',
            flexDirection: 'row',
            position: 'absolute',
            right: 10,
            bottom: 20,
            alignContent:'center'
          },
});

export default ListScreen;