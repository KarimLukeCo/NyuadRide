import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/Home';
import Menu from "../Screens/Menu"
import CreateListing from "../Screens/CreateListing"
import AvailableListing from "../Screens/AvailableListing"
import Chat from "../Screens/Chat"
import FollowUp from "../Screens/FollowUp"
import BusRoute from "../Screens/BusRoute"
import LogoScreen from "../Screens/LogoScreen"
import LogIn from "../Screens/LogIn"


const screens = {
  Home: {
    screen: Home,
  },
  Menu: {
    screen: Menu,
  },
  CreateListing: {
    screen: CreateListing,
  },
  AvailableListing: {
    screen: AvailableListing,
  }, 
   Chat: {
    screen: Chat,
  },
  FollowUp: {
    screen: FollowUp,
  },
  BusRoute: {
    screen: BusRoute,
  },
  LogoScreen: 
  {
    screen: LogoScreen,
  },
  LogIn: {
    screen: LogIn,
  },
};

// home stack navigator screens
const NavigationStack = createStackNavigator(screens);

export default createAppContainer(NavigationStack);