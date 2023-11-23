import React, { Component, useLayoutEffect } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Entypo'
import { ScrollView } from "react-native";
import Feature from "../components/Home/Feature";


const HomeScreen = () => {

    return (
        <SafeAreaView className=" bg-white">

                <View style={{backgroundColor: '#FFB800', marginVertical: 1, borderBottomRightRadius:15, borderBottomLeftRadius:15}}>
                    <View>
                        <Text style={{ color: 'white', marginLeft: 2, fontSize: 30, textAlign: 'center', padding:25, fontWeight:"bold" }}>CARDÁPIO</Text>
                        
                    </View>
                </View>
               

            {/* Body */}
            <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-100">
                
                
                <Feature />
                <Text></Text>
            </ScrollView>

        </SafeAreaView>
    );
};

export default HomeScreen;
