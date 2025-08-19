import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function LoginScreen() {
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            
            {/* Imagem cachorro */}
            <Image 
                source={require('../assets/casual_dog.png')} 
                style={styles.image}
            />

            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>

            <TouchableOpacity 
                style={styles.googleButton}
                onPress={() => navigation.navigate('Acesso')} 
            >
                <Image 
                    source={require('../assets/Google.png')} 
                    style={styles.imageGoogle}
                />
                <Text style={styles.googleText}>Entrar com Google</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.opcoesButton}
            >
                <Text style={styles.opcoesText}>Outras opções</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdf9ed', 
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 20,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 30,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#62531e',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
    },
    imageGoogle: {
        width: 24,
        height: 24,
        marginRight: 10,
        resizeMode: 'contain',
    },
    googleText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    opcoesButton: {
        borderWidth: 1,
        borderColor: '#62531e',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    opcoesText: {
        fontSize: 16,
        color: '#62531e',
        fontWeight: 'bold',
    }
});
