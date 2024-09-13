import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import lidlPdf from '../fyladia/lidl.pdf';
import elomasPdf from '../fyladia/elomas.pdf';

// Get the screen width dynamically
const screenWidth = Dimensions.get('window').width;

const data = [
  {
    id: '1',
    title: 'Document 1',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_m8p6Er8-TnnzyfBTzn6gmXvuHsqxxT8Dg&s',
    date: '2024-09-01',
    pdfUrl: Image.resolveAssetSource(lidlPdf).uri,
  },
  {
    id: '2',
    title: 'Document 2',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_m8p6Er8-TnnzyfBTzn6gmXvuHsqxxT8Dg&s',
    date: '2024-08-25',
    pdfUrl: Image.resolveAssetSource(elomasPdf).uri,
  },
  {
    id: '3',
    title: 'Document 3',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_m8p6Er8-TnnzyfBTzn6gmXvuHsqxxT8Dg&s',
    date: '2024-07-15',
    pdfUrl: 'https://example.com/pdf1.pdf',
  },
  {
    id: '4',
    title: 'Document 3',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_m8p6Er8-TnnzyfBTzn6gmXvuHsqxxT8Dg&s',
    date: '2024-07-15',
    pdfUrl: 'https://example.com/pdf1.pdf',
  },
  {
    id: '4',
    title: 'Document 3',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_m8p6Er8-TnnzyfBTzn6gmXvuHsqxxT8Dg&s',
    date: '2024-07-15',
    pdfUrl: 'https://example.com/pdf1.pdf',
  },
];

// Card component to display each PDF
const PdfCard = ({title, thumbnail, date, pdfUrl}) => {
  const navigation = useNavigation(); // Get navigation prop

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Offers', {pdfUrl})}>
      <View style={styles.card}>
        <Image source={{uri: thumbnail}} style={styles.thumbnail} />
        <View style={styles.cardText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Main component that renders the list
const Supermarket = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <PdfCard
          title={item.title}
          thumbnail={item.thumbnail}
          date={item.date}
          pdfUrl={item.pdfUrl} // Pass the PDF URL
        />
      )}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};

// Styles
const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'column',
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center',
    width: screenWidth / 2 - 30, // Ensure each card is equally sized
    alignSelf: 'flex-start', // Prevent the last card from stretching
  },
  thumbnail: {
    width: screenWidth / 2 - 50, // Thumbnail width relative to the card size
    height: (screenWidth / 2 - 50) * 1.4, // Maintain a 1:1.4 aspect ratio
    borderRadius: 4,
    marginBottom: 10,
  },
  cardText: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
});

export default Supermarket;
