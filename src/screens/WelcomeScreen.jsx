import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
//import { useNavigation } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation=useNavigation();
  return (
    <View 
    className="flex-1 flex justify-end"
    >
      <Image 
      source={require('../../assets/images/welcome.png')}
      className="h-full w-full absolute"
      />
      <View className="p-5 pb-10 space-y-8">
        <View className="space-y-3">
            <Text className="text-white font-bold text-5xl" >
                Travelling Made Easy!
            </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} className="bg-orange-500 mx-auto p-3 px-12 rounded-full">
            Get Started
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default WelcomeScreen