

import React,{useCallback,useEffect,useState} from 'react';
import { Image,StyleSheet, Text, View,TouchableOpacity, 
        Platform, ToastAndroid,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loginscreen from './screens/Loginscreen';



export default function App() {

 


  const [selectedImage, setSelectedImage] = React.useState(null);  
  const [appIsReady,setAppIsReady] = useState(false);
  const Stack = createNativeStackNavigator();
  

  useEffect(()=>{
    async function prepare(){
      try{
        ToastAndroid.show('app is loading; wait please', ToastAndroid.SHORT);
        //keep the splash screen active
        await SplashScreen.preventAutoHideAsync();
        
        //Pre-Load fonts, make any API
        await Font.loadAsync(Entypo.font);

        await Promise.all([
          Font.loadAsync({
            "trebuchet-ms-regular": require("./assets/fonts/trebuchet-ms-regular.ttf"),
            "arial-regular": require("./assets/fonts/arial-regular.ttf")
          })
        ]);

        //delay screen for 2 seconds
        await new Promise(resolve => setTimeout(resolve,2000));

      }catch(e)
      {
        console.warn(e);
      } finally{
        setAppIsReady(true);
      }
    }
    prepare();
  },[] );

const onLayoutRootView = useCallback(async()=>{
  if(appIsReady){
    await SplashScreen.hideAsync();
  }
},[appIsReady]);

  if(!appIsReady){
  
    return null;
  }

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }
  };

  let openShareDialogAsync = async()=>{
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
      return;
    }

    Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }


  function HomeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}
      onLayout={onLayoutRootView}
    >
    <Loginscreen navigation={navigation}/>
     </SafeAreaView>
    );
  }

  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  

  return (

    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown:false}}>  
    
      <Stack.Screen name="Login" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      
      
      
    </Stack.Navigator>
  </NavigationContainer>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(197,188,171,1)",
    
  },
  logo : {
    width:305, 
    height:159,
    marginBottom: 10,
  },
  instruction : {
    color:'#888', 
    fontSize:18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
  thumbnail :{
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  txtEmail: {
    fontFamily: "trebuchet-ms-regular",    
    color: "#121212",
    height: 56,
    fontSize: 20,    
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(135,29,29,1)",
    borderStyle: "solid",
    borderRadius: 30,
    width: '100%',
    backgroundColor: "rgba(237,220,202,1)",    
    marginTop: 239
  },  
  txtPassword: {
    fontFamily: "trebuchet-ms-regular",
    color: "#121212",
    height: 56,
    width: '100%',    
    fontSize: 20,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(135,29,29,1)",
    borderStyle: "solid",
    borderRadius: 30,
    backgroundColor: "rgba(237,220,202,1)",
     marginTop: 14,
     
    // marginLeft: 19
  }, 
  image1: {
    width: 196,
    height: 203,
    marginTop: -349,
    marginLeft: 82
  },
  btnLogin: {
    height: 59,
    width: '50%',
    borderRadius: 30,
    marginTop: 24,
    alignSelf:'center'
  },
  padHorizontal:{
    paddingHorizontal:10,
  },
  or13: {
    fontFamily: "trebuchet-ms-regular",
    color: "#121212",
    fontSize: 25,
    marginTop: 15,
    alignSelf:'center'
  },  
  materialButtonSuccess: {
    height: 59,
    width: '50%',
    borderRadius: 30,
    marginTop: 15,
    alignSelf: "center",
    

  }
});


