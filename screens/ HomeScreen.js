import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from "react-native";
import tw from "tailwind-react-native-classnames/dist";
import {Image} from "react-native";
import NavOptions from "../components/NavOptions";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_APIKEY} from "@env";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height: 100, resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where From?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    onPress={(data, details = null) => {
                        console.log(data)
                        console.log(details)
                    }}
                    onFail={(error)=>{
                        console.log(error)
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    query={{
                        key: 'AIzaSyAkGDdM-Ql1t1RjiUj0KeRIssFlxKfg8OM',
                        language: "en"
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />

                <NavOptions/>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    AndroidSafeArea: {
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: "aliceblue",
        height: "100%"
    }
});