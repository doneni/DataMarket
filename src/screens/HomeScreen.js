import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const renderItem = ({item}) => {
    return (
        <View>
            <View>
                <Text>user id: {item.userId}</Text>
            </View>
            <View>
                <Text>id: {item.id}</Text>
            </View>
            <View>
                <Text>title: {item.title}</Text>
            </View>
            <View>
                <Text>body: {item.body}</Text>
            </View>
        </View>
    );
};

const LIMIT = 5;

const HomeScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);

    const getData = () => {
        setLoading(true);
        fetch('http://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(response => setData(response))
          .then(() => {
            setOffset(offset + LIMIT);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            Alert.alert("Error ;(")
          });
    };

    useEffect(() => {
        getData();
    }, []);

    const onEndReached = () => {
        if (loading) {
            return;
        } else {
            getData();
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.dataList}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => String(item.id)}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.8}
                    ListFooterComponent={loading && <ActivityIndicator />}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    dataList: {
        flex: 6,
        backgroundColor: 'white',
    },
});

export default HomeScreen;