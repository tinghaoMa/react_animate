/**
 * @author itck_mth
 * @time 2018/11/5 22:44
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


export default class AnimatedStagger extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redValue: new Animated.Value(0),
            blueValue : new Animated.Value(0),
        };

        this.staggerAnimated = Animated.stagger(2000,
            [
                Animated.timing(
                    this.state.redValue,
                    {
                        toValue: 1,
                        duration: 5000,
                        easing: Easing.in,
                    }
                ),
                Animated.timing(
                    this.state.blueValue,
                    {
                        toValue: 1,
                        duration: 5000,
                        easing: Easing.in,
                    }
                ),
            ]
        );
    }

    _startAnimated() {
        this.staggerAnimated.start(()=>{this.staggerAnimated.reset()});
    }

    render(){

        const redMarginLeft = this.state.redValue.interpolate({
            inputRange: [0,1],
            outputRange: [0,200]
        });

        const blueMarginLeft = this.state.blueValue.interpolate({
            inputRange: [0,1],
            outputRange: [0,200]
        });

        return (
            <View style={styles.mainStyle}>

                {/*// 红色*/}
                <Animated.View
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor:'red',
                        marginLeft:redMarginLeft,
                    }}
                >
                </Animated.View>


                {/*// 蓝色*/}
                <Animated.View
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor:'blue',
                        marginLeft:blueMarginLeft,
                    }}
                >
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
