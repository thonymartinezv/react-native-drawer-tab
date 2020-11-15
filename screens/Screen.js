import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from "@expo/vector-icons";
import ScreenTab from './ScreenTab'

const Tab = createBottomTabNavigator();

export default class Screen extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.screens);
    }


    render() {
        if (!this.props.screens) {
            return null
        }
        if (this.props.screens.length == 1) {
            var screen = this.props.screens[0]
            return (<ScreenTab
                name={screen.name}
                url={screen.url}
                navigationDrawer={this.props.navigation}
            />)
        }
        return (
            <Tab.Navigator>
                {this.props.screens.map((screen, index) => {
                    return (
                        <Tab.Screen
                            name={screen.name}
                            options={{ 
                                tabBarIcon:({color,size}) => <Feather name={screen.icon} size={size} color={color} />
                            }}
                            component={({ navigation }) => {
                                return (<ScreenTab
                                    name={screen.name}
                                    url={screen.url}
                                    navigationTab={navigation}
                                    navigationDrawer={this.props.navigation}
                                />)
                            }}
                        />)
                })}
            </Tab.Navigator>
        )
    }
}