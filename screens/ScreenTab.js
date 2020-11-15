import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default class ScreenTab extends React.Component {
    constructor(props){
        super(props)
        
        this.url = this.props.url

    }

    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.text}>{this.props.name} Screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {

        color: "#161924",
        fontSize: 20,
        fontWeight: "500"

    }
})