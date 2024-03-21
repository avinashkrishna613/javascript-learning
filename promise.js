const customFetch = () => {
    return new Promise((resolve, reject) => {
        const xMLHttpRequest = new XMLHttpRequest();
        xMLHttpRequest.open("GET", "http://localhost:4000", true);
        xMLHttpRequest.onload = (event) => {
            if (xMLHttpRequest.readyState == 4) {
                if ()
            }
        }
        xMLHttpRequest.send(null);
        if (x) {
            resolve(x);
        } else {
            reject();
        }
    })
}

console.log("before promise");



console.log("after promise");