import { Link } from 'expo-router';
import { useVideoPlayer, VideoView, VideoSource } from 'expo-video';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { defaultStyles } from '@/constants/Styles';
const bigBuckBunnySource: VideoSource =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function PreloadingVideoPlayerScreen() {
    const player = useVideoPlayer(bigBuckBunnySource, player => {
        player.play();
        player.loop = true;
    });

    return (
        <View style={styles.container}>
            {/* Video Background */}
            <VideoView
                player={player}
                style={styles.video}
                nativeControls={false}
                allowsFullscreen
                contentFit="cover"
            />

            {/* Overlay Content */}
            <View style={{ marginTop: 80, padding: 20 }}>
                <Text style={styles.header}>Ready to change the way you money?</Text>
            </View>

            <View style={styles.buttons}>
                <Link
                    href={'/login'}
                    style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]}
                    asChild>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>Log in</Text>
                    </TouchableOpacity>
                </Link>
                <Link
                    href={'/signup'}
                    style={[defaultStyles.pillButton, { flex: 1, backgroundColor: '#fff' }]}
                    asChild>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 22, fontWeight: '500' }}>Sign up</Text>
                    </TouchableOpacity>
                </Link>
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
        ...StyleSheet.absoluteFillObject, // covers full screen
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 36,
        fontWeight: '900',
        textTransform: 'uppercase',
        color: 'white',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 60,
        paddingHorizontal: 20,
    },
});
