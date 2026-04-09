import { View, StyleSheet, ImageBackground } from 'react-native';
import ForYouBg from '../../assets/pic/foryou-background.png';
import VideoOverlay from '../components/VideoOverlay';
import AvatarPic2 from '../../assets/pic/avatar2-pic.png';

export default function ForYouScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={ForYouBg} style={styles.background} resizeMode="cover">
        <VideoOverlay avatar={AvatarPic2} likes={'328.7k'} cmts={'578'} username={'craig_love'} content={'The most statisfying job #fyp #stastifying\n#roadmarking'} song={'Avicii - Waiting For Love'} />
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