import AuthTextInput from "../components/AuthTextInput";
import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    Switch,
    Keyboard,
    KeyboardAvoidingView,
} from 'react-native';
import Colors from "../constants/Colors";
import ProgressBar from 'react-native-progress/Bar'
import RegistrationTextInput from "../components/RegistrationTextInput";

function RegistrationStep(headerTitle, fields) {
    this.headerTitle = headerTitle
    this.fields = fields
}

const registrationSteps = [
    new RegistrationStep('Tell us a bit about yourself', ['name', 'major', 'graduation_date']),
    new RegistrationStep('Let us know your top skills', ['skill #1', 'skill #2', 'skill #3']),
    new RegistrationStep('Tell us a about your job experiences', ['experience #1', 'experience #2', 'experience #3'])
]


const RegistrationStepWrapper = (props) => {
   return (
       <View>
        <Text style={styles.title}>{props.registrationStep.headerTitle}</Text>
        {props.registrationStep.fields.map((field, index) => {
            return (
                <RegistrationTextInput
                    key={index}
                    icon="ios-mail"
                    placeholder={field}
                    placeholderTextColor="white"
                    setValue={(value) => props.handleValues(value, field)}
                />
            )
        })}
    </View>
   )
}

export const RegistrationScreen = () => {
    const [ pageIndex, setPageIndex ] = useState({ currentPage: 0 })

    const [userAttributes, setUserAttributes] = useState({})

    const userAttributesHandler = (value, field) => {
        let obj = userAttributes
        obj[field] = value
        setUserAttributes(obj)
    }

    const onNextButtonPress = () => {
        let page = pageIndex.currentPage += 1
        setPageIndex({ currentPage: page })
    }

    const onPrevButtonPress = () => {
        if (pageIndex.currentPage !== 0) {
            let page = pageIndex.currentPage -= 1
            setPageIndex({ currentPage: page })
        } else {
            setPageIndex({ currentPage: 0 })
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}
        >
            <KeyboardAvoidingView style={styles.screen}>
                <View style={styles.signUpContainer}>
                <RegistrationStepWrapper registrationStep={registrationSteps[pageIndex.currentPage]} handleValues={userAttributesHandler} />
                    <View style={styles.navigationButtonContainer}>
                        <Button style={styles.navigationButton} title="Next" onPress={onNextButtonPress} disabled={pageIndex.currentPage == registrationSteps.length - 1} />
                    </View>

                    <View style={styles.navigationButtonContainer}>
                        <Button style={styles.navigationButton} title="Prev" onPress={onPrevButtonPress} disabled={pageIndex.currentPage == 0} />
                    </View>
                    <ProgressBar styles={styles.progressBar} size={30} progress={pageIndex.currentPage / 2} />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    progressBar: {
      paddingTop: 18
    },
    screen: {
        flex: 1,
        backgroundColor: Colors.teal,
        alignItems: 'center'
    },
    title: {
        top: 10,
        color: 'white',
        fontSize: 40,
        width: 'auto'
    },
    signUpContainer: {
        width: '80%',
        alignItems: 'center',
        top: '30%'
    },
    navigationButtonContainer: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 20
    },
    navigationButton: {
        flex: 1,
        width: '100%',
        color: 'white',
        fontSize: 18
    },
    textInputContainer: {
        alignContent: 'center',
        justifyContent: 'flex-start',
        marginBottom: 15
    },
    iconContainer: {
        marginRight: 20,
        marginBottom: 13,
        width: 20,
        alignItems: 'center'
    },
    textInput: {
        color: 'white',
        fontSize: 18,
        marginRight: 12
    },
    logInContainer: {
        flexDirection: 'row',
        top: '82%'
    },
    logInText: {
        color: 'white'
    },
    logInButton: {
        color: Colors.primary
    },
    studentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%'
    }
});
