import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { data, datasuco } from '../../data/Data';
import FeatureCard from './FeatureCard';

const Feature = () => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContentContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Lanches</Text>
            </View>
            {data.map((offer, index) => (
                <View key={offer.id} style={[styles.cardContainer, index === data.length - 1 && styles.lastCard]}>
                    <FeatureCard
                        id={offer.id}
                        img={offer.image}
                        name={offer.name}
                        cat={offer.category}
                        price={offer.price}
                        location={offer.location}
                        des={offer.desc}
                        favor={offer.favorite}
                    />
                </View>
            ))}

            <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Bebidas</Text>
            </View>
            {datasuco.map((offer, index) => (
                <View key={offer.id} style={[styles.cardContainer, index === datasuco.length - 1 && styles.lastCard]}>
                    <FeatureCard
                        id={offer.id}
                        img={offer.image}
                        name={offer.name}
                        cat={offer.category}
                        price={offer.price}
                        location={offer.location}
                        des={offer.desc}
                        favor={offer.favorite}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        backgroundColor: '#fff', 
    },
    scrollContentContainer: {
        paddingBottom: 40, 
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop:25,
        marginLeft:20,
        color: '#333',
        marginBottom: 25,
    },
    cardContainer: {
        marginBottom: 1,
        marginRight:15,
        marginLeft:15,
    },
    lastCard: {
        marginBottom: 30, 
    },
});

export default Feature;
