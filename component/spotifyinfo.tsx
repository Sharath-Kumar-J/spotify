import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Spotifyinform = ( { route }) => {
const { params } = route;
const { item  } = params;
const { id,url } = item;
    return (
        <View>
            <Image style = {{ height : 100 , width : 100}}
             source = {{ uri : url}}
            //  source = { require("../assest/images/1.png")}
             />
              <Text>
                {id}
              </Text>
        </View>
    );
};

export default Spotifyinform;


