/** @format */

import {AppRegistry} from 'react-native';
import RequestAnimationDemo from './animations/RequestAnimationDemo';
import LayoutAnimationDemo from './animations/LayoutAnimationDemo';
import Opaticy from './animations/Opacity';
import Mixture from './animations/Mixture';
import AnimatedSpring from './animations/AnimatedSpring';
import AnimatedDecay from './animations/AnimatedDecay';
import AnimatedParallel from './animations/AnimatedParallel';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AnimatedParallel);
