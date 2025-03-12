import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Context } from "../context/BlogContext";
const EditScreen = ( {route}) =>{
    const { id } = route.params;
    console.log(id);
    const {editBlogPost} = useContext(Context);
    const { state } = useContext(Context);
    const navigation = useNavigation();
    const item = state.find(item => item.key === id)
    const [title,setTitle] = useState(item.title);
    const [content,setContent] = useState(item.content);
    return (
       <View>
            <Text style={styles.label}>Enter title: </Text>
            <TextInput style={styles.input} value = {title} onChangeText={(newTitle) => setTitle(newTitle)} />
            <Text style={styles.label}>Enter Content: </Text>
            <TextInput style={styles.input} value={content} onChangeText={(newContent) => setContent(newContent)} />
            <Button 
            title="Edit Blog Post" 
            onPress={() => editBlogPost(id, title,content, () => {
                navigation.navigate('posts')
            })}
            />
               </View>
    )
};


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 20,
        marginBottom: 8
    },
    label: {
        fontSize: 20,
        marginVertical: 10
    }
});

export default EditScreen;