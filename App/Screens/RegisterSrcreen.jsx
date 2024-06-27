import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Step1 from '../Components/Step1';
import Step2 from '../Components/Step2';
import Colors from '../Utils/Colors';

const RegisterScreen = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <View style={styles.container}>
      {currentStep === 1 && (
        <Step1 onNext={handleNext} name={name} setName={setName} />
      )}
      {currentStep === 2 && (
        <Step2
          onNext={handleNext}
          onBack={handleBack}
          password={password}
          setPassword={setPassword}
        />
      )}
      {/* Agrega más pasos según sea necesario */}
      {currentStep === 3 && (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{
           fontSize: 30,
           fontFamily: 'outfit-bold',
        }}>REGISTRO FINALIZADO</Text>
        <TouchableOpacity style={{
           marginTop: 20,
           paddingVertical: 10,
           paddingHorizontal: 20,
           borderRadius: 50, // Border radius to make the button rounded
           backgroundColor:Colors.primary
        }} onPress={() => navigation.navigate('Home')}>
          <Text style={{
            fontSize: 18,
            fontFamily: 'outfit-medium',
          }}>Continuar</Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RegisterScreen;
