import * as actions from '../constants/Canvas'

import {initialState} from '../stores/Canvas'

export default function Canvas(state = initialState, action) {
    switch (action.type) {
        case actions.SET_DIRECTION : {
            return {
                ...state,
                direction: action.payload
            };
        } break;
        case actions.SET_POSITION : {
            return {
                ...state,
                xPosition: action.payload.xPosition,
                yPosition: action.payload.yPosition
            };
        } break;
        case actions.RESIZED_WINDOW : {
            return {
                ...state,
                window : {
                    width: action.payload.width,
                    height: action.payload.height
                },
                canvas : {
                    width: action.payload.width - state.xPosition,
                    height: action.payload.height - state.yPosition
                }
            };
        } break;
        case actions.SET_URL : {
            return {
                ...state,
                url: action.payload
            };
        } break;
        case actions.FOCUS_TO_ELEMENT : {
            return {
                ...state,
                element: action.payload
            };
        } break;
        default:
            return state
    }
}