export default function SWDev() {
    let swDev = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swDev)
        .then((result) => {
            console.log(result)
        })
}
