import { AppRegistry } from 'react-native';
import App from './App';
import appConfig from './App.json';
import 'react-native-web';
import CreatorEarningsScreen from './CreatorEarningsScreen';
import ReportBlockModal from './ReportBlockModal';

AppRegistry.registerComponent(appConfig.name, () => App);
AppRegistry.runApplication(appConfig.name, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});

// Ensure these components are registered in the navigation stack or exported as needed
