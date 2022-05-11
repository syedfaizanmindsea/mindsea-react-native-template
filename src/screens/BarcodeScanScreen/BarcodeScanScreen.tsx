import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {
  FC, // useRef,
} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { RouteParams } from 'src/navigation/routeParams';
import { ROUTES } from 'src/navigation/routes';

import styles from './BarcodeScanScreen.styles';

type BarcodeScanScreenProps = NativeStackScreenProps<
  RouteParams,
  ROUTES.BarcodeScan
>;

export const BarcodeScanScreen: FC<BarcodeScanScreenProps> = () => {
  const onSuccess = (e) => {
    console.log(e);
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      reactivate={true}
      reactivateTimeout={2000}
      containerStyle={styles.container}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
          on your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  );
};
