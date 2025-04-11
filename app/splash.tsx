import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboarding');
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className=' flex-1 justify-center items-center bg-primary'>
      <Text className='text-h1 text-white font-plus-jakarta-bold'>Tasking</Text>
      <ActivityIndicator className='absolute text-white mt-10' size='large'/>
    </View>
  );
};

export default SplashScreen;
