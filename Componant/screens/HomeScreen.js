import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import MovieCard from './MovieCard';
import { fetchMovies } from '../apiServices/tmdb';

const HomeScreen = ({ category ,navigation}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovies(category);
      setMovies(data);
      setLoading(false);
    };
    getData();
  }, [category]);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          movie={item}
          onPress={() => navigation.navigate('MovieDetail', { movie: item })} // Pass the movie data
        />
      )}
    />
  );
};

export default HomeScreen;
