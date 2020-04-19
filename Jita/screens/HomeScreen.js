import React, { } from 'react';
import { StyleSheet, View, Text} from 'react-native'

import Colors from '../constants/Colors'

const HomeScreen = (props) => {

    return(
        <View style={styles.screen}>
            <Text>Hello Home Screen</Text>
        </View>
    )

};

const styles=StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen