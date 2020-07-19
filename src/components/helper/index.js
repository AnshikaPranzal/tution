import { API } from '../../backend'

export const signup1 = user =>{
    return fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json(); 
    })
    .catch(err => {console.log(err);
    })
}

export const classes = classes =>{
    return fetch(`${API}/class/create`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(classes)
    })
    .then(response => {
        return response.json(); 
    })
    .catch(err => {console.log(err);
    })
}

export const notices = notices =>{
    return fetch(`${API}/notice/create`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(notices)
    })
    .then(response => {
        return response.json(); 
    })
    .catch(err => {console.log(err);
    })
}

export const classrooms = classrooms =>{
    return fetch(`${API}/classroom/create`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(classrooms)
    })
    .then(response => {
        return response.json(); 
    })
    .catch(err => {console.log(err);
    })
}

export const signin = user =>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json(); 
    })
    .catch(err => console.log(err))
}

export const authenticate = (data,next) =>{
    if(typeof window !== "undefined")
    {
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}

export const signout = next =>{
    if(typeof window !== "undefined")
    {
        localStorage.removeItem("jwt");
        
    }
    return fetch(`${API}/signout`,{
        method:"GET"
    })
    .then(response => {
        console.log("SignOut Successful")
    })
    .catch(err => console.log(err))
}

export const isAuthenticated = () =>{
    if(typeof window == "undefined")
    {
        return false;
    }
    if(localStorage.getItem("jwt"))
    {
        return JSON.parse(localStorage.getItem("jwt"));
    }
    else
    {
        return false;
    }
}

export const getAllClasses = ()=>{
    
    return fetch(`${API}/classes`,{
        method: "GET",
        
    }).then(response => {
       console.log(response);
        return response.json();
    })
    .catch(()=>{
        console.log("Error in getting the Classes")
    })
}

export const getAClass = classId=>{
    
    return fetch(`${API}/class/${classId}`,{
        method: "GET",
        
    }).then(response => {
       console.log(response);
        return response.json();
    })
    .catch(()=>{
        console.log("Error in getting the Class")
    })
}

export const deleteClass = (classId)=>{
    
    return fetch(`${API}/class/delete/${classId}`,{
        method: "DELETE",
        headers: {
            Accept: "application/json",
            // Authorization: `Bearer ${token}` 
        }
    }).then(response => {
        return response.json()
    })
    .catch(()=>{
        console.log("Error in deleting the Class")
    })
}

export const updateClass = (classId,classO)=>{
    
    return fetch(`${API}/class/update/${classId}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(classO)
    }).then(response => {
        return response.json()
    })
    .catch(()=>{
        console.log("Error in updating class")
    })
}

export const getAllNotices = ()=>{
    
    return fetch(`${API}/notices`,{
        method: "GET",
        
    }).then(response => {
       console.log(response);
        return response.json();
    })
    .catch(()=>{
        console.log("Error in getting the Notices")
    })
}

export const getANotice = noticeId=>{
    
    return fetch(`${API}/notice/${noticeId}`,{
        method: "GET",
        
    }).then(response => {
       console.log(response);
        return response.json();
    })
    .catch(()=>{
        console.log("Error in getting the Notice")
    })
}

export const deleteNotice = (noticeId)=>{
    
    return fetch(`${API}/notice/delete/${noticeId}`,{
        method: "DELETE",
        headers: {
            Accept: "application/json",
            // Authorization: `Bearer ${token}` 
        }
    }).then(response => {
        return response.json()
    })
    .catch(()=>{
        console.log("Error in deleting the Notice")
    })
}

export const updateNotice = (noticeId,NoticeO)=>{
    
    return fetch(`${API}/notice/update/${noticeId}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(NoticeO)
    }).then(response => {
        return response.json()
    })
    .catch(()=>{
        console.log("Error in updating Notice")
    })
}
export const payment = (amt) =>{
    return fetch(`${API}/payment`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(amt)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getAllUSers = ()=>{
    
    return fetch(`${API}/users`,{
        method: "GET",
        
    }).then(response => {
       console.log(response);
        return response.json();
    })
    .catch(()=>{
        console.log("Error in getting the Users")
    })
}

export const getAUser = (userId,token)=>{
    
    return fetch(`${API}/user/${userId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}` 
        },
    }).then(response => {
       console.log(response);
        return response.json();
    })
    .catch((err)=>{
        console.log("Error in getting the User",err)
    })
}

export const updateUser = (userId,token,user)=>{
    
    return fetch(`${API}/update/${userId}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(user)
    }).then(response => {
       
        return response.json()
    })
    .catch((err)=>{
        console.log("Error in updating user"+err)
    })
}

export const addItemToCart = (item,next)=>{
    let cart = []
    if(typeof window!== undefined){
        if(localStorage.getItem("cart")){
            cart=JSON.parse(localStorage.getItem("cart"))
        }
        cart.push({
            ...item
        })
    }
    localStorage.setItem("cart",JSON.stringify(cart))
    
}

export const updateItemInCart = (i)=>{
    let cart = []
    if(typeof window!== undefined){
        if(localStorage.getItem("cart")){
            cart=JSON.parse(localStorage.getItem("cart"))
        }
        cart.map((prod,index)=>{
            
                if(i === prod[0].name)
                {
                    prod[0].count+=1 
                }
            
          })
    }
    localStorage.setItem("cart",JSON.stringify(cart))
    return cart;
}
export const decreaseItemInCart = (i)=>{
    let cart = []
    if(typeof window!== undefined){
        if(localStorage.getItem("cart")){
            cart=JSON.parse(localStorage.getItem("cart"))
        }
        cart.map((prod,index)=>{
            
                if(i === prod[0].name)
                {
                    prod[0].count-=1 
                }
            
          })
    }
    localStorage.setItem("cart",JSON.stringify(cart))
    return cart;
}
export const findItemInCart = (i)=>{
    let cart = []
    let t = 2
    if(typeof window!== undefined){
        if(localStorage.getItem("cart")){
            cart=JSON.parse(localStorage.getItem("cart"))
        }
        cart.map((prod,index) =>{
            
                if(i === prod[0].name)
                {
                    console.log(i,prod[0].name,"dekh",i === prod[0].name,prod[0].count)
                   t = prod[0].count ;
                }
            
          })
    }
    return t;
}

export const removeItemFromCart = (i)=>{
    let cart = []
    if(typeof window!== undefined){
        if(localStorage.getItem("cart")){
            cart=JSON.parse(localStorage.getItem("cart"))
        }
        cart.map((prod,index)=>{
            
                if(i === prod[0].name)
                {
                    cart.splice(index,1)
                }
            
          })
    }
    localStorage.setItem("cart",JSON.stringify(cart))
    return cart;
}

export const loadCart = () =>{
    if(typeof window!== undefined){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart"))
        }
    }
}


export const cartEmpty = next =>{
    
    if(typeof window!== undefined){
        localStorage.removeItem("cart")
    next()
    }
    }
export const getAllClassrooms = ()=>{
    
    return fetch(`${API}/classrooms`,{
        method: "GET",
        
    }).then(response => {
       console.log(response);
        return response.json();
    })
    .catch(()=>{
        console.log("Error in getting the Classrooms")
    })
}

export const getAClassroom = classroomId=>{
    
    return fetch(`${API}/classroom/${classroomId}`,{
        method: "GET",
        
    }).then(response => {
       console.log(response);
        return response.json();
    })
    .catch(()=>{
        console.log("Error in getting the Classroom")
    })
}

export const deleteClassroom = (classroomId)=>{
    
    return fetch(`${API}/classroom/delete/${classroomId}`,{
        method: "DELETE",
        headers: {
            Accept: "application/json",
            // Authorization: `Bearer ${token}` 
        }
    }).then(response => {
        return response.json()
    })
    .catch(()=>{
        console.log("Error in deleting the Classroom")
    })
}

export const updateClassroom = (classroomId,classroomO)=>{
    
    return fetch(`${API}/classroom/update/${classroomId}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(classroomO)
    }).then(response => {
        return response.json()
    })
    .catch(()=>{
        console.log("Error in updating classroom")
    })
}
