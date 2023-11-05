import {code} from "../services/api";
import {analyzeCode} from "../services/codeToGpt";

(async () => {
    const mainCode = await code;
    console.log(mainCode)
    await analyzeCode(mainCode);
})();
