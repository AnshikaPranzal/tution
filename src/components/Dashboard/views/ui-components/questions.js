/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
    Input,
    Table,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';
import $ from 'jquery'
import UploadDocument from '../../../UploadDocument';
import {getAClassroom, updateClassroom,deleteClassroom,isAuthenticated, getAQuiz, createQuestion, createOption, getQuestions} from '../../../helper';


const Questions = (props) => {

    const qid= props.location.pathname;

    const [quiz, setquiz] = useState({
      title:"",
      subject:"",
      questions:[],
      endtime:"",
      start:""
    })
    const [qarray, setqarray] = useState([{
      title: "",
      img:"",
      hasImg:false,
      formData:""
  }])

  const {title,img,hasImg,formData} = qarray

    const loadQuiz=()=>{
        console.log(qid,"id")

        getQuestions(qid).then(data=>{
          console.log(data,"all questions")
          if(data){
            if(data.error){
              console.log(data.error)
            }
            else{
              setquiz(data.data[0])
              setqarray({
                ...qarray, formData: new FormData()
              })
             
            }
          }
        })

         
    }
    console.log(quiz,"qwqwww")

    const handleChange = name => event => {
      const v = event.target.value

      formData.set(name,v)
      setqarray({
          ...qarray, [name]: v
      })
      console.log(qarray)
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
  }

    const [refresh, setrefresh] = useState(true)

    useEffect(() => {
        loadQuiz()
    }, [refresh])
    const [options, setoptions] = useState([]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...options];
    list[index][name] = !list[index][name];
    setoptions(list);
    console.log(options)
  };
  const handleInputChangeN = (e, index) => {
    const { name, value } = e.target;
    const list = [...options];
    list[index][name] = value;
    setoptions(list);
    console.log(options)
  };

//   const handleChange = name=> event =>{

//      setoptions({...options,[name]: v});
//      console.log(options)
    
// }
 
  // handle click event of the Remove button
  
  const handleRemoveClick = index => {
    const list = [...options];
    list.splice(index, 1);
    setoptions(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setoptions([...options, { optionValue: "", isCorrect: false }]);
  };
const [quesId, setquesId] = useState({id: 0})
  const onSubmit = ()=>{
    setqarray({...qarray,options:options})
    console.log(qarray)
    createQuestion(qid,formData).then(data=>{console.log("f",data)
       if(data){     
      if(data.error)
      {
          console.log(data.error)
          // setValues({...values,error:data.error})
      }
      else{
        console.log("XD<3",data)
        setquesId({...quesId, id: data.data._id})
        handleAddClick()
      }
    }
  })
  }
  const onOptionSubmit = ()=>{
    options.map((x,i) =>{
      console.log(x)
      createOption(quesId.id,x).then(data=>{console.log("f",data)
          if(data){     
          if(data.error)
          {
              console.log(data.error)
              // setValues({...values,error:data.error})
          }
          else{
            console.log("Options createdd XD<3")
           
          }
        }
      })
    })
    
  }
 
    return(
    <React.Fragment>
          <div className="text-center">
            <Row>
                <Col xs="12" md="12">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        {/* <CardImg top width="100%" src={img2} /> */}
                        <CardBody>
                            <CardTitle>{quiz.title}</CardTitle>
                            <CardSubtitle>{quiz.subject}</CardSubtitle>
                            {options.length === 0 ?
                            (<Input
                                    type="text"
                                    name="title"
                                    id="title"
                                    onChange = {handleChange("title")}
                                    value={title}
                                    placeholder="Enter your question"
                                    style={{marginTop:"1rem"}}
                            ></Input>):<div>{title}</div>
                            }
                            <Table className="no-wrap v-middle" responsive>
                                    <thead>
                                        <tr className="border-0">
                                        {options.length > 0 && <th className="border-0">Option Value(Check the correct option/s)</th>}
                                            
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                            {options.map((x, i) => {
                                return (
                                        <tr>
                                            <td>
                                              <div className="d-flex no-block align-items-center">
                                              <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                  <InputGroupText>
                                                    <Input addon type="checkbox" id="hi" name="isCorrect" onChange={e=>handleInputChange(e,i)} aria-label="Checkbox for following text input" />
                                                  </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="Check it out" name="optionValue" onChange={e=>handleInputChangeN(e,i)}/>
                                              </InputGroup>
                                              </div>
                                            </td>
                                            <td>

                                              <div className="d-flex no-block align-items-center">
                                              
                                                  {options.length !== 1 && <button
                                                    className="mr10"
                                                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                                                  {options.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                                                
                                              </div>
                                            </td>
                                            
                                        </tr>
                                   
                                 
                                );
                              })}
                               </tbody>
                            </Table>
                            {options.length === 0 ? (<button onClick={onSubmit}>Create Question</button>):(<button onClick={onOptionSubmit}>Save Options</button>)}
                            
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="12">
                  <Card>
                    <CardBody>
                      <Table>
                        <thead>
                          <th>Question</th>
                          <th>Options</th>
                        </thead>
                        <tbody>
                          {quiz.questions.map((x,i)=>(
                            <tr>
                              <td>{x.title}</td>
                              <td>{x.options.map((y,j)=>(
                                y.isCorrect ? (<span className="text-warning">{y.optionValue},</span>):(<span>{y.optionValue},</span>)
                              ))}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
            </Row>
          </div>
    </React.Fragment>)
}
export default Questions;