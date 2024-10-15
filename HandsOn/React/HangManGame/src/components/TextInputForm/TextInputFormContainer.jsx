import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){
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
            
        }

        return(
            <TextInputForm
                handleFormSubmit={handleFormSubmit}
                handleTextInputChange={handleTextInputChange}
                handleShowHideClick={handleShowHideClick}
            />

        );


}

export default TextInputFormContainer;