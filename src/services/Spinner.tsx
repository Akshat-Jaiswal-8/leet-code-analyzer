import React from 'react';
export const Spinner = () => {
    return (
        <div role="status" className="flex flex-col items-center mt-[10vh] mx-auto">
            <span style={{fontSize : "20px" , textAlign : "center"}}>Loading....</span>
        </div>
    );
};

