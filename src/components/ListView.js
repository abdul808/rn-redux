import React from 'react'
import { View,Text, FlatList,StyleSheet,TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import {Ionicons} from '@expo/vector-icons'
import { removeItem } from '../redux/actions';

function ListView(){
    const listItems = useSelector(state => state.itemList)

    const dispatch = useDispatch();
    const onRemove = id =>{
        dispatch(removeItem(id))
    }
return(
    <View
    style={{
        backgroundColor:'white',
        flex:1,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        paddingHorizontal:20,
        paddingVertical:20
    }}
    >
        {listItems.length === 0 ? <Text>Your list is empty :'( </Text>:
         <FlatList
          data={listItems}
          keyExtractor={ item => item.id.toString()}
          renderItem={({item}) =>(
              <View style={styles.listItemContainer}>
                      <Text style={{fontSize:22,fontWeight:'500'}} numberOfLines={1} >
                           {item.name}
                          </Text>
                          <TouchableOpacity
                          style={styles.button}
                          onPress={() => onRemove(item.id)}
                          >
                              <Ionicons name='ios-trash' color= '#fff' size={20} />
                          </TouchableOpacity>
                    </View>
          )    
        
        }
          />
        }
    </View>
)
};

const styles = StyleSheet.create({
  button:{
      borderRadius:8,
      backgroundColor:'#ff333390',
      padding:7,
      alignSelf:'center'
  },
  listItemContainer:{
      flex:1,
      flexDirection:'row',
      paddingTop:10,
      justifyContent:'space-between',
      paddingBottom:10,
      paddingRight:5,
      borderBottomWidth:.25,
      width:'100%'

  }
})

export default ListView;