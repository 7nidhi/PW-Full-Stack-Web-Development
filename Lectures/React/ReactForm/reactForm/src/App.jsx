import { useForm} from "react-hook-form"
import './App.css'

function App() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
function onSubmit(data){
  console.log("Submitting the form,",data);
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
         className={errors.firstName ?'input-error':""}
        {...register("firstName",
          { 
          required: true, 
          minLength:{value:3,message:'Min lenght should be atleast 3'},
          maxLength:20,
          }
          )}/>
          {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
        
      </div>
      <div>
        <label>Middle Name:</label>
        <input {...register("middleName",{ required: true, maxLength: 20,minLength:3 })}/>
      </div>
      <div>
        <label>Last Name:</label>
        <input {...register("lastName", 
        { pattern:{
          value:/^[A-Za-z]+$/i, 
          message:"Last name is not as per rule",
        } })}/>
        {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
      </div>
      <input type='submit'/>
    </form>
  )
}

export default App
