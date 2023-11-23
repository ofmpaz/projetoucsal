import React from 'react';
import { View } from 'react-native';
import DetailCard from './DetailCard';

const DetalhesScreen = ({ route }) => {
    const { name, img, price, cat, location, des } = route.params;

    return (
        <View>
            <DetailCard
                name={name}
                img={img}
                price={price}
                des={des}
            />
        </View>
    );
};

export default DetalhesScreen;
