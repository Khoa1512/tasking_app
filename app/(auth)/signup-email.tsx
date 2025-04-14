import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import { router } from 'expo-router';
import { Input, InputPassword } from "@/components/Input";
import Button from '@/components/Button';

const SignupEmail = () => {
  return (
    <View className='flex-1 bg-white px-5'>
      <SafeAreaView>
        <View className='flex flex-row justify-between items-center'>
          <TouchableOpacity
            className='h-12 w-12 bg-[#ECECEC] rounded-full items-center justify-center'
            onPress={() => router.push('/(auth)/signup')}
          >
            <Image
              source={icons.backArrow}
              className='size-6'
              resizeMode='contain'
            />
          </TouchableOpacity>

          <Text className='text-center font-plus-jakarta-bold text-xl text-black'>
            Sign Up
          </Text>
          <View className='h-12 w-12 bg-white' />
        </View>

        <View className='flex flex-col justify-center items-center mt-10 gap-5'>
          <Text className='text-2xl font-plus-jakarta-bold text-black'>
            Complete you account
          </Text>
          <Text className='text-md font-plus-jakarta-medium text-grayscale-80'>
            Lorem ipsum dolor sit amet
          </Text>
        </View>

        <View className='flex flex-col w-full justify-center items-center gap-5 mt-10'>
          <Input name='First Name' placeholder='Enter your firstname' />
          <Input name='Last Name' placeholder='Enter your lastname' />
          <Input name='E-mail' placeholder='Enter your email' />
          <InputPassword
            name='Password'
            placeholder='Enter your password'
            secureTextEntry={true}
          />
          <InputPassword
            name='Confirm Password'
            placeholder='Confirm your password'
            secureTextEntry={true}
          />
        </View>
        <View className='mt-8'>
          <Button title='Sign Up' />
        </View>

        <Pressable
          className='mt-10 flex justify-center items-center'
          onPress={() => router.push('/(auth)/signin-email')}
        >
          <Text className='text-lg font-plus-jakarta-semibold'>
            Don't have an account? <Text className='text-primary'>Login</Text>
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

export default SignupEmail;
