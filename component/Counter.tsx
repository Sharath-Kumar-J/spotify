import { useEffect, useState } from 'react';
import { StyleSheet, Text, FlatList, View, SafeAreaView, TouchableOpacity } from 'react-native';



const Counterscreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View style = { styles.container}>
            <View style ={styles.outputscreen}>
                <Text style = {styles.output}>
                    {counter}
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCounter(counter + 1)}>
                <View style = {styles.add} >
                    <Text style = {{fontSize:25}}>
                        +
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCounter(counter - 1)}>
                <View style = {styles.sub}>
                <Text style = {{fontSize:25}}>
                        -
                    </Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCounter(0)}>
                <View style = {styles.add}>
                <Text style = {{fontSize:25}}>
                        Reset
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
container : {
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
},
outputscreen:{
    marginBottom:20,
    borderWidth: 1,
    padding:30,
    borderRadius:10,
    backgroundColor:"#0000ff",
},
output:{
    fontSize:25,
    fontweight : 'bold',
    borderwidth: 2,
    color:'white'
    

    },
add :{
    borderWidth:1,
    padding:20,
    marginBottom:20,
    marginTop:20,
    
},
sub:{
    borderWidth:1,
    padding:20,
    marginBottom:20,
 
},
reset:{
    borderWidth:1,
    padding:20,
 
},
})
export default Counterscreen;