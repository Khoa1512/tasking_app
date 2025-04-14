import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@/components/Input";
import { router } from "expo-router";
import icons from "@/constants/icons";
import { Dimensions } from "react-native";
const screenHeight = Dimensions.get("window").height;

const SignIn = () => {
  const handleNextSigninEmail = () => {
    router.push("/(auth)/signin-email");
  };
  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <View className='py-10'>
        <Text className='text-h4 font-plus-jakarta-bold text-white text-center'>
          Hi, Welcome Back! 👋
        </Text>
        <Text className='text-lg font-plus-jakarta-medium text-grayscale-20 text-center mt-2'>
          Lorem ipsum dolor sit amet
        </Text>
      </View>

      <View
        style={{
          height: screenHeight * 0.8,
        }}
        className='absolute bottom-0 left-0 right-0 bg-white rounded-t-[30px]'
      >
        <View className='px-6 mt-14 flex flex-col gap-12'>
          <Input name='Email' placeholder='Enter your email address' />
          <TouchableOpacity onPress={handleNextSigninEmail}>
            <View className='px-4 py-5 w-full bg-primary rounded-full items-center'>
              <Text className='text-xl text-white font-plus-jakarta-semibold'>
                Continue with Email
              </Text>
            </View>
          </TouchableOpacity>
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
              <Text className='text-lg font-plus-jakarta-semibold text-center'>
                Don't have an account?{" "}
                <Text className='text-primary'>Sign Up</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
