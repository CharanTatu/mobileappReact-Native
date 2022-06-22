import React, { Component, Fragment } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
    TouchableOpacity,
    Text,
    StatusBar,
    Linking,
    View,
    Button,
} from 'react-native';


class QrScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scan: false,
            ScanResult: false,
            result: null
        };
    }

    onSuccess = (e) => {
        const check = e.data.substring(0, 4);
        console.log('scanned data' + check);
        this.setState({
            result: e,
            scan: false,
            ScanResult: true
        })
        if (check === 'http') {
            Linking
                .openURL(e.data)
                .catch(err => console.error('An error occured', err));


        } else {
            this.setState({
                result: e,
                scan: false,
                ScanResult: true
            })
        }

    }

    activeQR = () => {
        this.setState({
            scan: true
        })
    }
    scanAgain = () => {
        this.setState({
            scan: true,
            ScanResult: false
        })
    }
    render() {
        const { scan, ScanResult, result } = this.state
        const desccription = 'Testing For QR Code'
        return (
            <View >
                <Fragment>
                    <StatusBar barStyle="dark-content" />
                    <Text style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 130 }}> QR Code Scanner !</Text>
                    {!scan && !ScanResult &&
                        <View >
                            <Text numberOfLines={8} >{desccription}</Text>

                            <Button title='Click to Scan!' onPress={this.activeQR} color="mediumspringgreen" >
                            </Button>

                        </View>
                    }

                    {ScanResult &&
                        <Fragment>
                            <Text >Result !</Text>
                            <View style={ScanResult}>
                                <Text>Type : {result.type}</Text>
                                <Text>Result : {result.data}</Text>
                                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                <Button title='Click to Scan again!' onPress={this.scanAgain} color="mediumspringgreen">
                                </Button>

                            </View>
                        </Fragment>
                    }


                    {scan &&
                        <QRCodeScanner
                            reactivate={true}
                            showMarker={true}
                            ref={(node) => { this.scanner = node }}
                            onRead={this.onSuccess}
                            topContent={
                                <Text >
                                    Go to <Text >wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code to test.</Text>
                            }
                            bottomContent={
                                <View>
                                    <TouchableOpacity onPress={() => this.scanner.reactivate()}>
                                        <Text >OK. Got it!</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => this.setState({ scan: false })}>
                                        <Text >Stop Scan</Text>
                                    </TouchableOpacity>
                                </View>

                            }
                        />
                    }
                </Fragment>
            </View>
        );
    }
}



export default QrScanner;