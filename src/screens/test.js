import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import DocumentPicker, {
//    DirectoryPickerResponse,
//    DocumentPickerResponse,
//    isInProgress,
//    types,
} from 'react-native-document-picker';

const test = () => {
  const [singleFile, setSingleFile] = useState('');

  const selectOneFile = async () => {
    try {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });
        console.log('res: '+ )
    }
  }

    return(
     <View style={styles.container}>
          <Button
            title="open picker for single file selection"
            onPress={async () => {
              try {
                const pickerResult = await DocumentPicker.pickSingle({
                  presentationStyle: 'fullScreen',
                  copyTo: 'cachesDirectory',
                })
                setResult([pickerResult])
              } catch (e) {
                handleError(e)
              }
            }}
          />
          <Button
            title="open picker for multi file selection"
            onPress={() => {
              DocumentPicker.pickMultiple().then(setResult).catch(handleError)
            }}
          />
          <Button
            title="open picker for multi selection of word files"
            onPress={() => {
              DocumentPicker.pick({
                allowMultiSelection: true,
                type: [types.doc, types.docx],
              })
                .then(setResult)
                .catch(handleError)
            }}
          />
          <Button
            title="open picker for single selection of pdf file"
            onPress={() => {
              DocumentPicker.pick({
                type: types.pdf,
              })
                .then(setResult)
                .catch(handleError)
            }}
          />
          <Button
            title="releaseSecureAccess"
            onPress={() => {
              DocumentPicker.releaseSecureAccess([])
                .then(() => {
                  console.warn('releaseSecureAccess: success')
                })
                .catch(handleError)
            }}
          />
          <Button
            title="open directory picker"
            onPress={() => {
              DocumentPicker.pickDirectory().then(setResult).catch(handleError)
            }}
          />

          <Text selectable>Result: {JSON.stringify(result, null, 2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
})

export default test;