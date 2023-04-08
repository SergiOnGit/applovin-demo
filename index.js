/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppLovinMAX from "react-native-applovin-max";

AppLovinMAX.initialize("8hf-8oLatElwHoDoM4SK-iqOydE6BKyP7KgSTfvJT76NrfTUMUZNdAiTl9tgZuTIJBxRq_a-AIKNrV626dvWE3").then(configuration => {
    // AppLovinMAX.showMediationDebugger();
}).catch(error => {
    console.warn('Applovin init failed!', error);
});

AppRegistry.registerComponent(appName, () => App);
