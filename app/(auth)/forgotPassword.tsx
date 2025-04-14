import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import { router } from 'expo-router';
import { Input  } from "@/components/Input";
import Button from '@/components/Button';

const ForgotPassword = () => {
  return (
    <View className='flex-1 bg-white px-5'>
      <SafeAreaView>
        <TouchableOpacity
          className='h-12 w-12 bg-[#ECECEC] rounded-full items-center justify-center'
          onPress={() => router.push('/(auth)/signin-email')}
        >
          <Image
            source={icons.backArrow}
            className='size-6'
            resizeMode='contain'
          />
        </TouchableOpacity>
        <View className='flex flex-col justify-center items-center gap-14'>
          <View className=' flex flex-col gap-3 justify-center items-center mt-10'>
            <Text className='text-h4 font-plus-jakarta-bold text-black '>
              Forgot Password{' '}
            </Text>
            <Text className='text-md font-plus-jakarta-semibol text-grayscale-70'>
              Recover your account password
            </Text>
          </View>

          <Input
            name='E-mail'
            placeholder='Enter your email'
            className='bg-secondary'
          />
          <View className='w-full'>
            <Button
              title='Continue'
              onPress={() => router.push('/(auth)/newPassword')}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ForgotPassword;
