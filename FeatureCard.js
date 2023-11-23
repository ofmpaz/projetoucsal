import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FeatureCard = (props) => {
    const navigation = useNavigation();
    const [isFavorited, setIsFavorited] = useState(props.favorite);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const navigateToDetails = () => {
        // Navegue para a tela de detalhes com os parâmetros necessários
        navigation.navigate('Detalhes', {
            id: props.id,
            name: props.name,
            img: props.img,
            price: props.price,
            cat: props.cat,
            location: props.location,
            des: props.des,
        });
    };

    return (
        <TouchableOpacity onPress={navigateToDetails}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderWidth: 1, borderColor: '#A7A7A7', borderRadius: 8 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 130, height: 100 }}>
                    <Image source={{ uri: props.img }} style={{ width: 120, height: 90, borderRadius: 11 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'white', paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#333' }}>{props.name}</Text>
                        {/* TouchableOpacity para permitir a navegação ao toque */}
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={navigateToDetails}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'gray', marginTop: 5, flex: 1 }}>{props.des}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 5 }}>
                        <Text style={{ color: 'gold', fontSize: 20 }}>R$ {props.price}</Text>
                        <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={toggleFavorite}>
                            <Icon name="star" size={25} color={isFavorited ? '#FFB800' : '#A7A7A7'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default FeatureCard;
