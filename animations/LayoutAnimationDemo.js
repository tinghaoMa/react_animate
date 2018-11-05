/**
 * @author itck_mth
 * @time 2018/11/5 5:32 PM
 * @class describe
 */


import React, {Component} from 'react';
import {
    NativeModules,
    LayoutAnimation,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
} from 'react-native';

const {UIManager} = NativeModules;

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class LayoutAnimationDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 200,
            height: 20,
        };
    }

    _onPress() {

        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

        this.setState({width: this.state.width + 10, height: this.state.height + 10});
    }

    render() {
        return (
            <View style={styles.container}>
                <View ref="view" style={[styles.content, {width: this.state.width, height: this.state.height}]}>
                    <Text style={[{textAlign: 'center'}]}>Hello World!</Text>
                </View>
                <TouchableOpacity style={styles.content} onPress={this._onPress.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const customAnim = {
    customSpring: {
        duration: 400,
        create: {
            type: LayoutAnimation.Types.spring,
            property: LayoutAnimation.Properties.scaleXY,
            springDamping: 0.6
        },
        update: {
            type: LayoutAnimation.Types.spring,
            springDamping: 0.6
        }
    },
    customLinear: {
        duration: 200,
        create: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity,
        },
        update: {
            type: LayoutAnimation.Types.easeInEaseOut
        }
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
    },
    content: {
        backgroundColor: 'rgba(200, 230, 255, 0.8)',
        marginBottom: 10,
        justifyContent: "center",
        alignSelf: "center",
    },
    button: Platform.select({
        ios: {},
        android: {
            elevation: 4,
            // Material design blue from https://material.google.com/style/color.html#color-color-palette
            backgroundColor: '#2196F3',
            borderRadius: 2,
            width: 100,
            height: 30,
        },
        justifyContent: "center",
        alignSelf: "center",
    }),
    buttonText: {
        alignSelf: "center",
    }
});
