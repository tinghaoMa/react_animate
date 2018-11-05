/**
 * @author itck_mth
 * @time 2018/11/5 5:32 PM
 * @class describe
 */


import React, {Component} from 'react';
import {
    NativeModules,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    LayoutAnimation,
} from 'react-native';

const {UIManager} = NativeModules;

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

export default class LayoutAnimationDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 100,
            height: 150,
            left: 20,
            top: 20,
        }
    }

    _clickStartAnimation() {
        LayoutAnimation.configureNext({
            duration: 1000,   //持续时间
            create: {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: 0.6
            },
            update: {
                type: 'easeOut',
                springDamping: 0.6
            }
        });
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

        this.setState({
            width: this.state.width + 40,
            height: this.state.height + 60,
            left: this.state.left + 20,
            top: this.state.top + 50,
        });
    }

    render() {
        return (
            <View style={styles.mainStyle}>

                <Image style={{
                    width: this.state.width,
                    height: this.state.height,
                    position: 'absolute',
                    left: this.state.left,
                    top: this.state.top
                }}
                       source={require('../res/imgs/lyf.jpeg')}>
                </Image>

                <TouchableOpacity style={{width: 200, height: 50, backgroundColor: 'yellow', marginTop: 40}}
                                  onPress={this._clickStartAnimation.bind(this)}>
                    <Text style={{width: 200, height: 50, textAlign: 'center', lineHeight: 50}}>点击开始动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        width:screenW,
        backgroundColor:"#1ab9af",
        justifyContent:'center',
        alignItems:'center',
    },
    touchStyle: {
        backgroundColor: 'gray',
    }
})
