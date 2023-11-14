import { StyleSheet } from "react-native"
import { COLORS, PADDING } from './../../outils/constantes'

const homeStyle = StyleSheet.create({
    // style du header
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontale,
        paddingVertical: PADDING.verticale,
        backgroundColor: 'white'
    },

    userImg:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    userName:{
        fontSize: 16,
    },

    //style de la flatlist
    listScrolle:{
         paddingHorizontal: PADDING.horizontale,
         paddingVertical: PADDING.verticale
    },

    itemsScrolle:{
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        marginRight: 15,
        elevation:2,
    },

    mainText:{
        fontWeight: 'bold',
        fontSize: 16,
    },

    subText:{
        marginTop: 10,
        fontSize: 17,
    },

    title:{
        paddingHorizontal:PADDING.horizontale,
        paddingVertical: PADDING.verticale
    },

    titleBold:{
        fontWeight: 'bold',
    },

    itemsSympto:{
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal:PADDING.horizontale,
        paddingVertical:PADDING.verticale,
        marginRight: 10
    },

    ItemImg:{
        with: 30,
        height: 30,
        marginRight: 5,
    },

    title_dr:{
        paddingHorizontal:PADDING.horizontale,
        paddingVertical: PADDING.verticale,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    lien:{
        color: COLORS.main
    },

    Drs:{
        paddingHorizontal:PADDING.horizontale,
    },

    doctorCard:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5,
        padding:10,
        paddingHorizontal: PADDING.horizontale,
        paddingVertical:PADDING.verticale,
        marginBottom: 20,
        borderRadius:15
    },

    doctorImg:{
        width: 80,
        height: 80,
        borderRadius: 80/1,
        marginRight: 15
    },

    // doctorInfo:{
    //     alignItems: 'center'
    // },

    doctorName:{
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 7
    },

    doctorSpe:{
        backgroundColor: COLORS.main,
        padding: 5,
        paddingHorizontal: PADDING.horizontale,
        borderRadius: 15,
        fontSize: 14,
        color: 'white'
    }

})

export default homeStyle 