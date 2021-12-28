import React from 'react';
import { View, Text, Button } from 'react-native';


export default function HomeSplash({navigation }){
    return(
    <View style={{ flex:1 }}>
         <Button
          title="Add some friends"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
        <Text style={{ fontSize: 20, color: '#d12' }}>HomeSplash</Text>
    </View>
    )
}