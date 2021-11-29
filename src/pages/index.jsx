import React, { useState } from "react";
import { TextInput, View, Image, LogBox, StyleSheet} from 'react-native';
//import stylePages from "./styles";
import style from "../components/container/logo/styles";


const Home = () => {
    const [url, setUrl] = useState('');
    const [name, setname] = useState('');
    return (
        <View style={stylePages.Container}>
            <Image source={{uri:'https://www.azobit.com/wp-content/uploads/2015/01/url-shortener-azobit.jpg'}}
              
            />
            
            <TextInput
                onChaneText={(text) => setUrl(text)}
                value={url}
                placeholder='Digite'
            />

            <TextInput
                onChaneText={(text) => setName(text)}
                value={name}
                placeholder='Digite novo nome para URL'
            />
        </View>
    );
}
const stylePages = StyleSheet.create({
    Container: {
     
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:250,
        height: 50,

    },

});

export default Home;