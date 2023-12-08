const baseUrl = 'http://localhost:8000/api/v1';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyMDQ0OTI1LCJpYXQiOjE3MDIwMzg5MjUsImp0aSI6IjUxYTgxYmNjOTg1ZjRmODBhNGViNmRkNzM5NWRhNDgxIiwidXNlcl9pZCI6MX0.8CAJjtwIf2-1NZStyPpzitIsGLRrc8_q_bdzTr3k7gg';


function getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`)
};

export function dashboard() {
    return fetch(`${baseUrl}/dashboard`, {
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

export function addInitialLevelUser(initialLevel) {
    return fetch(`${baseUrl}/level`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            level: initialLevel.level,
        }),
    })
        .then(res => {
            return getResponseData(res);
        })
};

export function getInitialSkillsUser() {
    return fetch(`${baseUrl}/skills/`, {
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

export function addInitialSkillsUser(initialSkills) {
    return fetch(`${baseUrl}/skills`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            skills: initialSkills.id,
            status: "end"
        }),
    })
        .then(res => {
            return getResponseData(res);
        })
};

export function addGoalLevelUser(goalLevel) {
    return fetch(`${baseUrl}/user`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            level: goalLevel.level,
        }),
    })
        .then(res => {
            return getResponseData(res);
        })
};

export function getGoalSkillsUser() {
    return fetch(`${baseUrl}/skills`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => {
            return getResponseData(res);
        }) 
};

export function addGoalSkillsUser(goalSkills) {
    return fetch(`${baseUrl}/skills`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            skills: goalSkills.skills,
            status: "start" 
        }),
    })
        .then(res => {
            return getResponseData(res);
        })
};