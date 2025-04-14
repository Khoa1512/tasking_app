import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboarding');
    }, 1500);
    return () => clearTimeout(timer);
  }, [router]);

  // useEffect(() => {
  //   const checkOnboardingStatus = async () => {
  //     try {
  //       // Check if user has completed onboarding
  //       const onboardingCompleted = await AsyncStorage.getItem(
  //         'onboardingCompleted'
  //       );

  //       setTimeout(() => {
  //         if (onboardingCompleted === 'true') {
  //           // If onboarding is completed, go straight to auth
  //           router.replace('/(auth)/signin');
  //         } else {
  //           // If not completed, show onboarding
  //           router.replace('/onboarding');
  //         }
  //       }, 1500);
  //     } catch (error) {
  //       console.error('Error checking onboarding status:', error);
  //       // In case of error, default to onboarding
  //       setTimeout(() => {
  //         router.replace('/onboarding');
  //       }, 1500);
  //     }
  //   };

  //   checkOnboardingStatus();
  // }, [router]);

  return (
    <View className=' flex-1 justify-center items-center bg-primary'>
      <Text className='text-h1 text-white font-plus-jakarta-bold'>Tasking</Text>
      <ActivityIndicator
        className='absolute text-white bottom-10'
        size='large'
      />
    </View>
  );
};

export default SplashScreen;
