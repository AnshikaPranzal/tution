import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { uploadQuiz, getAllUSers,isAuthenticated } from '../../../helper/index';

const AddQuiz = ()=> {
    const [qArray, setqArray] = useState([])
    const [values, setValues] = useState({
        subject:"",
        title:"",
        questions:[{
          title:"",
          img:"",
          hasImage:"",
          start: [{
            optionValue: "",
            isCorrect: false
          }]
        }],
        end:"",
        start:[],
        category:"",
        loading:false,
        error:"",
        getRedirect: false,
        createdQuiz:"",
        formData:""
    })
    
    const { subject,title,questions, end, loading,error,getRedirect,createdQuiz,formData} = values;
    const{user, token} = isAuthenticated();

    const preload = () => {
        getAllUSers().then(data=>{
            console.log(data)
            if(data.error)
            {
                setValues({...values,error:data.error})
            }
            else{
                setValues({...values,categories:data, formData: new FormData()});
                console.log(categories);
            }
        })
    }

    useEffect(()=>{
        preload();
    },[])

    const goBack = () =>(
        
     <div className="mt-5">
         <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Go Back to Home</Link>
     </div>
    );

    const successMessage = () =>{
        console.log(createdQuiz)
        return(
        <div className="row ">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{display: createdQuiz ? "" : "none"}}>
                        Quiz Added to DB.
                    </div>
                </div>
        </div>
    )}

    const errorMessage = () =>{
       
    return(
        <div className="row ">
        <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
            {error}
        </div>
        </div>
        </div>
    )}
        const handleChange = name=> event =>{
          const v = name === "img"? event.target.files[0]:event.target.value
            console.log(name,event.target.files[0])
          formData.append(name,v,'img.png')
          for (var key of formData.entries()) {
			console.log(key[0] + ', ' + key[1])
		}
           setValues({...values,[name]: v});
           console.log(values)
          
      }
        
        const Submit = event =>{
            event.preventDefault();
            setValues({...values,error:"",loading: true})
            uploadQuiz(formData)
            .then( data =>{
               
                if(data.error){
                    setValues({...values,error:data.error})
                }
                else{
                    setValues({
                        ...values,
                        subject:"",
                        title:"",
                        questions:"",
                        end:"",
                        img:"",
                        loading:false,
                        createdQuiz: true,
                    })
                }
            })
            .catch(()=>{
                console.log("Error in creating Quiz")
            })
        }

    const catForm =() =>(
        <form >
        <div className="form-group">
          <label className="btn btn-block btn-info">
            <input
              onChange={handleChange("img")}
              title="file"
              name="img"
              accept="image"
              placeholder="choose a file"
            />
          </label>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange("subject")}
            name="img"
            className="form-control"
            placeholder="subject"
            value={subject}
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange("title")}
            name="img"
            className="form-control"
            placeholder="title"
            value={title}
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange("questions")}
            title="number"
            className="form-control"
            placeholder="questions"
            value={questions}
          />
        </div>
        <div className="form-group">
          <select
            onChange={handleChange("category")}
            className="form-control"
            placeholder="Category"
          >
            <option>Select</option>
            {categories && 
            categories.map((cat,index)=>(
                <option key={index} value={cat._id}>{cat.name}</option>
            ))
            }
          </select>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange("end")}
            title="number"
            className="form-control"
            placeholder="end"
            value={end}
          />
        </div>
        
        <button title="submit" onClick={Submit} className="btn ">
          Create Quiz
        </button>
      </form>
    );
  return (
    
            <div class="col-md-8 offset-md-2">
                {successMessage()}
                {errorMessage()}
                {catForm()}
            </div>
       
  );
}

export default AddQuiz;
