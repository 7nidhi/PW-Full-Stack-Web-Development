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

        return(
            <TextInputForm
                handleFormSubmit={handleFormSubmit}
                handleTextInputChange={handleTextInputChange}
            />

        );


}

export default TextInputFormContainer;