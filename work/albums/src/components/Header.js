import React from 'react';
import {Text, View} from "react-native";


const styles = {
    textStyles: {
        fontSize: 20,
    },
    viewStyles: {
        paddingTop: 15,
        backgroundColor: '#F8F8F8',
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    }
}

const Header = (props) => {
    const { textStyles, viewStyles } = styles;
    const { headerText } = props;
    return (
        <View style={ viewStyles }>
            <Text style={ textStyles } >{headerText}</Text>
        </View>
        )
}

export default Header;
