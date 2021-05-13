import Auth from "./auth";
// import workerPath from "file-loader?name=[name].js!./ably.worker";

const clientId = "a random client id";

const main = () => {
    // This works.
    (async () => {
        const auth = new Auth()
        const token = await auth.createToken("a random client id");
        console.log({token})
        console.log("That was the token created in the browser.")
        return token
    })()

// Set up button
    const workerBtn = document.getElementById('runWebWorker')
    console.log({workerBtn})
    if (workerBtn) {
        workerBtn.addEventListener('click', () => {
            // console.log(`Loading worker file from...`)
            const workerPath = "./dist/ably.worker.js"
            console.log({workerPath})
            const worker = new Worker(workerPath);

            // Listen for a response, for later
            worker.onmessage = (messageEvent) => {
                const token = messageEvent.data
                console.log(`Received token back...`)
                console.log({token})
                console.log("That was the token created in the web worker.")
            }

            worker.postMessage(["createToken", clientId])

        })
    }
}

window.onload = () => {
    main()
}