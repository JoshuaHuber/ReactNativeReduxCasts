import React, { Component } from 'react';
import { Text, View } from "react-native";

const styles = {
    viewStyles: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    textStyles: {
        fontSize: 20,
        height: '100%'
    }
}

class ViewList extends Component  {
    constructor(props){
        super(props)
    }
    render() {
        // const {} = props;
        const { viewStyles, textStyles } = styles;

        return(
            <View style={ viewStyles }>
                <Text style={ textStyles }>
                    Album List !!!
                </Text>
            </View>
        )
    }
}

export default ViewList