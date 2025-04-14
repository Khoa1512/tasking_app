import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import { router } from 'expo-router';
import { InputPassword } from '@/components/Input';
import Button from '@/components/Button';

const CreateNewPassword = () => {
  return (
    <View className='flex-1 bg-white px-5'>
      <SafeAreaView>
        <TouchableOpacity
          className='h-12 w-12 bg-[#ECECEC] rounded-full items-center justify-center'
          onPress={() => router.push('/(auth)/forgotPassword')}
        >
          <Image
            source={icons.backArrow}
            className='size-6'
            resizeMode='contain'
          />
        </TouchableOpacity>

        <View className='flex flex-col justify-center items-center mt-10 gap-2'>
          <Text className='text-h4 font-plus-jakarta-bold text-black'>
            Create a
          </Text>
          <Text className='text-h4 font-plus-jakarta-bold text-black'>
            New Password
          </Text>
          <Text className='text-md font-plus-jakarta-medium text-grayscale-70 mt-2'>
            Enter your new password
          </Text>
        </View>

        <View className='flex flex-col justify-center items-center gap-4 mt-8'>
          <InputPassword
            name='New Password'
            placeholder='Enter new password'
            className='bg-secondary'
          />
          <InputPassword
            name='Confirm Password'
            placeholder='Confirm your password'
          />
        </View>
        <View className='mt-8'>
          <Button title='Continue' />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CreateNewPassword;
