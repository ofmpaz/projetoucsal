// DetailCard.js
import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { addToBasket } from '../features/basketSlice';

const DetailCard = ({ id, name, img, price, cat, location, des }) => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = () => {
    dispatch(addToBasket({ id, name, price, img }));
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handleGoToCart = () => {
    navigation.navigate('Carrinho');
  };

  return (
    <View>
      <Text style={styles.detailTitle}>Detalhe do Pedido</Text>
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        style={styles.cardContainer}
      >
        <Image source={{ uri: img }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{des}</Text>
          <Text style={styles.price}>R$ {price}</Text>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartButtonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleGoToCart}
          >
            <Text style={styles.addToCartButtonText}>Ver Carrinho</Text>
          </TouchableOpacity>
          {showMessage && (
            <Text style={styles.successMessage}>Item adicionado com sucesso!</Text>
          )}
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailTitle: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomStartRadius: 20,
    color: 'white',
    fontSize: 35,
    padding:15,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#FFB800',
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    padding: 8,
  },
  image: {
    width: 350,
    height: 230,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailsContainer: {
    alignItems: 'center',  // Centraliza os elementos na horizontal
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: 'gray',
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    color: 'gold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#FFB800',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    marginTop: 10,
  },
  addToCartButtonText: {
    color: 'white',
    textAlign: 'center',
    height: 20,
  },
  successMessage: {
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default DetailCard;
