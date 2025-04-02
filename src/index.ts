import {app} from "./app";
import {Settings} from "./settings";
import {emailRoute} from "./emailServer/route/emailRoute";

app.listen(Settings.PORT, async () => {
    console.log(`Example app listening on port ${Settings.PORT}`)
})

