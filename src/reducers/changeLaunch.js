const initialVal = "allLaunch";
const changeLaunch = (state=initialVal, action) => {

    switch (action.type) {
        case "LAUNCHTRUE": if(state!="true")
                           {
                                return state = "true";
                           }
                           else if (state=="true")
                           {
                               return state = "allLaunch"
                           } 
        break;
        case "LAUNCHFALSE": if(state!="false")
                           {
                                return state = "false";
                           }
                           else if (state=="false")
                           {
                               return state = "allLaunch"
                           } 
        break;
        default: return state
        break;
    }
}
export default changeLaunch ;