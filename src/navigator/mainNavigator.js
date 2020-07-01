import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen77465Navigator from '../features/BlankScreen77465/navigator';
import BlankScreen87457Navigator from '../features/BlankScreen87457/navigator';
import BlankScreen77450Navigator from '../features/BlankScreen77450/navigator';
import BlankScreen67449Navigator from '../features/BlankScreen67449/navigator';
import BlankScreen57448Navigator from '../features/BlankScreen57448/navigator';
import BlankScreen46024Navigator from '../features/BlankScreen46024/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen77465: { screen: BlankScreen77465Navigator },
BlankScreen87457: { screen: BlankScreen87457Navigator },
BlankScreen77450: { screen: BlankScreen77450Navigator },
BlankScreen67449: { screen: BlankScreen67449Navigator },
BlankScreen57448: { screen: BlankScreen57448Navigator },
BlankScreen46024: { screen: BlankScreen46024Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
