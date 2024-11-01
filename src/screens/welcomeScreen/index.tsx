import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { increment, decrement, incrementByAmount } from '../../store/reducer/counterReducer';


const WelcomeScreen = () => {
    const { value } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Counter: {value}</Text>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(incrementByAmount(6))}>
                <Text style={styles.buttonText}>Increment by 5</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default WelcomeScreen