import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

interface Props {
  children: React.ReactNode;
  headerImage?: string;
  headerBackgroundColor?: string;
}

const HEADER_HEIGHT = 100;

export default function DefaultPage({
  children,
  headerImage,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
         style={[
            styles.header,
            headerAnimatedStyle,
            {
              backgroundColor: '#fff',
            },
          ]}
        >
          {headerImage}
        </Animated.View>
        <View style={styles.content}>{children}</View>
      </Animated.ScrollView>
    </View>
  );
}
