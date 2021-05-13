import Auth from "./auth";

// A typescript trick to avoid warnings, taken from https://stackoverflow.com/questions/50402004/error-ts2554-expected-2-3-arguments-but-got-1
const ctx: Worker = self as any;

self.onmessage = async (event: MessageEvent) => {
    if (event.data[0] === "createToken") {
        const clientId = event.data[1]
        const auth = new Auth()
        const token = await auth.createToken(clientId);
        console.log({token})
        ctx.postMessage(token)
    }
}