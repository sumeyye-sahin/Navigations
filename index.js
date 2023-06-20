/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/Router';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
AppRegistry.registerComponent(appName, () => Router);
