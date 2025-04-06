import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text>Release Date: {movie.release_date}</Text>
      <Text>Rating: {movie.vote_average}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  poster: { width: '100%', height: 400, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  overview: { marginTop: 10 }
});

export default MovieDetailScreen;
