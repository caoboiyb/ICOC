import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

class SortBar extends PureComponent {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.onSort(1)}>
                    <Text style={[
                        styles.text,
                        (this.props.sortedColumn === 1 || this.props.sortedColumn === -1) && styles.selectedText,
                        { paddingHorizontal: 10 }]
                    }>#</Text>
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.props.onSort(2)}>
                        <Text style={[
                            styles.text,
                            (this.props.sortedColumn === 2 || this.props.sortedColumn === -2) && styles.selectedText,
                            { paddingLeft: 10 }]
                        }>Name</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.onSort(3)}>
                        <Text style={[
                            styles.text, 
                            (this.props.sortedColumn === 3 || this.props.sortedColumn === -3) && styles.selectedText]
                        }>Price</Text>
                    </TouchableOpacity>
                    <Text style={[styles.text, { paddingHorizontal: 0 }]}>/</Text>
                    <TouchableOpacity onPress={() => this.props.onSort(4)}>
                        <Text style={[
                            styles.text, 
                            (this.props.sortedColumn === 4 || this.props.sortedColumn === -4) && styles.selectedText]
                        }> % </Text>
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