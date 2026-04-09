import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import LikeCmtIcon from '../../assets/icon/like-cmt-icon.svg';
import BlueTickIcon from '../../assets/icon/blue-tick-icon.svg';
import ShowMore from '../../assets/icon/show-more-icon.svg';

export default function CommentComponent({
  avatar,
  username,
  content,
  likes = 0,
  time = '1 ngày',
  replies,
  isVerified = false,
}) {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.contentContainer}>
        <View style={styles.userRow}>
          <Text style={styles.username}>{username}</Text>
          {isVerified && (
            <View style={styles.verifiedIconContainer}>
              <BlueTickIcon width={10} height={10} />
            </View>
          )}
        </View>
        <Text style={styles.content}>
          {content} <Text style={styles.time}>{time}</Text>
        </Text>
        {replies !== undefined && (
          <Pressable style={styles.footerContainer}>
            <Text style={styles.repliesText}>View replies ({replies})</Text>
            <Text style={styles.chevronIcon}> <ShowMore width={9} height={4.5} /></Text>
          </Pressable>
        )}
      </View>
      <View style={styles.likeContainer}>
        <LikeCmtIcon width={15.5} height={13.5} color="#86878B" />
        <Text style={styles.likeCount}>{likes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Proxima Nova',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
    marginTop: 2,
  },
  contentContainer: {
    flex: 1,
    paddingRight: 10,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
  },
  verifiedIconContainer: {
    marginLeft: 4,
  },
  content: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
    marginBottom: 6,
    lineHeight: 20,
  },
  time: {
    fontSize: 13,
    color: '#86878B',
    marginLeft: 5,
  },
  footerContainer: {
    fontFamily: 'Proxima Nova',
    fontWeight: '600',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  repliesText: {
    fontSize: 13,
    color: '#86878B',
    fontWeight: '500',
  },
  chevronIcon: {
    fontSize: 12,
    color: '#86878B',
    marginLeft: 4,
    transform: [{ scaleX: 1.2 }, { scaleY: 0.8 }],
    marginTop: 2,
  },
  likeContainer: {
    alignItems: 'center',
    fontSize: 13,
    fontWeight: '400',
    paddingTop: 10,
    width: 40,
  },
  likeCount: {
    fontSize: 12,
    color: '#86878B',
    marginTop: 4,
  },
});