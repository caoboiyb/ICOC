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

class HeaderCoin extends PureComponent {
    state = {}

    _onChangeIndex = event => {
        const newIndex = event.nativeEvent.selectedSegmentIndex
        this.props.onSegmentChange(newIndex)
    }

    render() {
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
                {this.props.hasSearch && <TouchableOpacity style={[styles.segmentedStyle, { marginRight: 10 }]}>
                    <Image source={require('../images/ic_search_white.png')} />
                </TouchableOpacity>}
            </View>
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