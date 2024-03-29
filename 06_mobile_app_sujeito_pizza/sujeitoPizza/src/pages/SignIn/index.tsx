import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator
} from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    async function handleLogin() {

        if (email === '' || password === '') {
            return;
        }

        await signIn({ email, password });
    }


    return (
        <TouchableWithoutFeedback touchSoundDisabled onPress={() => Keyboard.dismiss()
        }>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
                />

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor="#f0f0f0"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        placeholderTextColor="#f0f0f0"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        {loadingAuth ? (
                            <ActivityIndicator size={25} color="#fff" />
                        ) : (
                            <Text style={styles.btnText}>Acessar</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e',
    },

    logo: {
        marginBottom: 18,
    },

    inputContainer: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
    },

    input: {
        width: '95%',
        height: 40,
        backgroundColor: '#101026',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#fff',
    },

    button: {
        width: '95%',
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#101026",
    }
});
