import { Link } from 'expo-router';
import { useVideoPlayer, VideoView, VideoSource } from 'expo-video';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

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
            <View style={styles.overlay}>
                <Text style={styles.header}>Ready to change the way you manage money?</Text>
                <View style={styles.buttons}>
                    <Link href={'./login'} asChild>
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
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
        fontSize: 32,
        fontWeight: '900',
        textTransform: 'uppercase',
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    loginButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
