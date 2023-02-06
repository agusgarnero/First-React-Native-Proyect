import React from "react"
import { Text, View, StyleSheet } from "react-native"
import StyledText from "./StyledText.jsx"
export default function RepositoryItem (props) {
    return (
        <View key = {props.id} style={styles.container}>
            <StyledText fontSize = "subheading" fontWeight={"bold"}>fullName: {props.fullName}</StyledText>
            <StyledText >description: {props.description}</StyledText>
            <StyledText >language: {props.language}</StyledText>
            <StyledText >stargazersCount: {props.stargazersCount}</StyledText>
            <StyledText >forks: {props.forksCount}</StyledText>
            <StyledText >reviewCount: {props.reviewCount}</StyledText>
            <StyledText >ratingAverage: {props.ratingAverage}</StyledText>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 5,
        paddingBottom: 5
    }, 
})