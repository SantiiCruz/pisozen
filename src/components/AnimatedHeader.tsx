import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  Extrapolation,
  SharedValue,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "@/src/styles/colors";

interface AnimatedHeaderProps {
  scrollY: SharedValue<number>;
  title: string;
  onPress: () => void;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ scrollY, title, onPress }) => {
  const animatedHeaderStyle = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 100], [100, 90], Extrapolation.CLAMP),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: interpolate(scrollY.value, [0, 100], [16, 0], Extrapolation.CLAMP),
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    fontSize: interpolate(scrollY.value, [0, 100], [24, 16], Extrapolation.CLAMP),
    textAlign: "center",
    
    transform: [
      {
        translateX: interpolate(scrollY.value, [0, 100], [-130, 0], Extrapolation.CLAMP),
      },
    ],
  }));

  //Animated ICON 
  const animatedIconStyle = useAnimatedStyle(() => ({
    scale: interpolate(scrollY.value, [0, 100], [1, 0.6], Extrapolation.CLAMP),
    marginTop: 5,
    transform: [
      {
        translateX: interpolate(scrollY.value, [0, 100], [-125, 0], Extrapolation.CLAMP),
      },
    ],
  }));


  return (
    <Animated.View style={animatedHeaderStyle}>
      <TouchableOpacity style={[styles.button, animatedTextStyle]} onPress={onPress}>
        <Animated.Text style={[styles.text, animatedTextStyle]}>
          {title}
        </Animated.Text>
        <Animated.View style={animatedIconStyle}>
          <Ionicons name="chevron-down" size={24} color="white" />
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AnimatedHeader;
