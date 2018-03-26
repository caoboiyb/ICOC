import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

class ToggleTime extends PureComponent {
    state = { selectedTime: 1 }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity onPress={() => this.setState({ selectedTime: 0 })}>
                    <Text style={[styles.text, this.state.selectedTime === 0 && styles.selectedText]}>1H</Text>
                </TouchableOpacity>
                <Text style={styles.text}>/</Text>
                <TouchableOpacity onPress={() => this.setState({ selectedTime: 1 })}>
                    <Text style={[styles.text, this.state.selectedTime === 1 && styles.selectedText]}>24H</Text>
                </TouchableOpacity>
                <Text style={styles.text}>/</Text>
                <TouchableOpacity onPress={() => this.setState({ selectedTime: 2 })}>
                    <Text style={[styles.text, this.state.selectedTime === 2 && styles.selectedText]}>1W</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#242233",
        padding: 5,
        flexDirection: 'row'
    },
    text: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: '500',
        paddingLeft: 5,
        paddingRight: 5
    },
    selectedText: {
        color: "#63D39E"
    }
})
export default ToggleTime;