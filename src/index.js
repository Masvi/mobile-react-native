import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#3c7168" />
            <View style={styles.container}>
                <Text style={styles.title}>Hello React Native</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c7168',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: '#f9f9fa',
        fontSize: 28,
        fontWeight: 'bold'
    }
})