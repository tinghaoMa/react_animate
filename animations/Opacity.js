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
            name: '',
            count:0,
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

        // InteractionManager.runAfterInteractions(() => {
        //     console.log('hello world');
        // })
        // this._startAnimated();

        this.test();
        this.test2();

    }

    _startAnimated() {
        this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1));
    }

    render() {
        console.log('render');
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

                <Text style={{fontSize: 20, color: 'red'}}>{this.state.name}</Text>
                <Text style={{fontSize: 20, color: 'red'}}>{this.state.count}</Text>

            </View>
        );
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    test2 = () => {
        //异步
        // this.setState({count: this.state.count + 1});
        // this.setState({count: this.state.count + 1});

        //同步
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }

    test = () => {
        console.log('setState');
        this.setState({
            name: '呵呵'
        }, () => {
            console.log('1111 = ' + this.state.name);
        })
        console.log('2222 = ' + this.state.name);
        setTimeout(() => {
            this.setState({
                name: '呵呵11111'
            }, () => {
                console.log('3333333 = ' + this.state.name);
            })
            console.log('444444 = ' + this.state.name);
        }, 1000);
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
