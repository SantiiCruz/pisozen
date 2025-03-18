import React, { useState } from "react";
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
  const [textWidth, setTextWidth] = useState(0);
  const screenWidth = 360; // Ajusta esto según el ancho de pantalla que estés usando

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 100], [120, 100], Extrapolation.CLAMP),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    width: "100%",
    paddingTop: 60,
    paddingHorizontal: interpolate(scrollY.value, [0, 100], [16, 0], Extrapolation.CLAMP),
  }));

  const startX = -(screenWidth / 2) + textWidth / 2; // Posición inicial a la izquierda
  
   const animatedTextStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(scrollY.value, [0, 100], [28, 16], Extrapolation.CLAMP),
      textAlign: "center",
      transform: [
        {
          translateX: interpolate(scrollY.value, [0, 100], [startX + 15, 0], Extrapolation.CLAMP),
        },
      ],
    };
  });

  // Animated ICON 
  const animatedIconStyle = useAnimatedStyle(() => ({
    scale: interpolate(scrollY.value, [0, 100], [1, 0.6], Extrapolation.CLAMP),
    marginTop: 5,
    transform: [
      {
        translateX: interpolate(scrollY.value, [0, 100], [startX+15, 0], Extrapolation.CLAMP),
      },
    ],
  }));

  return (
    <Animated.View style={animatedHeaderStyle}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Animated.Text
          style={[styles.text, animatedTextStyle]}
          onLayout={(event) => setTextWidth(event.nativeEvent.layout.width)}
        >
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
