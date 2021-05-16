import changeYear from './changeYear';
import changeLaunch from './changeLaunch';
import changeLand from './changeLand';

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    changeYear,
    changeLaunch,
    changeLand
})

export  default rootReducers 