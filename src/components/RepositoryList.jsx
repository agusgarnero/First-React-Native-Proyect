import React from "react"
import {Text, FlatList} from "react-native"
import repositories from "../data/repositories"
import RepositoryItem from "./RepositoryItem.jsx"

export default function RepositoryList() {
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent = {() => <Text></Text>}  // Hay mejores formas de hacerlo
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo}/>
            )}
        />
        
    )
}