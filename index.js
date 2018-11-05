/** @format */

import {AppRegistry} from 'react-native';
import RequestAnimationDemo from './animations/RequestAnimationDemo';
import LayoutAnimationDemo from './animations/LayoutAnimationDemo';
import Opaticy from './animations/Opacity';
import Mixture from './animations/Mixture';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Mixture);
