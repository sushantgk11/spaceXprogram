const initialVal = "allYear";
const changeYear = (state=initialVal, action) =>
{
    switch (action.type) {
        case "2006": if(state!="2006")
                     {
                        return state = "2006";
                     }
                     else if (state=="2006")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2007": if(state!="2007")
                     {
                        return state = "2007";
                     }
                     else if (state=="2007")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2008": if(state!="2008")
                     {
                        return state = "2008";
                     }
                     else if (state=="2008")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2009": if(state!="2009")
                     {
                        return state = 2009;
                     }
                     else if (state=="2009")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2010": if(state!="2010")
                     {
                        return state = 2010;
                     }
                     else if (state=="2010")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2011": if(state!="2011")
                     {
                        return state = "2011";
                     }
                     else if (state=="2011")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2012": if(state!="2012")
                     {
                        return state = "2012";
                     }
                     else if (state=="2012")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2013": if(state!="2013")
                     {
                        return state = "2013";
                     }
                     else if (state=="2013")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2014": if(state!="2014")
                     {
                        return state = "2014";
                     }
                     else if (state=="2014")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2015": if(state!="2015")
                     {
                        return state = "2015";
                     }
                     else if (state=="2015")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2016": if(state!="2016")
                     {
                        return state = "2016";
                     }
                     else if (state=="2016")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2017": if(state!="2017")
                     {
                        return state = "2017";
                     }
                     else if (state=="2017")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2018": if(state!="2018")
                     {
                        return state = "2018";
                     }
                     else if (state=="2018")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2019": if(state!="2019")
                     {
                        return state = "2019";
                     }
                     else if (state=="2019")
                     {
                         return state = "allYear"
                     } 
        break;
        case "2020": if(state!="2020")
                     {
                        return state = "2020";
                     }
                     else if (state=="2020")
                     {
                         return state = "allYear"
                     } 
        break;
    
        default: return state;
        break;
    }
}

export default changeYear;