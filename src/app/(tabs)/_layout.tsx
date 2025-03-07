import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favPage"
        options={{
          headerShown: false,
          title: 'Favorites',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="star" color={color} />,

        }}
      />
    </Tabs>
  );
}
