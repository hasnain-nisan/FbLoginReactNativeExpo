import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import app from './firebaseSetup'
import {
  getAuth,
  FacebookAuthProvider,
  signInWithCredential
} from 'firebase/auth'
import {
  LoginManager,
  AccessToken
} from 'react-native-fbsdk-next'


export default function App() {

  const SignInWithFb = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile']);
    console.log(result);
    if(result.isCancelled){
      throw new Error('User cancelled login');
    }

    const data = await AccessToken.getCurrentAccessToken();
    if(!data){
      throw new Error('Something is wrong when accessing token')
    }

    const auth = getAuth(app);
    const credential = FacebookAuthProvider.credential(data.accessToken);
    const user = await signInWithCredential(auth, credential)
    console.log(user);
  }

  return (
    <View style={styles.container}>
      <Button title='Sign in with Facebook' onPress={SignInWithFb}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
