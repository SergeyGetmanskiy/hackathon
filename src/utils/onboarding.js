const baseUrl = 'http://62.84.123.59/api/v1';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MjM1ODY5LCJpYXQiOjE3MDIyMzU4NjksImp0aSI6ImVjNGM2MTEyYmFmNDRjZGQ5ODgyYzhlYjA5NzZmODU2IiwidXNlcl9pZCI6MX0.gSwQjS8Tnx4QSTp4Odyu5_mFntnumOsjFAeMOuNyM0A';


function getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`)
};

export function getIdOfCurrentLevelUser(currentLevel) {
    return fetch(`${baseUrl}/levels/?name=Дизайнер&level_name=${currentLevel}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => {
            return getResponseData(res);
        })
}; 

export function getInitialSkillsUser(dataOfCurrentSpecialization) {
    return fetch(`${baseUrl}/skills/?specialization=${dataOfCurrentSpecialization}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => {
            return getResponseData(res);
        })
};

export function getIdOfGoalLevelUser(goalLevel) {
    return fetch(`${baseUrl}/levels/?name=Дизайнер&level_name=${goalLevel}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => {
            return getResponseData(res);
        })
};

export function getGoalSkillsUser(dataOfGoalSpecialization) {
    return fetch(`${baseUrl}/skills/?specialization=${dataOfGoalSpecialization}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => {
            return getResponseData(res);
        })
};

export function createNewUser(dataOfUser) {
    return fetch(`${baseUrl}/profile`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            current_specialization: dataOfUser.currentSpecialization,
            skills: {
                done: dataOfUser.done,
                start: dataOfUser.start,
            },
            goal_specialization: dataOfUser.goalSpecialization
        }),
    })
        .then(res => {
            return getResponseData(res);
        })
};