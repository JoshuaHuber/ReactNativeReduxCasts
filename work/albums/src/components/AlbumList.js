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

class AlbumList extends Component  {
    componentWillMount() {
    }
    render() {
        const { viewStyles, textStyles } = styles;
        // const {} = props;
        return (
            <View style={ viewStyles }>
                <Text style={ textStyles }>
                    Album List !!!
                </Text>
            </View>
        )
    }
}

export default AlbumList