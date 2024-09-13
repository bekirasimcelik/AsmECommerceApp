import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/userActions';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {userInfo, loading, error} = useSelector(state => state.user);

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigation.navigate('Anasayfa');
    }
  }, [userInfo, navigation]);

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Email adresinizi girin"
        keyboardType="email-address"
      />
      <Input
        label="Şifre"
        value={password}
        onChangeText={setPassword}
        placeholder="Şifrenizi girin"
        secureTextEntry
      />
      <CustomButton title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default LoginScreen;
