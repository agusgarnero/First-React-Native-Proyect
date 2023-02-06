import React from "react"
import Constants from "expo-constants"
import RepositoryList from "./RepositoryList"
import {Text, View} from "react-native"

export default function Main() {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>
            <RepositoryList/>
        </View>
    )
}