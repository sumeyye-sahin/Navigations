import React from "react";
import {View,Text, Button} from "react-native";

function MemberDetail({navigation}){
    return(
        <View>
            <Text>
                hello MemberDetail
            </Text>
            <Button title="Update" onPress={()=>navigation.navigate("MemberUpdateScreen")} />
        </View>
    );
}

export default MemberDetail;