import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    SegmentedControlIOS,
    TouchableOpacity,
    Image
} from 'react-native';
import SearchBar from './SearchBar'

class HeaderCoin extends PureComponent {
    state = { isSearching: false }

    _onChangeIndex = event => {
        const newIndex = event.nativeEvent.selectedSegmentIndex
        this.props.onSegmentChange(newIndex)
    }

    _onCancelPress = () => {
        this.setState({
            isSearching: false
        })
    }

    _onChangeSearch = text => {
        console.log(text)
    }

    _onSearchButtonPressed = () => {
        this.setState({
            isSearching: true
        })
    }

    renderWithSearching = () => {
        if (this.state.isSearching === false) {
            return (
                <View style={styles.viewStyle}>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <SegmentedControlIOS
                            values={this.props.titleArray}
                            selectedIndex={this.props.selectedIndex}
                            onChange={this._onChangeIndex}
                            style={[{ width: this.props.widthSegment }, styles.segmentedStyle]}
                            tintColor="#E3E3E3"
                        />
                    </View>
                    {this.props.hasSearch &&
                        <TouchableOpacity 
                            style={[styles.segmentedStyle, { marginRight: 10 }]}
                            onPress={this._onSearchButtonPressed}>
                            <Image source={require('../images/ic_search_white.png')} />
                        </TouchableOpacity>}
                </View>
            )
        } else {
            return <SearchBar onPress={this._onCancelPress} onChangeSearch={this._onChangeSearch} />
        }
    }

    render() {
        return (
            this.renderWithSearching()
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#18141F",
        paddingTop: 20,
        flexDirection: 'row'
    },
    segmentedStyle: {
        flex: 0,
        marginTop: 10,
        marginBottom: 10
    }
})

export default HeaderCoin;