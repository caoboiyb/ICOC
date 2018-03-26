import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import Header from '../components/Header'
import { connect } from 'react-redux'
import { createChangeSegmentICOAction } from '../actions'

class ICOScreen extends PureComponent {
    state = {}

    componentDidMount() {
        console.log("ICOindex: " + this.props.segmentIndex)
    }

    _onICOSegmentChange = index => {
        this.props.changeICOSegmentIndex(index)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    titleArray={["Active", "Upcoming", "Recent"]}
                    widthSegment={300}
                    selectedIndex={this.props.segmentIndex}
                    onSegmentChange={this._onICOSegmentChange}
                />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#242233" }}>
                    <Text>ICO Screen</Text>
                </View>
            </View>
        );
    }
}

const mapAppStateToProps = state => ({
    segmentIndex: state.icoIndex
})

const mapDispatchToProps = dispatch => ({
    changeICOSegmentIndex: index => dispatch(createChangeSegmentICOAction(index))
})

export default connect(mapAppStateToProps, mapDispatchToProps)(ICOScreen);