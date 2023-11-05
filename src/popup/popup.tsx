import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import {analyzeCode} from "../services/codeToGpt";
import {Spinner} from "../services/Spinner"
const code = `import java.util.Arrays;
   
   class Main {
   
     // perform the bubble sort
     static void bubbleSort(int array[]) {
       int size = array.length;
       
       // loop to access each array element
       for (int i = 0; i < size - 1; i++)
       
         // loop to compare array elements
         for (int j = 0; j < size - i - 1; j++)
   
           // compare two adjacent elements
           // change > to < to sort in descending order
           if (array[j] > array[j + 1]) {
   
             // swapping occurs if elements
             // are not in the intended order
             int temp = array[j];
             array[j] = array[j + 1];
             array[j + 1] = temp;
           }
     }
   
     public static void main(String args[]) {
         
       int[] data = { -2, 45, 0, 11, -9 };
       
       // call method using class name
       Main.bubbleSort(data);
       
       System.out.println("Sorted Array in Ascending Order:");
       System.out.println(Arrays.toString(data));`

const App: React.FC<{}> =  () => {

//     let data = `Rating for the code based on the given criteria:
//
// 1. Algorithm Efficiency (1-5): 4
// The bubble sort algorithm used in the code has a time complexity of O(n^2), which is considered relatively inefficient compared to other sorting algorithms. However, it is suitable for small datasets like the one used in this code.
//
// 2. Code Comments (1-5): 2
// The code has comments explaining the purpose of the bubbleSort() method and the purpose of the if statement inside the nested loops. However, there are no comments explaining the purpose of other sections of the code or providing any additional context.
//
// 3. Code Readability (1-5): 3
// The code is relatively easy to understand due to its simplicity. The variable names are meaningful, and the logic is straightforward. However, without comments, it might be difficult for someone unfamiliar with the algorithm to fully understand the code's intention.
//
// 4. Code Indentation (1-5): 3
// The code has indentation to indicate nested blocks, but it is inconsistent. Some lines are indented with multiple spaces, while others are indented with a single space. Consistent indentation improves code readability and should be addressed.
//
// Improved Code:
//
// import java.util.Arrays;
//
// class Main {
//
//   /**
//    * Sorts an array in ascending order using the bubble sort algorithm.
//    *
//    * @param array The array to be sorted.
//    */
//   static void bubbleSort(int array[]) {
//   int size = array.length;
//
// // Loop to access each array element
// for (int i = 0; i < size - 1; i++) {
//
// // Loop to compare array elements
// for (int j = 0; j < size - i - 1; j++) {
//
// // Compare two adjacent elements
// // Change > to < to sort in descending order
// if (array[j] > array[j + 1]) {
//
// // Swapping occurs if elements
// // are not in the intended order
// int temp = array[j];
//   array[j] = array[j + 1];
//   array[j + 1] = temp;
// }
// }
// }
// }
//
//   public static void main(String args[]) {
//
//   int[] data = { -2, 45, 0, 11, -9 };
//
// // Call the bubbleSort() method using class name
// Main.bubbleSort(data);
//
//   System.out.println("Sorted Array in Ascending Order:");
//   System.out.println(Arrays.toString(data));
// }
// }
//
// Explanation of Changes:
// 1. Added a comment above the bubbleSort() method to explain its purpose.
// 2. Added javadoc-style comments above the method to provide a description that can be used by IDEs or documentation generators.
// 3. Added comments inside the nested loops to clarify their purpose.
// 4. Fixed the inconsistent indentation by using a consistent four-space indentation for all blocks.
// 5. Added a newline after each block to improve readability.
// 6. Changed the comment above the "swapping occurs" section to be more descriptive.
//
//                                                    Optimizations:
//                                                    The bubble sort algorithm itself is not very efficient, and there are no additional optimizations that can be made without changing the algorithm. If you need a more efficient sorting algorithm, consider using algorithms like merge sort, quicksort, or heapsort, which have better time complexity.
// `
    const [data , setData] = useState("");
    async function fetchGpt() {
        const data = await analyzeCode(code);
        setData(data);
    }
    // @ts-ignore
    useEffect(() => fetchGpt(),[])

  return (
    <>
      <div className="main">
        Leet <span className="main-span">Code-Analyzer</span>
      </div>
      <div className="main-input-box">
          {data && <pre className="main-data" >{data}</pre>}
          {!data && <div className="loader"></div>
          }
      </div>
    </>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
