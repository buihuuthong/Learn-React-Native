import React from 'react'
import { View, Text } from 'react-native'

const TextProps = ({ value }) => {
    return(
        <Text style={{ fontWeight: 'bold'}}>{value}</Text>
    )
}

export default TextProps;