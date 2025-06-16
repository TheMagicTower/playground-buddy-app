import 'react-native-url-polyfill/auto'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View, Text } from 'react-native'

const Tab = createBottomTabNavigator()

// 임시 스크린 컴포넌트들
function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>지도</Text>
    </View>
  )
}

function PlaygroundsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>놀이터 목록</Text>
    </View>
  )
}

function PlaymatesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>플레이메이트</Text>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>프로필</Text>
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Map" component={MapScreen} options={{ title: '지도' }} />
          <Tab.Screen name="Playgrounds" component={PlaygroundsScreen} options={{ title: '놀이터' }} />
          <Tab.Screen name="Playmates" component={PlaymatesScreen} options={{ title: '플레이메이트' }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: '프로필' }} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}