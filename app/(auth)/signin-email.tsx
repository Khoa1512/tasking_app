import { View, Text, Image, TouchableOpacity, Pressable, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import { router } from 'expo-router';
import { Input, InputPassword } from "@/components/Input";
import Button from '@/components/Button';

import SuccessModal from '@/components/SuccessModal';

const SigninEmail = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleLogin = () => {
    setModalVisible(true);
  };
  return (
    <SafeAreaView className='flex-1 bg-white px-5'>
        <View className='flex flex-row w-full justify-between items-center'>
          <TouchableOpacity
            className='h-12 w-12 bg-[#ECECEC] rounded-full items-center justify-center'
            onPress={() => router.push("/(auth)/signin")}
          >
            <Image
              source={icons.backArrow}
              className='size-6'
              resizeMode='contain'
            />
          </TouchableOpacity>

          <Text className='text-center font-plus-jakarta-bold text-xl text-black'>
            Sign In
          </Text>
          <View className='h-12 w-12 bg-white'></View>
        </View>
        <View className='flex flex-col justify-center items-start mt-8 gap-5'>
          <Input name='Email Address' placeholder='Enter your email address' />
          <InputPassword
            name='Password'
            placeholder='Enter your password'
          />
          <View className='flex flex-row justify-between  items-center gap-20'>
            <View className='flex flex-row justify-center items-center'>
              <View className='h-6 w-6 border rounded-full border-gray-300' />
              <Text className={`ml-2 text-grayscale-70 font-plus-jakarta-semibold ${Platform.OS === 'android' ? 'text-sm' : 'text-md'}`}>
                Remember Me
              </Text>
            </View>
            <View className='h-6 w-6 bg-white rounded-full' />
            <Pressable onPress={() => router.push("/(auth)/forgotPassword")}>
              <Text className= {`text-error font-plus-jakarta-semibold ${Platform.OS === 'android' ? 'text-sm' : 'text-md'} `}>
                Forgot Password
              </Text>
            </Pressable>
          </View>
        </View>

        <View className='flex flex-col mt-10 gap-10'>
          <Button title='Sign In' onPress={handleLogin} />
          <SuccessModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />

          <View className='flex-row items-center justify-center mx-10'>
            <View className='flex-1 h-px bg-black mx-2' />
            <Text className='mx-3 text-md font-plus-jakarta-semibold text-[#6C6C6C] '>
              Or continue with
            </Text>
            <View className='flex-1 h-px bg-black mx-2' />
          </View>

          <View className='flex flex-col gap-5 justify-center items-center'>
            <TouchableOpacity className='flex flex-row px-4 py-5 w-full rounded-full border items-center justify-center'>
              <Image
                source={icons.google}
                className='size-6'
                resizeMode='contain'
              />
              <Text className='text-lg font-plus-jakarta-semibold ml-3'>
                Continue with Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex flex-row px-4 py-5 w-full rounded-full border items-center justify-center'>
              <Image
                source={icons.apple}
                className='size-6'
                resizeMode='contain'
              />
              <Text className='text-lg font-plus-jakarta-semibold ml-3'>
                Continue with Apple
              </Text>
            </TouchableOpacity>

            <Pressable
              className='mt-20'
              onPress={() => router.push("/(auth)/signup")}
            >
              <Text className='text-lg font-plus-jakarta-semibold'>
                Don't have an account?{" "}
                <Text className='text-primary'>Sign Up</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
  );
};

export default SigninEmail;
