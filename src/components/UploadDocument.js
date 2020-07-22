import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import { classroomUploadDocument, getAllUSers,isAuthenticated } from './helper/index';

const AddDocument = (props)=> {
    const crid = props.id;
    console.log(crid)
    const [values, setValues] = useState({
        name:"",
        type:"",
        price:"",
        stock:"",
        photo:"",
        categories:[],
        category:"",
        loading:false,
        error:"",
        getRedirect: false,
        createdDocument:"",
        formData:""
    })
    const [refresh, setrefresh] = useState(true)
    const { name,type,price, stock,photo,categories,category,loading,error,getRedirect,createdDocument,formData} = values;
    const{user, token} = isAuthenticated();

    useEffect(()=>{},[refresh])

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
    },[refresh])

    const goBack = () =>(
        
     <div className="mt-5">
         <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Go Back to Home</Link>
     </div>
    );

    const successMessage = () =>{
        console.log(createdDocument)
        return(
        <div className="row ">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{display: createdDocument ? "" : "none"}}>
                        Document Added to DB.
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
          const v = name === "photo"? event.target.files[0]:event.target.value;
            console.log(name,event.target.files[0]);
            formData.append(name,v,'photo.png');
            for (var key of formData.entries()) {
              console.log(key[0] + ', ' + key[1])
            }
           setValues({...values,[name]: v});
           console.log(values)
          
      }
      const handleChanger = name => event => {
            const v =event.target.value

            formData.set(name,v)
            setValues({
                ...values, [name]: v
            })
        }
        
        if(values.photo === ""){
            $('.submitD').addClass('hide');
            console.log(values.photo)
        }else{
            $('.submitD').removeClass('hide')
          }

        const Submit = event =>{
            event.preventDefault();
            setValues({...values,error:"",loading: true})
            classroomUploadDocument(crid,formData)
            .then( data =>{
               
                if(data.error){
                    setValues({...values,error:data.error})
                }
                else{
                    setValues({
                        ...values,
                        name:"",
                        type:"",
                        price:"",
                        stock:"",
                        photo:"",
                        loading:false,
                        createdDocument: true,
                    })
                }
            })
            .catch(()=>{
                console.log("Error in creating Document")
            })
        }

    const catForm =() =>(
        <form >
        <div className="form-group">
          <label className="btn btn-block btn-info">
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              accept="image"
              placeholder="choose a file"
            />
          </label>
        </div>
        <div className="form-group">
          <input
            onChange={handleChanger("name")}
            name="photo"
            className="form-control"
            placeholder="Name"
            value={name}
          />
        </div>
        {/* <div className="form-group">
          <textarea
            onChange={handleChanger("type")}
            name="photo"
            className="form-control"
            placeholder="type"
            value={type}
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChanger("price")}
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
          />
        </div>
        <div className="form-group">
          <select
            onChange={handleChanger("category")}
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
            onChange={handleChange("stock")}
            type="number"
            className="form-control"
            placeholder="Stock"
            value={stock}
          />
        </div> */}
        
        <button type="submit" onClick={Submit} className="btn submitD">
          Create Document
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

export default AddDocument;
