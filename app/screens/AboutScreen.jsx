import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import { useNavigation } from '@react-navigation/native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen() {
    const navigation = useNavigation();

    return (
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.title}>To Do List App</Text>
                <Text style={styles.subtitle}>If you ever need to have an app for a todo list.</Text>

                <Button color="#f194ff"
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            </View>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        justifyContent: "center",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 24,
        color: "#38434D",
        textAlign: "center",
        marginHorizontal: 30,
    },
    button: {
        marginTop: 60,
    },
});