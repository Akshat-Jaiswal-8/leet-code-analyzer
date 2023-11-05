import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import {analyzeCode} from "../services/codeToGpt";
import {code} from "../services/api";
// const code = `import java.util.Arrays;
//
//    class Main {
//
//      // perform the bubble sort
//      static void bubbleSort(int array[]) {
//        int size = array.length;
//
//        // loop to access each array element
//        for (int i = 0; i < size - 1; i++)
//
//          // loop to compare array elements
//          for (int j = 0; j < size - i - 1; j++)
//
//            // compare two adjacent elements
//            // change > to < to sort in descending order
//            if (array[j] > array[j + 1]) {
//
//              // swapping occurs if elements
//              // are not in the intended order
//              int temp = array[j];
//              array[j] = array[j + 1];
//              array[j + 1] = temp;
//            }
//      }
//
//      public static void main(String args[]) {
//
//        int[] data = { -2, 45, 0, 11, -9 };
//
//        // call method using class name
//        Main.bubbleSort(data);
//
//        System.out.println("Sorted Array in Ascending Order:");
//        System.out.println(Arrays.toString(data));`

const App: React.FC<{}> =  () => {

    const [data , setData] = useState("");
    async function fetchGpt() {
       const finalCode = await code;
        console.log(finalCode)
        if(finalCode === -1) setData("Incorrect Code!!");
        else {
        const data = await analyzeCode(code)
        setData(data);
        }

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
