import OpenAI from "openai";

const apiKey = "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";
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });


export async function analyzeCode(codeToAnalyze) {
    const message = `Analyze the following code and provide a comprehensive rating out of 5 based on the following criteria: algorithm efficiency, code comments, code readability, and code indentation. Additionally, please provide an improved version of the code with proper comments, indentation, and any necessary optimizations.
    
    Code to be analyzed:
    ${codeToAnalyze}

    Rating criteria:
    1. Algorithm Efficiency (1-5): Evaluate the efficiency of the algorithm.
    2. Code Comments (1-5): Assess the quality and completeness of comments in the code.
    3. Code Readability (1-5): Rate how easily the code can be understood.
    4. Code Indentation (1-5): Evaluate the consistency and correctness of code indentation.

    Improved Code:
    [Your improved code version with comments, indentation, and optimizations]

    Please provide detailed feedback for each of the criteria above and explain any changes made to the code. If you have any suggestions for optimizing the algorithm, please include those as well.`;

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: message }, {
            role: "system",
            content: "Your are a strict assistant which provides the ratings for the code."
        }],
        model: "gpt-3.5-turbo",
    });
    return (chatCompletion.choices[0].message.content)
}








