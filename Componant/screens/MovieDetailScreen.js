import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const MovieDetailScreen = ({ route }) => {
  const { movie } = route.params; // Access the passed movie data

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.info}>Release Date: {movie.release_date}</Text>
      <Text style={styles.info}>Rating: {movie.vote_average}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginBottom: 6,
  },
  overview: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'justify',
  },
});

export default MovieDetailScreen;
