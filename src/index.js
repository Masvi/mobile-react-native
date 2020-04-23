import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList } from 'react-native';

import api from './services/api';

export default function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        });
    }, []);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#3c7168" />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c7168',
    },

    project: {
        color: '#f9f9fa',
        fontSize: 38,
        fontWeight: 'bold'
    }
})