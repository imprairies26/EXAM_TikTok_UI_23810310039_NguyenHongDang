import { View, StyleSheet, ImageBackground } from 'react-native';
import FollowingBg from '../../assets/pic/following-background.png';
import VideoOverlay from '../components/VideoOverlay';
import AvatarPic from '../../assets/pic/avatar-pic.png';

export default function FollowingScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={FollowingBg} style={styles.background} resizeMode="cover">
        <VideoOverlay avatar={AvatarPic} likes={'4454'} cmts={'64'} username={'karennne'} content={'#avicii #wflove'} song={'Avicii - Waiting For Love'} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'black' 
  },
  background: { 
    flex: 1, 
    width: '100%', 
    height: '100%' 
  },
});
