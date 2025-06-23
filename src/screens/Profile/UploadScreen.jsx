import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadScreen() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Upload Content</Text>
      <TouchableOpacity onPress={pickImage} style={{ marginBottom: 20 }}>
        <Text>Pick an image or video from camera roll</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginBottom: 20 }} />}
      <TextInput
        placeholder="Write a caption..."
        onChangeText={text => setCaption(text)}
        value={caption}
        style={{ width: '80%', padding: 10, borderWidth: 1, borderColor: 'gray', marginBottom: 20 }}
      />
      <TouchableOpacity
        style={{ backgroundColor: '#F5A623', padding: 15, borderRadius: 5 }}
        onPress={() => {
          // Handle upload logic here
          console.log('Uploading:', { image, caption });
        }}
      >
        <Text style={{ color: 'white' }}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
}