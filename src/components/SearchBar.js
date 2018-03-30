import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

class SearchBar extends PureComponent {
    state = {}

    _onCancel = () => {
        this.props.onPress()
    }

    _onChangeSearchInput = (text) => {
        this.props.onChangeSearch(text)
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <View style={styles.searchBarStyle}>
                    <TextInput 
                        style={styles.textInputStyle} 
                        placeholder="Find a currency..." 
                        placeholderTextColor="#E3E3E3"
                        onChangeText={this._onChangeSearchInput}
                        autoCorrect={false}
                        autoFocus={true} />
                </View>
                <Button color="#FFFFFF" title="Cancel" onPress={this._onCancel} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#18141F",
        paddingTop: 25,
        flexDirection: 'row',
        paddingBottom: 5
    },
    textInputStyle: {
        flex: 1,
        backgroundColor: "#2F2F43",
        paddingLeft: 20,
        color: "#FFFFFF",
        borderRadius: 20
    },
    searchBarStyle: {
        flex: 1,
        padding: 5,
        paddingLeft: 10
    }
})
export default SearchBar;