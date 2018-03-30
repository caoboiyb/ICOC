import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Linking
} from 'react-native';
import FlexImage from 'react-native-flex-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'

class ICOSection extends PureComponent {
    state = {}

    _renderFinish = () => {
        return (
            <View>
                <Text style={{ paddingBottom: 5, color: parseFloat(this.props.item.all_time_roi) >= 0 ? "#63D39E" : "#fc2a19" }}>
                    ROI: {parseFloat(this.props.item.all_time_roi) >= 0 && "+"}{this.props.item.all_time_roi}
                </Text>
                <Text style={{ paddingBottom: 5 }}>
                    <Icon name="clock-o" size={16} color="#fc2a19" /> Finished
                </Text>
            </View>
        )
    }

    _renderLive = () => {
        return (
            <View>
                <Text style={{ paddingBottom: 5 }}>
                    <Icon name="clock-o" size={16} color="#ffcc00" /> End {moment(this.props.item.end_time).fromNow()}
                </Text>
            </View>
        )
    }

    _renderUpcoming = () => {
        return (
            <View>
                <Text style={{ paddingBottom: 5 }}>
                    <Icon name="clock-o" size={16} color="#63D39E" /> Start {moment(this.props.item.start_time).fromNow()}
                </Text>
            </View>
        )
    }

    _renderStatus = () => {
        switch (this.props.listIndex) {
            case 0:
                return this._renderLive()
            case 1:
                return this._renderUpcoming()
            case 2:
                return this._renderFinish()
            default:
                this._renderLive()
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => Linking.openURL(this.props.item.website_link)}>
                <View style={[styles.containerStyle, { backgroundColor: this.props.backgroundColor }]}>
                    <View style={{ flex: 1, paddingTop: 5 }}>
                        <FlexImage
                            source={{ uri: this.props.item.image }}
                        />
                    </View>
                    <View style={{ flex: 2, paddingLeft: 20 }}>
                        <Text style={styles.header}>{this.props.item.name}</Text>
                        <Text style={styles.description}>{this.props.item.description}</Text>
                        {this._renderStatus()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        flexDirection: 'row'
    },
    header: {
        fontSize: 18,
        fontWeight: '600',
        paddingBottom: 5
    },
    description: {
        fontSize: 16,
        paddingBottom: 5,
        color: "#8e8e93"
    }
})
export default ICOSection;