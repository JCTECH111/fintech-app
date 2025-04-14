import { useVideoPlayer, VideoView, VideoSource } from 'expo-video';
import { StyleSheet, View } from 'react-native';

const bigBuckBunnySource: VideoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function PreloadingVideoPlayerScreen() {
  const player = useVideoPlayer(bigBuckBunnySource, player => {
    player.play();
    player.loop = true;
  });

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={styles.video}
        nativeControls={false}
        allowsFullscreen
        contentFit="contain"
      />
      <View style={{ marginTop:80, padding:20 }}>
          <Text style={styles.header}>Ready to change the way you money></Text>
      </View>

      <View style>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 36,
    fontWeight:'900',
    textTransform: 'uppercase',
    color: 'white',
  },
  buttons: {
    
  }
});
