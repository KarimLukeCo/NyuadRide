import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import Navigator from './routes/NavigationStack';

export default function App() 
{
const [fontsLoaded, setFontsLoaded] = useState(false);

const loadFonts = async () => {
await Font.loadAsync({
'nunito-bold': require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
});
setFontsLoaded(true);
};

useEffect(() => {
loadFonts();
}, []);

return fontsLoaded ? <Navigator /> : null;
}