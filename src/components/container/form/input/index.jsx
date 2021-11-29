import React from "react";
import {View} from 'react-native';

const Input = (props,color) => {
    return (
        <TextInput
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            style={color}
            {...props}
        />
        
    );
}

export default Input;