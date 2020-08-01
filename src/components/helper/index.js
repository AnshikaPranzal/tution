import { API } from '../../backend'

export const signup1 = async user =>{
    try {
        const response = await fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        });
        return response.json();
    }
    catch (err) {
        console.log(err);
    }
}

export const classes = async classes =>{
    try {
        const response = await fetch(`${API}/class/create`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(classes)
        });
        return response.json();
    }
    catch (err) {
        console.log(err);
    }
}

export const subjects = async subjects =>{
    try {
        const response = await fetch(`${API}/subject/create`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(subjects)
        });
        return response.json();
    }
    catch (err) {
        console.log(err);
    }
}

export const standards = standards =>{
    return fetch(`${API}/standard/create`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify(standards)
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

export const classrooms = async classrooms =>{
    try {
        const response = await fetch(`${API}/classroom/create`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(classrooms)
        });
        return response.json();
    }
    catch (err) {
        console.log(err);
    }
}

export const createQuiz = async quiz =>{
    try {
        const response = await fetch(`${API}/quiz/create`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(quiz)
        });
        return response.json();
    }
    catch (err) {
        console.log(err, "hello");
    }
}

export const getQuiz = async (uid) =>{
    try {
        const response = await fetch(`${API}/quizzes/${uid}`, {
            method: "GET"
        });
        return response.json();
    }
    catch (err) {
        console.log(err, "hello");
    }
}

export const getAQuiz = async (qid) =>{
    try {
        const response = await fetch(`${API}${qid}`, {
            method: "GET"
        });
        return response.json();
    }
    catch (err) {
        console.log(err, "error in getting quiz");
    }
}

export const getQuestions = async (qid) =>{
    try {
        const response = await fetch(`${API}/allquiz${qid}`, {
            method: "GET"
        });
        return response.json();
    }
    catch (err) {
        console.log(err, "hello");
    }
}

export const createQuestion = async (qid,quiz) =>{
    console.log(quiz,"q")
    try {
        const response = await fetch(`${API}/question/create${qid}`, {
            method: "POST",
            headers: {
                Accept: 'application/json'
            },
            body: quiz
        });
        return response.json();
    }
    catch (err) {
        console.log(err, "hello");
    }
}

export const createResponse = async (resp) =>{
    console.log(resp,"q")
    try {
        const response = await fetch(`${API}/response/create`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(resp)
        });
        return response.json();
    }
    catch (err) {
        console.log(err, "hello");
    }
}

export const deleteQuestion = async (qId,quesId)=>{
    
    try {
        const response = await fetch(`${API}/question/delete${qId}/${quesId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
            }
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in deleting the Question");
    }
}

export const deleteOption = async (oId,quesId)=>{
    
    try {
        const response = await fetch(`${API}/option/delete/${quesId}/${oId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
            }
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in deleting the Question");
    }
}

export const deleteQuiz = async (qId)=>{
    
    try {
        const response = await fetch(`${API}/quiz/delete/${qId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
            }
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in deleting the Quiz");
    }
}

export const updateQuiz = async (qId,quiz)=>{
    
    try {
        const response = await fetch(`${API}/quiz/update/${qId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(quiz)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in updating class");
    }
}

export const updateQuestion = async (quesId,question)=>{
    console.log("inn")
    for (var key of question.entries()) {
        console.log(key[0] + ', ' + key[1])
    }
    return fetch(`${API}/question/update/${quesId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json"
            },
            body: question
        }).then(response =>{

            console.log(response)
            return response.json();
        }).catch( (e) =>{
        console.log("Error in updating question");
    })
}

export const updateOption = async (opId,option)=>{
    
    try {
        const response = await fetch(`${API}/option/update/${opId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(option)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in updating question");
    }
}

export const createOption = async (qid,option) =>{
    console.log(option,"q")
    try {
        const response = await fetch(`${API}/options/create/${qid}`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(option)
        });
        return response.json();
    }
    catch (err) {
        console.log(err, "hello");
    }
}

export const getAQuestion = async (quesId) => {
    try {
        const response = await fetch(`${API}/question/${quesId}`, {
            method: "GET"
        });
        return response.json();
    }
    catch (err) {
        console.log(err, "hello");
    }
}

export const getAOption = async (optionId) => {
    try {
        const response = await fetch(`${API}/option/${optionId}`, {
            method: "GET"
        });
        return response.json();
    }
    catch (err) {
        console.log(err, "hello");
    }
}

export const signin = async user =>{
    try {
        const response = await fetch(`${API}/signin`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        });
        return response.json();
    }
    catch (err) {
        return console.log(err);
    }
}

export const authenticate = (data,next) =>{
    if(typeof window !== "undefined")
    {
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}

export const signout = async next =>{
    if(typeof window !== "undefined")
    {
        localStorage.removeItem("jwt");
        
    }
    try {
        const response = await fetch(`${API}/signout`, {
            method: "GET"
        });
        console.log("SignOut Successful");
    }
    catch (err) {
        return console.log(err);
    }
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

export const getAllClasses = async ()=>{
    
    try {
        const response = await fetch(`${API}/classes`, {
            method: "GET",
        });
        console.log(response);
        return response.json();
    }
    catch (e) {
        console.log("Error in getting the Classes");
    }
}

export const getAClass = async classId=>{
    
    try {
        const response = await fetch(`${API}/class/${classId}`, {
            method: "GET",
        });
        console.log(response);
        return response.json();
    }
    catch (e) {
        console.log("Error in getting the Class");
    }
}

export const deleteClass = async (classId)=>{
    
    try {
        const response = await fetch(`${API}/class/delete/${classId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
            }
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in deleting the Class");
    }
}

export const updateClass = async (classId,classO)=>{
    
    try {
        const response = await fetch(`${API}/class/update/${classId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(classO)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in updating class");
    }
}

export const getAllNotices = async ()=>{
    
    try {
        const response = await fetch(`${API}/notices`, {
            method: "GET",
        });
        console.log(response);
        return response.json();
    }
    catch (e) {
        console.log("Error in getting the Notices");
    }
}

export const getANotice = async noticeId=>{
    
    try {
        const response = await fetch(`${API}/notice/${noticeId}`, {
            method: "GET",
        });
        console.log(response);
        return response.json();
    }
    catch (e) {
        console.log("Error in getting the Notice");
    }
}

export const deleteNotice = async (noticeId)=>{
    
    try {
        const response = await fetch(`${API}/notice/delete/${noticeId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
            }
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in deleting the Notice");
    }
}

export const updateNotice = async (noticeId,NoticeO)=>{
    
    try {
        const response = await fetch(`${API}/notice/update/${noticeId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(NoticeO)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in updating Notice");
    }
}
export const payment = async (amt) =>{
    try {
        const response = await fetch(`${API}/payment`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(amt)
        });
        return response.json();
    }
    catch (err) {
        return console.log(err);
    }
}

export const getAllUSers = async ()=>{
    
    try {
        const response = await fetch(`${API}/users`, {
            method: "GET",
        });
        console.log(response);
        return response.json();
    }
    catch (e) {
        console.log("Error in getting the Users");
    }
}

export const getAUser = async (userId,token)=>{
    
    try {
        const response = await fetch(`${API}/user/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });
        console.log(response);
        return response.json();
    }
    catch (err) {
        console.log("Error in getting the User", err);
    }
}

export const updateUser = async (userId,token,user)=>{
    
    try {
        const response = await fetch(`${API}/update/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(user)
        });
        return response.json();
    }
    catch (err) {
        console.log("Error in updating user" + err);
    }
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
export const getAllClassrooms = async ()=>{
    
    try {
        const response = await fetch(`${API}/classrooms`, {
            method: "GET",
        });
        console.log(response);
        return response.json();
    }
    catch (e) {
        console.log("Error in getting the Classrooms");
    }
}

export const getAllMembers = async classroomId=>{
    
    try {
        const response = await fetch(`${API}/classroom/${classroomId}/members`, {
            method: "GET",
        });
        console.log(response.json());
        console.log(classroomId)
        return response.json();
    }
    catch (e) {
        console.log("Error in getting the Classrooms");
    }
}


export const getAClassroom = async classroomId=>{
    
    try {
        const response = await fetch(`${API}/classroom/${classroomId}`, {
            method: "GET",
        });
        console.log(response);
        return response.json();
    }
    catch (e) {
        console.log("Error in getting the Classroom");
    }
}

export const deleteClassroom = async (classroomId)=>{
    
    try {
        const response = await fetch(`${API}/classroom/delete/${classroomId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
            }
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in deleting the Classroom");
    }
}

export const deleteDocument = async (ids)=>{
    
    try {
        const response = await fetch(`${API}/document/delete`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ids)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in deleting the Notes");
    }
}

export const deleteAssignment = async (ids)=>{
    
    try {
        const response = await fetch(`${API}/assignment/delete`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ids)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in deleting the Assignment");
    }
}

export const updateClassroom = async (classroomId,classroomO)=>{
    
    try {
        const response = await fetch(`${API}/classroom/update/${classroomId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(classroomO)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in updating classroom");
    }
}

export const uploadDocument = async documents =>{
    for (var key of documents.entries()) {
        console.log(key[0] + ', ' + key[1])
    }
    try {
        const response = await fetch(`${API}/document/upload2`, {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: documents
        });
        console.log("Response doc");
        return response.json();
    }
    catch (err) {
        console.log(err);
    }
}

export const classroomUploadDocument = async (classroomId,documents) =>{
    for (var key of documents.entries()) {
        console.log(key[0] + ', ' + key[1])
    }
    console.log(documents)
    try {
        const response = await fetch(`${API}/classroom/${classroomId}/upload/document`, {
            method: "PUT",
            headers: {
                Accept: "application/json"
            },
            body: documents
        });
        console.log(response);
        return response.json();
    }
    catch (err) {
        console.log(err);
    }
}

export const classroomUploadAnswer = (classroomId,documents) =>{
    for (var key of documents.entries()) {
        console.log(key[0] + ', ' + key[1])
    }
    console.log(documents)
    return fetch(`${API}/classroom/${classroomId}/upload/answer`,{
        method:"PUT",
        headers: {
            Accept: "application/json"
        },
        body: documents
        
    })
    .then(response => {
    console.log(response)
    return response.json(); 
    })
    .catch(err => {console.log(err);
        
    })
}


export const classroomUploadAssignment = async (classroomId,documents) =>{
    for (var key of documents.entries()) {
        console.log(key[0] + ', ' + key[1])
    }
    console.log(documents)
    try {
        const response = await fetch(`${API}/classroom/${classroomId}/upload/assignment`, {
            method: "PUT",
            headers: {
                Accept: "application/json"
            },
            body: documents
        });
        console.log(response);
        return response.json();
    }
    catch (err) {
        console.log(err);
    }
}

export const getAllSubjects = async ()=>{
    
    try {
        const response = await fetch(`${API}/subjects`, {
            method: "GET",
        });
        console.log(response);
        return response.json();
    }
    catch (e) {
        console.log("Error in getting the subjects");
    }
}

export const getASubject = async subjectId=>{
    
    try {
        const response = await fetch(`${API}/subject/${subjectId}`, {
            method: "GET",
        });
        console.log(response);
        return response.json();
    }
    catch (err) {
        console.log("Error in getting the subject" + err);
    }
}

export const deleteSubject = async (subjectId)=>{
    
    try {
        const response = await fetch(`${API}/subject/delete/${subjectId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
            }
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in deleting the subject");
    }
}

export const updateSubject = async (subjectId,subjectO)=>{
    
    try {
        const response = await fetch(`${API}/subject/update/${subjectId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(subjectO)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in updating subject");
    }
}

export const updateRole = async (userId,user)=>{
    
    try {
        const response = await fetch(`${API}/update/role/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in updating role");
    }
}

export const addSubject = async (ids) => {
    try {
        const response = await fetch(`${API}/user/addSubject`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ids)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in adding subject",e);
    }
}

export const getAllStandards = ()=>{
    
    return fetch(`${API}/standards`,{
        method: "GET",
        
    }).then(response => {
       console.log(response);
        return response.json();
    })
    .catch(()=>{
        console.log("Error in getting the standards")
    })
}

export const getAStandard = standardId=>{
    
    return fetch(`${API}/standard/${standardId}`,{
        method: "GET",
        
    }).then(response => {
       console.log(response);
        return response.json();
    })
    .catch(()=>{
        console.log("Error in getting the standard")
    })
}

export const deleteStandard = (standardId)=>{
    
    return fetch(`${API}/standard/delete/${standardId}`,{
        method: "DELETE",
        headers: {
            Accept: "application/json",
            // Authorization: `Bearer ${token}` 
        }
    }).then(response => {
        return response.json()
    })
    .catch(()=>{
        console.log("Error in deleting the standard")
    })
}

export const updateStandard = (standardId,standardO)=>{
    
    return fetch(`${API}/standard/update/${standardId}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(standardO)
    }).then(response => {
        return response.json()
    })
    .catch(()=>{
        console.log("Error in updating standard")
    })
}



export const subclassrooms = async (ids) => {
    console.log(ids)
    try {
        const response = await fetch(`${API}/user/subclassrooms`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ids)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in geting Classrooms");
    }
}


export const subclasses = async (ids) => {
    console.log(ids)
    try {
        const response = await fetch(`${API}/user/subclasses`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ids)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in geting Classes");
    }
}

export const subquizzes = async (ids) => {
    console.log(ids)
    try {
        const response = await fetch(`${API}/user/subquizes`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ids)
        });
        return response.json();
    }
    catch (e) {
        console.log("Error in geting Quizes");
    }
}
