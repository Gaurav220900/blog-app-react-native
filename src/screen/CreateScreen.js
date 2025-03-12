import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
const CreateScreen = () =>{

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);
    const navigation = useNavigation();
    return (
        <View>
            <Text style={styles.label}>Enter title: </Text>
            <TextInput style={styles.input}value = {title} onChangeText={(newTitle) => setTitle(newTitle)}/>
            <Text style={styles.label}>Enter Content: </Text>
            <TextInput style={styles.input} value={content} onChangeText={(newContent) => setContent(newContent)}/>
            <Button 
            title="Add Blog Post" 
            onPress={() => addBlogPost(title,content, () => {
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

export default CreateScreen;