import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

class SortBar extends PureComponent {
    state = { sortColumn: 0 }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.setState({sortColumn: 1})}>
                    <Text style={[styles.text, this.state.sortColumn === 1 && styles.selectedText, {paddingHorizontal: 10}]}>#</Text>
                </TouchableOpacity>
                <View style={{flex: 1}}>
                    <TouchableOpacity onPress={() => this.setState({sortColumn: 2})}>
                        <Text style={[styles.text, this.state.sortColumn === 2 && styles.selectedText, {paddingLeft: 10}]}>Name</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => this.setState({sortColumn: 3})}>
                        <Text style={[styles.text, this.state.sortColumn === 3 && styles.selectedText]}>Price</Text>
                    </TouchableOpacity>
                    <Text style={[styles.text, {paddingHorizontal: 0}]}>/</Text>
                    <TouchableOpacity onPress={() => this.setState({sortColumn: 4})}>
                        <Text style={[styles.text, this.state.sortColumn === 4 && styles.selectedText]}> % </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        borderBottomColor: "#312F46",
        borderBottomWidth: 2,
        backgroundColor: "#242233",
        paddingTop: 5,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    text: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: '500',
        paddingHorizontal: 30
    },
    selectedText: {
        color: "#63D39E"
    }
})
export default SortBar;