/**
 * @author itck_mth
 * @time 2018/11/5 21:41
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
} from 'react-native';


export default class AnimatedSpring extends Component {

    constructor(props) {
        super(props);

        this.state = {
            springValue: new Animated.Value(1),
        };

        this.springAnimated = Animated.spring(
            this.state.springValue,
            {
                toValue: 1,
                friction: 2,    //弹跳系数
                tension: 10,   // 控制速度
            }
        );
    }

    _startAnimated() {
        this.state.springValue.setValue(0.1);
        this.springAnimated.start();
    }

    render() {
        return (
            <View style={styles.mainStyle}>

                <Animated.View
                    style={{
                        width: 225,
                        height: 225,
                        transform: [
                            {scale: this.state.springValue}
                        ]
                    }}
                >
                    <Image ref="image" style={{width: 225, height: 225}}
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
    touchStyle:{
        backgroundColor:'gray',
    }
})
