import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native'
import Video from 'react-native-video';
function Videoplay() {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [shows, setShows] = useState(true);

    return (
        <View style={styles.container}>
            <ActivityIndicator
                style={{ marginTop: 30 }}
                size='large'
            />
            <Video
                ref={video}
                source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }}
                style={styles.backgroundVideo}
                controls={true}
                // paused={true}
                //muted
                onPlaybackStatusUpdate={status => setStatus(() => status)}

            />

            {/* <View style={{ marginTop: 200 }} >
                <Button
                    color="red"
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View> */}

        </View>
    )
}

export default Videoplay

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundVideo: {
        position: 'absolute',
        height: 1000,
        width: 1000,
        marginTop: 2,
        resizeMode: 'contain'
    },

})