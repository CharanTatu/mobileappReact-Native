import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MovieCard = ({ movie }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text>Release: {movie.release_date}</Text>
        <Text>Rating: {movie.vote_average}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', margin: 10 },
  image: { width: 100, height: 150 },
  info: { flex: 1, marginLeft: 10, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold' }
});

export default MovieCard;
