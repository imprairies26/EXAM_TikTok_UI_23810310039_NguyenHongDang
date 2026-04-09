import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useStore } from '../store/useStore';

import HeartIcon from '../../assets/icon/heart-icon.svg';
import CommentIcon from '../../assets/icon/comment-icon.svg';
import ShareIcon from '../../assets/icon/share-icon.svg';
import AvatarPic from '../../assets/pic/avatar-pic.png';
import CdPic from '../../assets/pic/cd-pic.png';
import PlusIcon from '../../assets/icon/plus-button-icon.svg';
import NoteMusicIcon from '../../assets/icon/note-music-icon.svg';

export default function VideoOverlay({ avatar = AvatarPic, likes = '0', cmts = '0' , username = 'user', content = 'null', song = 'null'}) {
  const setCommentVisible = useStore((state) => state.setCommentVisible);

  return (
    <View style={styles.container}>
      <View style={styles.rightBar}>
        <View style={styles.avatarContainer}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.plusIcon}>
            <PlusIcon width={14} height={14} />
          </View>
        </View>

        <Pressable style={styles.actionItem}>
          <HeartIcon width={35} height={35} color="white" />
          <Text style={styles.actionText}>{likes}</Text>
        </Pressable>

        <Pressable style={styles.actionItem} onPress={() => setCommentVisible(true)}>
          <CommentIcon width={35} height={35} color="white" />
          <Text style={styles.actionText}>{cmts}</Text>
        </Pressable>

        <Pressable style={styles.actionItem}>
          <ShareIcon width={35} height={35} color="white" />
          <Text style={styles.actionText}>Share</Text>
        </Pressable>

        <View style={styles.cdContainer}>
          <Image source={CdPic} style={styles.cdImage} />
        </View>
      </View>

      <View style={styles.bottomInfo}>
        <Text style={styles.username}>@{username}</Text>
        <Text style={styles.description}>{content}</Text>
        <View style={styles.musicContainer}>
          <NoteMusicIcon width={16} height={16} color="white" />
          <Text style={styles.musicName}>{song}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    paddingBottom: 70,
  },
  rightBar: {
    position: 'absolute',
    right: 15,
    bottom: 70,
    alignItems: 'center',
    gap: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  plusIcon: {
    backgroundColor: '#ff0050',
    borderRadius: 10,
    width: 20,
    height: 20,
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionItem: {
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 13,
  },
  cdContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  cdImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  bottomInfo: {
    paddingLeft: 15,
    paddingRight: 80,
    paddingBottom: 0,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 12,
  },
  musicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  musicName: {
    color: '#fff',
    fontSize: 14,
  },
});
