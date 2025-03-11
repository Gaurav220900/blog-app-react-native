import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import { Feather} from '@expo/vector-icons'
const IndexScreen = () => {
   const {state, addBlogPost, deleteBlogPost} = useContext(Context);
  
   const navigation = useNavigation();
    
    return (
        <View>
            <Button title='Add new Blog' onPress={addBlogPost}/>

            <FlatList 
            data={state}
            keyExtractor={ BlogPost => BlogPost.title}
            renderItem={ ({ item }) => {
                return ( 
                <TouchableOpacity onPress={() => navigation.navigate('show', {id: item.key})}>
                    <View style={styles.container}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity>
                    <Feather style={styles.icon}name="trash" onPress={()=> deleteBlogPost(item.key)} />
                    </TouchableOpacity>
                    </View>
                </TouchableOpacity>  
                )
            }}
            />
        </View>
    )
    
};

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'Black'

    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }

});

export default IndexScreen;