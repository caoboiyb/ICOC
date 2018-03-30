import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import Header from '../components/Header'
import ICOList from '../components/ICOList';

import { connect } from 'react-redux'
import { createChangeSegmentICOAction } from '../actions'



class ICOScreen extends PureComponent {
    state = {
        data: [],
        index: 0
    }

    componentDidMount() {
        this.setState({
            data: this.props.liveICO
        })
    }

    _onICOSegmentChange = index => {
        this.props.changeICOSegmentIndex(index)
        switch (index) {
            case 0:
                this.setState({
                    data: this.props.liveICO,
                    index: index
                })
                break;
            case 1:
                this.setState({
                    data: this.props.upcomingICO,
                    index: index
                })
                break;
            case 2:
                this.setState({
                    data: this.props.finishICO,
                    index: index
                })
                break;
            default:
                this.setState({
                    data: this.props.liveICO,
                    index: index
                })
        }
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
                <View style={{ flex: 1, backgroundColor: "#E3E3E3" }}>
                    <ICOList 
                        data={this.state.data} 
                        index={this.state.index}
                    />
                </View>
            </View>
        );
    }
}

const mapAppStateToProps = state => ({
    segmentIndex: state.icoIndex,
    liveICO: state.liveICO,
    upcomingICO: state.upcomingICO,
    finishICO: state.finishICO
})

const mapDispatchToProps = dispatch => ({
    changeICOSegmentIndex: index => dispatch(createChangeSegmentICOAction(index))
})

export default connect(mapAppStateToProps, mapDispatchToProps)(ICOScreen);