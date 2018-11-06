/**
 * @author itck_mth
 * @time 2018/11/5 21:01
 * @class describe
 */


import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Animated,
    Image,
    StyleSheet,
    Easing,
    InteractionManager
} from 'react-native';


export default class Opacity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fadeOutOpacity: new Animated.Value(1),
        }

        this.fadeOutAnimated = Animated.timing(
            this.state.fadeOutOpacity,
            {
                toValue: 0,  //透明度动画最终值
                duration: 5000,   //动画时长3000毫秒
                easing: Easing.linear,
            }
        );
    }

    componentDidMount() {

        InteractionManager.runAfterInteractions(() => {
            console.log('hello world');
        })
        this._startAnimated();
    }

    _startAnimated() {
        this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1));
    }

    render() {
        return (
            <View style={styles.mainStyle}>
                <Animated.View style={{width: 200, height: 300, opacity: this.state.fadeOutOpacity}}>
                    <Image ref="image" style={{width: 200, height: 300}}
                           source={require('../res/imgs/lyf.jpeg')}>
                    </Image>
                </Animated.View>

                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width: 200, height: 100, textAlign: 'center', lineHeight: 100}}>点击开始动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchStyle: {
        backgroundColor: 'gray',
    }
})
