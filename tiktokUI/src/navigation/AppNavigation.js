import { useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Animated, Dimensions, Pressable, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import FollowingScreen from '../screens/FollowingScreen';
import ForYouScreen from '../screens/ForYouScreen';
import { useStore } from '../store/useStore';
import CommentComponent from '../components/CommentComponent';

import HomeIcon from '../../assets/icon/home-icon.svg';
import SearchIcon from '../../assets/icon/search-icon.svg';
import PlusTabIcon from '../../assets/icon/plus-button-tab-icon.svg';
import InboxIcon from '../../assets/icon/inbox-icon.svg';
import MeIcon from '../../assets/icon/me-icon.svg';
import CloseIcon from '../../assets/icon/close-cmt-icon.svg';

import AvtCmt1 from '../../assets/pic/avt-cmt-1.png';
import AvtCmt2 from '../../assets/pic/avt-cmt-2.png';
import AvtCmt3 from '../../assets/pic/avt-cmt-3.png';
import AvtCmt4 from '../../assets/pic/avt-cmt-4.png';
import AvtCmt5 from '../../assets/pic/avt-cmt-5.png';
import AvtCmt6 from '../../assets/pic/avt-cmt-6.png';
import AvtCmt7 from '../../assets/pic/avt-cmt-7.png';
import TagIcon from '../../assets/icon/tag-cmt-icon.svg';
import EmojiIcon from '../../assets/icon/emoji-cmt-icon.svg';

const TopTab = createMaterialTopTabNavigator();
const { height } = Dimensions.get('window');

function BottomTabBar() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.bottomBar, { paddingBottom: insets.bottom || 10 }]}>
      <Pressable style={styles.tabItem}>
        <HomeIcon width={24} height={24} />
        <Text style={[styles.tabText, { color: 'white' }]}>Trang chủ</Text>
      </Pressable>
      <Pressable style={styles.tabItem}>
        <SearchIcon width={24} height={24} />
        <Text style={styles.tabText}>Khám phá</Text>
      </Pressable>
      <Pressable style={styles.tabCenterItem}>
        <PlusTabIcon width={45} height={30} />
      </Pressable>
      <Pressable style={styles.tabItem}>
        <InboxIcon width={24} height={24} />
        <Text style={styles.tabText}>Hộp thư</Text>
      </Pressable>
      <Pressable style={styles.tabItem}>
        <MeIcon width={24} height={24} />
        <Text style={styles.tabText}>Hồ sơ</Text>
      </Pressable>
    </View>
  );
}

function CommentBottomSheet() {
  const isVisible = useStore((state) => state.isCommentVisible);
  const setVisible = useStore((state) => state.setCommentVisible);
  const translateY = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  if (!isVisible && translateY._value === height) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents={isVisible ? "auto" : "none"}>
      {isVisible && (
        <Pressable 
          style={styles.backdrop} 
          onPress={() => setVisible(false)} 
        />
      )}
      <Animated.View style={[styles.bottomSheet, { transform: [{ translateY }] }]}>
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetTitle}>579 comments</Text>
          <Pressable onPress={() => setVisible(false)} style={styles.closeBtn}>
            <CloseIcon width={20} height={20} />
          </Pressable>
        </View>
        <ScrollView style={styles.commentList} showsVerticalScrollIndicator={false}>
          <CommentComponent 
            avatar={AvtCmt1} 
            username="martini_rond" 
            content="How neatly I write the date in my book" 
            likes={8098}
            time="22h"
            replies={4}
          />
          <CommentComponent 
            avatar={AvtCmt2} 
            username="maxjacobson" 
            content="Now that's a skill very talented" 
            likes={8098}
            time="22h"
            replies={1}
          />
          <CommentComponent 
            avatar={AvtCmt3} 
            username="zackjohn" 
            content="Doing this would make me so anxious" 
            likes={8098}
            time="22h"
          />
          <CommentComponent 
            avatar={AvtCmt4} 
            username="kiero_d" 
            content="Use that on r air forces to whiten them" 
            likes={8098}
            time="21h"
            replies={9}
          />
          <CommentComponent 
            avatar={AvtCmt5} 
            username="mis_potter" 
            content="Sjpuld've used that on his forces 😁😁" 
            likes={8098}
            time="13h"
            replies={4}
            isVerified={true}
          />
          <CommentComponent 
            avatar={AvtCmt6} 
            username="karennne" 
            content="No prressure" 
            likes={8098}
            time="22h"
            replies={2}
          />
          <CommentComponent 
            avatar={AvtCmt7} 
            username="joshua_l" 
            content="My OCD couldn't do it" 
            likes={8098}
            time="15h"
          />
        </ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput 
                style={styles.input} 
                placeholder="Add comment..." 
                placeholderTextColor="#86878B"
              />
              <View style={styles.inputIcons}>
                <TagIcon width={20} height={20} style={{marginRight: 10}} />
                <EmojiIcon width={20} height={20} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Animated.View>
    </View>
  );
}

export default function AppNavigation() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <TopTab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            top: insets.top,
            left: 0,
            right: 0,
            backgroundColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 16,
            textTransform: 'none',
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          tabBarIndicatorStyle: {
            display: 'none',
          },
          tabBarItemStyle: { width: 'auto', paddingHorizontal: 15 , fontFamily: 'Proxima Nova'},
          tabBarContentContainerStyle: { justifyContent: 'center' }
        }}
      >
        <TopTab.Screen name="Following" component={FollowingScreen} options={{ tabBarLabel: 'Following' }} />
        <TopTab.Screen name="ForYou" component={ForYouScreen} options={{ tabBarLabel: 'For You' }} />
      </TopTab.Navigator>

      <BottomTabBar />
      <CommentBottomSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabCenterItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -5,
  },
  tabText: {
    fontSize: 10,
    color: 'gray',
    marginTop: 4,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.65,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  sheetTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  closeBtn: {
    position: 'absolute',
    right: 15,
  },
  commentList: {
    flex: 1,
    marginTop: 10
  },
  inputContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Proxima Nova',
    fontWeight: '400'
  },
  inputIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  }
});
