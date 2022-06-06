import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;

AppRegistry.registerComponent(appName, () => App);
