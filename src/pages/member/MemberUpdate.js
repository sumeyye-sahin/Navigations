import React from "react";
import {View,Text,Button} from "react-native";

function MemberUpdate({navigation}){
    return(
        <View>
            <Text>
                hello MemberUpdate
            </Text>
            <Button title="ProfileEditScreen" onPress={()=>navigation.navigate("ProfileEditScreen")} />
        </View>
    );
}

export default MemberUpdate;