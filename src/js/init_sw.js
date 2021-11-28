let newWorker

export function postSkipWaiting() {
    if (newWorker) {
        newWorker.postMessage({ "action": "skipWaiting" })
    }
}




export function register_sw() {

    if (!navigator.serviceWorker) return
    navigator.serviceWorker.addEventListener(
        "controllerchange",
        () => {
            window.location.reload()
        }
    )

    navigator.serviceWorker.register(
        './service_worker.js',
        { scope: '.', updateViaCache: "none" }
    )
        .then((registraion) => {
            registraion.addEventListener("updatefound", () => {
                console.log("update found")
                newWorker = registraion.installing
                newWorker.addEventListener(
                    "statechange", () => {
                        console.log(newWorker.state)
                        switch (newWorker.state) {
                            case "installed":
                                console.log("new worker installed ")
                                if (navigator.serviceWorker.controller) {
                                    let notification = document.querySelector("#update_notification")
                                    notification.classList.remove("inactive")
                                }
                                break;
                            default:
                                break;
                        }
                    }
                )
            })

            //return registraion.update();
        })
        .then(function (registration) {
            console.log("serviceWorker registed.");
        })
        .catch(function (error) {
            console.warn("serviceWorker error.", error);
        });

};
