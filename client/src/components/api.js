/* global fetch */
/* global Headers */
export async function fetchURL(APIURL) {
    return fetch(APIURL)
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = { errorMessage: data.message };
                        throw err;
                    })
                }
                else {
                    let err = { errorMessage: 'Please try again later, server is not responding' };
                    throw err;
                }
            }
            return resp.json();
        })
}
export async function deleteUser(user_id) {
    const deleteURL = "https://webdevbootcamp-mazenoncloud9.c9users.io:8080/restfulrouting/" + user_id + "/distroy";
    return fetch(deleteURL, {
            method: 'post'
        })
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = { errorMessage: data.message };
                        throw err;
                    })
                }
                else {
                    let err = { errorMessage: 'Please try again later, server is not responding' };
                    throw err;
                }
            }
            return resp.json();
        })
}

export async function createUser(val) {
    var APIURL;
    if (!val._id) {
        APIURL = "https://webdevbootcamp-mazenoncloud9.c9users.io:8080/RestFulRouting"
    }
    else {
        APIURL = "https://webdevbootcamp-mazenoncloud9.c9users.io:8080/restfulrouting/" + val._id + "/edit"
    }

    return fetch(APIURL, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),

            body: JSON.stringify(val)
        })
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = { errorMessage: data.message };
                        throw err;
                    })
                }
                else {
                    let err = { errorMessage: 'Please try again later, server is not responding' };
                    throw err;
                }
            }
            return resp.json();
        })
}
