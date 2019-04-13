import { combineReducers } from 'redux';
import { CLASSROOMS_AVAILABLE, ADD_CLASSROOM, UPDATE_CLASSROOM, DELETE_CLASSROOM } from '../actions/';  // Import the actions types constant we defined in our actions


let dataState = { classrooms: [], loading: true };


const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case ADD_CLASSROOM: {
            let classrooms = cloneObject(state.classrooms);  // clone the current state
            classrooms.unshift(action.classroom);  // add the new classroom to the top
            state = Object.assign({}, state, { classrooms: classrooms});
            return state;
        }

        case CLASSROOMS_AVAILABLE:
            state = Object.assign({}, state, { classrooms: action.classrooms, loading: false });
            return state;

        case UPDATE_CLASSROOM:{
            let classroom = action.classroom;
            let classrooms = cloneObject(state.classrooms);  // clone the current state
            let index = getIndex(classrooms, classroom.id);  // find the index of the classroom with the classroom id passed
            if (index !== -1) {
                classrooms[index]['author'] = classroom.author;
                classrooms[index]['text'] = classroom.text;
            }
            state = Object.assign({}, state, { classrooms: classrooms});
            return state;
        }

        case DELETE_CLASSROOM: {
            let classrooms = cloneObject(state.classrooms);  // clone the current state
            let index = getIndex(classrooms, action.id);  // find the index of the classroom with the id passed
            if (index !== -1) classrooms.splice(index, 1);  // if yes, undo, remove the CLASSROOM
            state = Object.assign({}, state, { classrooms: classrooms});
            return state;
        }

        default:
            return state;
    }
};


function cloneObject(object) {
    return JSON.parse(JSON.stringify(object));
}


function getIndex(data, id) {
    let clone = JSON.parse(JSON.stringify(data));
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}


const rootReducer = combineReducers({
    dataReducer
})


export default rootReducer;
