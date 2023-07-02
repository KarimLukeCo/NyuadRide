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
  LogoScreen: 
  {
    screen: LogoScreen,
    navigationOptions: {
      headerShown: false
    },
  },
  Home: {
    screen: Home,
    navigationOptions: 
    {
      headerLeft: null
    },
  },
  CreateListing: 
  {
      screen: CreateListing,
    },
  Menu: {
    screen: Menu,
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
  LogIn: {
    screen: LogIn,
  },
};

// home stack navigator screens
const NavigationStack = createStackNavigator(screens);

export default createAppContainer(NavigationStack);