import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data)
            setProjects(response.data)
        });
    }, []);
    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Jean Masvi'
        });

        setProjects([...projects, response.data]);
    }

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
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.button}
                    onPress={handleAddProject}
                >
                    <Text style={styles.buttonText}>Adicionar projeto</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c7170',
    },

    project: {
        color: '#f9f9fa',
        fontSize: 15,
        fontWeight: 'bold'
    },

    button: {
        backgroundColor: '#F9F9FA',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#3c7168',
        fontWeight: 'bold',
        fontSize: 16,
    }
})