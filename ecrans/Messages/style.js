import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const messagesStyles = StyleSheet.create({
    msgContain:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 7,
        paddingLeft: 13,
    },

    msgImg:{
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginRight:15,
    },

    msgInfo:{
        flexDirection: 'column',
        flex: 1,
        padding: PADDING.horizontale,
    },

    root:{
        paddingVertical:PADDING.verticale,
        paddingHorizontal:PADDING.horizontale
    },

    dateName:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 5
    },

    name:{
        fontWeight: 'bold',
        marginRight: 5
    }
})

export default messagesStyles
