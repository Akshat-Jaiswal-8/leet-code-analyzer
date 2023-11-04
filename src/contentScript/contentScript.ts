const leetcode_Api: string = "https://leetcode.com/api/submissions";

let main_code = null;
fetch(leetcode_Api)
    .then(async (res) => {
      const data = await res.json();
      const submissions = data.submissions_dump;
      console.log(submissions)
      for (const submission of submissions) {
        if (submission.status_display === "Accepted"){
          main_code = submission.code
          return;
        }
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });

//

