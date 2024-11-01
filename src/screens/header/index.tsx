import React, { useState } from 'react';
import { View, TextInput, FlatList, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const HeaderSection = ({ data, onSearch }: any) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text: any) => {
        setSearchText(text);
        onSearch(text);
    };

    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
                placeholder="Search workers..."
                onChangeText={handleSearch}
                value={searchText}
            />
            <Carousel
                data={data}
                renderItem={({ item }) => (
                    <View>
                        {/* <Image source={item?.icon} style={{ width: 50, height: 50 }} />
                        <Text>{item?.Worker_Role}</Text> */}
                    </View>
                )}
                sliderWidth={300}
                itemWidth={80}
                layout="default"
            />
        </View>
    );
};

export default HeaderSection