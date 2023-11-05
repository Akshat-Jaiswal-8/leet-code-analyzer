const leetcode_Api: string = "https://leetcode.com/api/submissions";

let main_code = null;
export const code = fetch (leetcode_Api)
    .then(async (res) => res.json())
    .then( res => {
        const submissions = res.submissions_dump;
            for (const submission of submissions) {
                if(submission.status_display === "Compile Error" || submission.status_display ==="Wrong Answer" || submission.status_display ==="Runtime Error") {
                    console.log(submission.code);
                    return -1;
                }
                if (submission.status_display === "Accepted"){
                    main_code = submission.code
                    break;
                }
            }
            return main_code;
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });



