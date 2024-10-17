import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){
        const [inputType, setInputType]=useState("password");
        function handleFormSubmit(event){
            event.preventDefault();
            console.log("Form Submitted");
    
        }
        function handleTextInputChange(event){
            console.log("Text Input Change");
            console.log(event.target.value);
    
        }

        function handleShowHideClick(){
            console.log("Show / Hide Button Click");
            if(inputType=="password"){
                setInputType("text");
            }
            else{
                setInputType("password");
            }    
        }

        return(
            <TextInputForm
                inputType={inputType}
                handleFormSubmit={handleFormSubmit}
                handleTextInputChange={handleTextInputChange}
                handleShowHideClick={handleShowHideClick}
            />
        );
}

export default TextInputFormContainer;