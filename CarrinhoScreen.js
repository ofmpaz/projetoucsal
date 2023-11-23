import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectBasketItems, BasketTotal, clearBasket } from '../features/basketSlice';

const CarrinhoScreen = () => {
  const basketItems = useSelector(selectBasketItems);
  const total = useSelector(BasketTotal);
  const dispatch = useDispatch();

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelectItem = (itemId) => {
    const item = basketItems.find((item) => item.id === itemId);

    if (!item) {
      console.error('Item not found:', itemId);
      return;
    }

    const isSelected = selectedItems.includes(itemId);

    if (isSelected) {
      setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== itemId));
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, itemId]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.itemContainer, { backgroundColor: selectedItems.includes(item?.id) ? '#eee' : 'transparent' }]}
      onPress={() => toggleSelectItem(item?.id)}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>R$ {item.price}</Text>
    </TouchableOpacity>
  );

  const keyExtractor = (item) => (item && item.id ? item.id.toString() : null);

  const handleFinalizarPedido = () => {

    Alert.alert('Compra realizada com sucesso', 'Obrigado por sua compra!');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={basketItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={selectedItems}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R$ {total}</Text>
      </View>
      <TouchableOpacity onPress={handleFinalizarPedido} style={styles.finalizarPedidoButton}>
        <Text style={styles.buttonText}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#00CCBB',
  },
  removeItemText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 2,
    borderTopColor: '#ddd',
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  finalizarPedidoButton: {
    backgroundColor: '#00CCBB',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  removerItensButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CarrinhoScreen;
