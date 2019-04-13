export const CLASSROOMS_AVAILABLE = 'CLASSROOMS_AVAILABLE';
export const ADD_CLASSROOM = 'ADD_CLASSROOM';
export const UPDATE_CLASSROOM = 'UPDATE_CLASSROOM';
export const DELETE_CLASSROOM = 'DELETE_CLASSROOM';

import {AsyncStorage} from 'react-native';


// Add Classroom - CREATE (C)
export function addClassroom(classroom){
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, classrooms) => {
            if (classrooms !== null){
                classrooms = JSON.parse(classrooms);
                classrooms.unshift(classroom); //add the new classroom to the top
                AsyncStorage.setItem('data', JSON.stringify(classrooms), () => {
                    dispatch({type: ADD_CLASSROOM, classroom:classroom});
                });
            }
        });
    };
}

// Get Data - READ (R)
export function getClassrooms(){
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, classrooms) => {
            if (classrooms !== null){
                dispatch({type: CLASSROOMS_AVAILABLE, classrooms:JSON.parse(classrooms)});
            }
        });
    };
}

// Update Classroom - UPDATE (U)
export function updateClassroom(classroom){
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, classrooms) => {
            if (classrooms !== null){
                classrooms = JSON.parse(classrooms);
                var index = getIndex(classrooms, classroom.id); //find the index of the classroom with the id passed
                if (index !== -1) {
                    classrooms[index]['author'] = classroom.author;
                    classrooms[index]['classroom'] = classroom.classroom;
                }
                AsyncStorage.setItem('data', JSON.stringify(classrooms), () => {
                    dispatch({type: UPDATE_CLASSROOM, classroom:classroom});
                });
            }
        });
    };
}

// Delete Classroom - DELETE (D)
export function deleteClassroom(id){
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, classrooms) => {
            if (classrooms !== null){
                classrooms = JSON.parse(classrooms);

                var index = getIndex(classrooms, id); //find the index of the classroom with the id passed
                if(index !== -1) classrooms.splice(index, 1);//if yes, undo, remove the CLASSROOM
                AsyncStorage.setItem('data', JSON.stringify(classrooms), () => {
                    dispatch({type: DELETE_CLASSROOM, id:id});
                });
            }
        });
    };
}

function getIndex(data, id){
    let clone = JSON.parse(JSON.stringify(data));
    return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}
