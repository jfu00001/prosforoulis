import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';

const PdfViewer = ({route}) => {
  const {pdfUrl} = route.params; // Get the PDF URL from the navigation params

  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={{uri: pdfUrl, cache: true}} // Load PDF from the URL
        style={styles.pdf}
        onError={error => {
          console.log(error);
        }}
      />
    </View>
  );
};

// Styles for the PDF viewer
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default PdfViewer;
