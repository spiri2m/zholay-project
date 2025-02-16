import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from "./qrCodeStyles";
const QrCode = () => {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [qrData, setQrData] = useState("");
    if (!permission) {
        return <View/>;
    }
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setQrData(data);
        alert(`QR Code Scanned: ${data}`);
    };

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} barcodeScannerSettings={{
                barcodeTypes: ["qr"],
            }}>

            </CameraView>
        </View>
    );

}
export default QrCode