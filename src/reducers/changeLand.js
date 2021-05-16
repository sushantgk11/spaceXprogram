const initialVal = "allLand";
const changeLand = (state=initialVal, action) => {

    switch (action.type) {
        case "LANDTRUE": if(state!="true")
                           {
                                return state = "true";
                           }
                           else if (state=="true")
                           {
                               return state = "allLand"
                           } 
        break;
        case "LANDFALSE": if(state!="false")
                           {
                                return state = "false";
                           }
                           else if (state=="false")
                           {
                               return state = "allLand"
                           } 
        break;
        default: return state
        break;
    }
}

export default changeLand ;