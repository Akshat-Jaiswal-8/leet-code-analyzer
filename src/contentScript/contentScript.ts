import { code } from "../services/api";
import { analyzeCode } from "../services/codeToGpt";


(async () => {
    try{
    const main_code = await code;
    console.log(main_code)
    console.log("before completion")
    const data = await
        analyzeCode(main_code);
    console.log("after completion")
    console.log(data)
    }
        catch (e) {
        console.log(e)
    }
})();
