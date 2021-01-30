import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SignUpViewController = () => {
    return(
        <View style={styles.container}>
            <Text>Howdy</Text>
        </View>
    );
}

export default SignUpViewController;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#16335e"
    },
    button: {
        marginTop: 20,
        height: 37,
        width:"50%",
        backgroundColor: "#F76F6D",
        borderRadius: 15
     },
});