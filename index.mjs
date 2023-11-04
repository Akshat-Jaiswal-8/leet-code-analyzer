const apiKey = process.env.OPENAI_API_KEY;
async function analyzeCodeWithGPT3(codeToAnalyze) {
    const prompt = `
    Analyze the following code and provide a comprehensive rating out of 5 based on the following criteria: algorithm efficiency, code comments, code readability, and code indentation. Additionally, please provide an improved version of the code with proper comments, indentation, and any necessary optimizations.

    Code to be analyzed:
    ${codeToAnalyze}

    Rating criteria:
    1. Algorithm Efficiency (1-5): Evaluate the efficiency of the algorithm.
    2. Code Comments (1-5): Assess the quality and completeness of comments in the code.
    3. Code Readability (1-5): Rate how easily the code can be understood.
    4. Code Indentation (1-5): Evaluate the consistency and correctness of code indentation.

    Improved Code:
    [Your improved code version with comments, indentation, and optimizations]

    Please provide detailed feedback for each of the criteria above and explain any changes made to the code. If you have any suggestions for optimizing the algorithm, please include those as well.

    Note: Please be as specific and informative as possible in your feedback and rating.
    `;

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt,
            max_tokens: 150  // You can adjust this value to control the response length
        })
    });

    const responseData = await response.json();
    return responseData.choices[0].text;
}

