/**
 * @author itck_mth
 * @time 2018/11/5 21:48
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


export default class AnimatedDecay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            decayValue: new Animated.ValueXY({x:0,y:0}),
        };

        this.decayAnimated = Animated.decay(
            this.state.decayValue,
            {
                velocity: 1,       // 起始速度，必填
                deceleration: 0.95,  // 速度衰减比例，默认为0.997
            }
        );
    }

    _startAnimated() {
        this.decayAnimated.start();
    }

    render(){
        return (
            <View style={styles.mainStyle}>

                <Animated.View
                    style={{
                        width: 100,
                        height: 150,
                        transform:[
                            {translateX: this.state.decayValue.x}, // x轴移动
                            {translateY: this.state.decayValue.y}, // y轴移动
                        ]
                    }}
                >
                    <Image ref="image" style={{width:100,height:150}}
                           source={require('../res/imgs/lyf.jpeg')}>
                    </Image>
                </Animated.View>

                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
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
