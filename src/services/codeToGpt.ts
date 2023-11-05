import OpenAI from "openai";
const apiKey = "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"

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

    Please provide detailed feedback for each of the criteria above and explain any changes made to the code. If you have any suggestions for optimizing the algorithm, please include those as well.
    You can take below code as reference for checking the quality of code. (Only look for the quality of code for checking the quality. Program algo may not be the same)..

"""
This program implements a linear search algorithm.
The linear search algorithm is a simple algorithm that searches for a given value in a list of values. The algorithm works by comparing the given value to each value in the list, from left to right. If the given value is equal to a value in the list, the algorithm returns the index of that value in the list. Otherwise, the algorithm returns -1.

Args:
    list_values (list): The list of values to search.
    value (object): The value to search for.

Returns:
    int: The index of the value in the list, or -1 if the value is not found.
"""
def linear_search(list_values, value):
    """
    This function implements a linear search algorithm.

    Args:
        list_values (list): The list of values to search.
    value (object): The value to search for.
Returns:
        int: The index of the value in the list, or -1 if the value is not found.
    """

def linear_search(list_values, value):
    """
    This function implements a linear search algorithm.

    Args:
        list_values (list): The list of values to search.
        value (object): The value to search for.

    Returns:
        int: The index of the value in the list, or -1 if the value is not found.
    """

    # Check if the list is empty.
    if not list_values:
        return -1

    # Iterate over the list and compare each value to the given value.
    for index, value in enumerate(list_values):
             if value == value:
            return index
 # The value was not found in the list.
    return -1
    `;

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: message }, {
            role: "system",
            content: "Your are a strict assistant which provides the ratings for the code."
        }],
        model: "gpt-3.5-turbo",
    });
    return (chatCompletion.choices[0].message.content)
}








