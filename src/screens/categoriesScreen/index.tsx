import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/index';
import { fetchPosts } from '../../thunk/profileData';
import { PayloadItem } from '../../types/authentity';

const CategoriesScreen = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, isLoading, error } = useSelector((state: RootState) => state.fetchPosts);

    useEffect(() => {
        const payload: PayloadItem = {
            userId: 1,
            id: 1,
            title: 'Sample Title',
            body: 'This is a sample body',
        };

        dispatch(fetchPosts(payload));
    }, [dispatch]);

    return (
        <View style={styles.container}>
            {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
            {error && <Text style={styles.errorText}>{error}</Text>}
            {!isLoading && !error && data && (
                <View>
                    <Text>UserId: {data?.userId}</Text>
                    <Text>ID: {data.id}</Text>
                    <Text>Title: {data.title}</Text>
                    <Text>Body: {data.body}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        marginBottom: 20,
    },
});

export default CategoriesScreen;
