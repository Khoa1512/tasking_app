import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from '@/components/Button';
// Dữ liệu cho các trang onboarding
const onboardingData = [
  {
    image: require("../../assets/images/onboarding1.jpg"), // Thay bằng đường dẫn ảnh thực tế
    title: "Record all personal or \n team tasks easily",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id.",
  },
  {
    image: require("../../assets/images/onboarding2.jpg"), // Thay bằng đường dẫn ảnh thực tế
    title: "Access from wherever and \n whenever you can",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id.",
  },
  {
    image: require("../../assets/images/onboarding3.jpg"), // Thay bằng đường dẫn ảnh thực tế
    title: "Assign tasks to your \n team easily",
    description:
      "Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id.",
  },
  {
    image: require("../../assets/images/onboarding4.jpg"), // Thay bằng đường dẫn ảnh thực tế
    title: "We are here to make your \n work and goals easier",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function Onboarding() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0); // Theo dõi trang hiện tại

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      // handleFinish();
    }
  };

  // // Hàm xử lý khi nhấn "Register"
  const handleRegister = () => {
    router.push("/(auth)/signup");
  };

  const handleSignin = () => {
    router.push("/(auth)/signin");
  }

  // Hàm xử lý khi hoàn thành onboarding
  // const handleFinish = async () => {
  //   // Giả lập kiểm tra trạng thái đăng nhập (thay bằng logic thực tế)
  //   const isLoggedIn = false; // Thay bằng logic kiểm tra đăng nhập thực tế

  //   if (isLoggedIn) {
  //     router.replace("/(root)/(tabs)/home");
  //   } else {
  //     router.replace("/(auth)/signin");
  //   }
  // };

  // Giao diện cho 3 trang đầu
  const renderFirstThreePages = () => (
    <>
      <View className='flex-1 bg-white h-full w-full'>
        <Image
          source={onboardingData[currentPage].image}
          className='w-full h-[65%]'
          resizeMode='cover'
        />

        <View className='px-5 py-5 items-center'>
          {onboardingData[currentPage].title.split("\n").map((line, index) => (
            <Text
              key={index}
              className='text-h4 font-plus-jakarta-bold text-center'
            >
              {line.trim()}
            </Text>
          ))}
          <Text className='font-plus-jakarta-medium text-center text-grayscale-70 py-5 px-3 text-h6'>
            {onboardingData[currentPage].description}
          </Text>
        </View>

        <View className='flex flex-row justify-between  mt-12 px-4'>
          <Pressable
            onPress={handleNext}
            className='flex flex-row justify-center items-center'
          >
            <View className='bg-primary h-[60px] w-[60px] rounded-full flex items-center justify-center'>
              <AntDesign name='right' size={20} color='white' />
            </View>
            <Text className='ml-4 text-2xl text-grayscale-60 font-plus-jakarta-medium'>
              Skip
            </Text>
          </Pressable>
          <View className='flex flex-row justify-center items-center'>
            {onboardingData.map((_, index) => (
              <View
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentPage ? "bg-primary w-8" : "bg-grayscale-30"
                }`}
              />
            ))}
          </View>
        </View>
      </View>

    </>
  );

  // Giao diện cho trang cuối
  const renderLastPage = () => (
    <>
      <View className='flex-1 bg-white h-full w-full'>
        <Image
          source={onboardingData[currentPage].image}
          className='w-full h-[65%]'
          resizeMode='cover'
        />

        <View className='px-5 py-5 items-center'>
          {onboardingData[currentPage].title.split("\n").map((line, index) => (
            <Text
              key={index}
              className='text-h4 font-plus-jakarta-bold text-center'
            >
              {line.trim()}
            </Text>
          ))}
          <Text className='font-plus-jakarta-medium text-center text-grayscale-70 py-5 px-3 text-h6'>
            {onboardingData[currentPage].description}
          </Text>
        </View>

        <TouchableOpacity className='px-4' onPress={handleSignin}>
          <View className='px-4 py-5 w-full bg-primary rounded-full items-center'>
            <Text className='text-xl text-white font-plus-jakarta-semibold'>
              Get Started
            </Text>
          </View>
        </TouchableOpacity>

        <Pressable className='flex justify-center items-center mt-6' onPress={handleRegister}>
            <Text className='text-lg font-plus-jakarta-semibold'>
              Don't have an account?{" "}
              <Text className='text-primary'>Register</Text>{" "}
            </Text>
        </Pressable>
      </View>
    </>
  );

  return (
    <View className='flex-1 justify-center items-center bg-white'>
      {currentPage < 3 ? renderFirstThreePages() : renderLastPage()}
    </View>
  );
}
