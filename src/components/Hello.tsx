// components/Hello.tsx
import React from 'react';
import { Text, View } from 'react-native';

export interface Props { name: string, level?: string }
interface State { level: Number }

export class HelloApp extends React.Component<Props, State> {

    public publicProperty: Number; // Define with Type Number

    constructor(props: Props) {
        super(props);
        this.publicProperty = 1000; // It Should work as 1000 is a Number

        this.publicProperty = "HUNDRED"; // It should generate error as "HUNDRED" is a String and the required type was Number

        this.state = { level: 1 }; // It Should also work as 1 is again a Number
        // this.state = { level: "10" }; // It Should also work as "10" is again a String
    }

    render() {
        return (
            <View>
                <Text style={{marginTop: 30, textAlign: 'center'}}>Hello World!</Text>
            </View>
        );
    }
}