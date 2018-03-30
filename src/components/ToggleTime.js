import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

class ToggleTime extends PureComponent {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity onPress={() => this.props.onChangeTimeIndex(0)}>
                    <Text style={[styles.text, this.props.selectedTime === 0 && styles.selectedText]}>1H</Text>
                </TouchableOpacity>
                <Text style={styles.text}>/</Text>
                <TouchableOpacity onPress={() => this.props.onChangeTimeIndex(1)}>
                    <Text style={[styles.text, this.props.selectedTime === 1 && styles.selectedText]}>24H</Text>
                </TouchableOpacity>
                <Text style={styles.text}>/</Text>
                <TouchableOpacity onPress={() => this.props.onChangeTimeIndex(2)}>
                    <Text style={[styles.text, this.props.selectedTime === 2 && styles.selectedText]}>1W</Text>
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