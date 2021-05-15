/**
 * @format
 */

/**
 * Comandos básicos 
 * 
 * ### Servidor Node ###
 * source ~/.rvm/scripts/rvm
 * npm start
 * 
 * ### Emulador Android ###
 * source ~/.bash_profile
 * sudo chmod 777 /dev/kvm
 * emulator -list-avds
 * emulator -avd Pixel_3a_API_30_x86
 * 
 * ### React-native ###
 * source ~/.bash_profile
 * npx react-native start
 * npx react-native run-android
 */
import {AppRegistry} from 'react-native';
import Navigator from './src/Navigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
