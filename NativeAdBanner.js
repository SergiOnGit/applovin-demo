import React, { useRef } from 'react';
import {
    View,
} from 'react-native';
import AppLovinMAX from "react-native-applovin-max";

export const NativeAdBanner = () => {
    const nativeAdViewRef = useRef();

    return (
        <AppLovinMAX.NativeAdView
            adUnitId={'Native ad code here'}
            ref={nativeAdViewRef}
            onAdLoaded={(adInfo) => {
                console.log('Native ad loaded from ' + adInfo.networkName);
            }}
            onAdLoadFailed={(errorInfo) => {
                console.log('Native ad failed to load with error code ' + errorInfo.code + ' and message: ' + errorInfo.message);
            }}
            onAdClicked={(adInfo) => {
                console.log('Native ad clicked');
            }}
            onAdRevenuePaid={(adInfo) => {
                console.log('Native ad revenue paid: ' + adInfo.revenue);
            }}
        >
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                    <AppLovinMAX.NativeAdView.IconView style={{
                        width: 50,
                        height: 50,
                    }}/>
                    <View style={{flexDirection: 'column', flexGrow: 1}}>
                        <AppLovinMAX.NativeAdView.TitleView style={{}}/>
                        <AppLovinMAX.NativeAdView.AdvertiserView style={{}}/>
                    </View>
                    <AppLovinMAX.NativeAdView.OptionsView style={{}}/>
                </View>
                <AppLovinMAX.NativeAdView.BodyView style={{}}/>
                {/* <AppLovinMAX.NativeAdView.MediaView style={{}}/> */}
                <AppLovinMAX.NativeAdView.CallToActionView style={{}}/>
            </View>
        </AppLovinMAX.NativeAdView>
    );
};