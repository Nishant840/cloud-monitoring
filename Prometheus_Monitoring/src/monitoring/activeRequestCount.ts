import client from "prom-client"

const activeUserCounter = new client.Gauge({
    name: "active_user",
    help: "Total number of users whose request hasn't resolved yet",
    labelNames: ["method", "route"]
})

// @ts-ignore
export function activeUserCount(req, res, next){

    activeUserCounter.inc({
        method: req.method,
        route: req.route ? req.route.path : req.path
    });
    
    res.on("finish", ()=>{
        setTimeout(()=>{
            activeUserCounter.dec({
                method: req.method,
                route: req.route ? req.route.path : req.path
            })
        }, 10000)
    })

    next();
}