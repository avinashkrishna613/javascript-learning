onmessage = (event) => {
    switch (event.data) {
        case "execute-script":
            fetch("http://127.0.0.1:80")
                .then(response => {
                    return postMessage("hello world")
                })
                .catch(error => {
                    return postMessage("error occured while fetching the data");
                })
            break;
        default:
            break;
    }
}