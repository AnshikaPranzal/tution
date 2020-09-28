import React, { useState,useEffect } from 'react';

// import $ from 'jquery';

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Table,
} from 'reactstrap';
import { toast } from 'react-toastify';
import {
  getAllSubjects,
  addSubject,
  getAllUSers,
  searchUser,
} from '../../../helper';

const Projects = () => {
  const [userO, setuserO] = useState([]);
  const [sub, setsubject] = useState([]);
  const [errorF, seterrorF] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [u, setU] = useState({
    name: '',
    email: '',
    subject: '',
    expiresOn: '',
    validity: 0,
  });
  const { name, email, subject, validity,expiresOn } = u;

  const loadUsers = () => {
    // getAllUSers().then((data) => {
    //   console.log(data);
    //   if (data)
    //     if (data.error) {
    //       seterrorF(data.error);
    //     } else {
    //       setuserO(data);
    //     }
    // });
    searchUser(u)
      .then((data) => setuserO(data.users))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadUsers();
  }, [refresh]);

  const loadAllSubjects = () => {
    getAllSubjects().then((data) => {
      //   console.log(data)
      if (data)
        if (data.error) { toast(data.error,{type:"error"})
          seterrorF(data.error);
        } else {
          setsubject(data);
        }
    });
  };
  useEffect(() => {
    loadAllSubjects();
    
  }, []);

  const users = [];

  const handleChange = (name) => async (event) => {
    const k = await Promise.resolve(event.target.value)
      var d = new Date()
      d.setDate(d.getDate()+(k*30))
      const g = await Promise.resolve(setU({
        ...u,
        expiresOn: new Date(),
        [name]: k,
      }))
      console.log(d.getDate(),d,"month",u,k)
    
    // const gk = await Promise.resolve(setU({
    //   ...u,
    //   [name]: k,
    // }
    // ));
  };

  // if((name !== "")&&(mob !== 0)&&(email !== ""))
  // {
  //     $('hvr-bounce-to-top').removeClass('hide')
  // }

  const addSubjectToUser = (userId) => {
    addSubject({ user_id: userId, subject_id: subject, value: validity,expiresOn: expiresOn }).then(
      (data) => {
        console.log(data);
        if (!data?.error) {setRefresh(!refresh);
        toast("Validity Updated Successfully",{type:"success"})
        }
        else {toast(data.error,{type:"error"})}
      }
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    loadUsers();
  };

  const dashboard = () => (
    <Card>
      <CardBody>
        <div className='d-flex align-items-center'>
          <div>
            <CardTitle className='font-weight-bold'>Find Student</CardTitle>
            <CardSubtitle>To Add or Edit Subject</CardSubtitle>
          </div>
        </div>
        <div className='row mx-0 px-3 align-items-center justify-content-flex-start'>
          <div className='font-weight-bold '>Search User : </div>
          <div className='mx-3 d-flex'>
            <Input
              type='text'
              name={name}
              id={name}
              placeholder='Name'
              value={name}
              onChange={handleChange('name')}
            ></Input>
          </div>

          <div className='mx-3'>
            <Input
              type='email'
              name={email}
              id={email}
              placeholder='Email'
              value={email}
              onChange={handleChange('email')}
            ></Input>
          </div>

          <div className='mx-3'>
            <button
              onClick={onSubmit}
              style={{
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '0.2rem',
                fontSize: '0.8rem',
              }}
              class='hvr-bounce-to-top '
            >
              search
            </button>
          </div>
        </div>
        <hr />
        <Table className='no-wrap v-middle' responsive>
          <thead>
            <tr className='border-0'>
              <th className='border-0'>Name</th>
              <th className='border-0'>Email</th>
              <th className='border-0'>Subject</th>
              <th className='border-0'>Months</th>
              <th className='border-0'>ExpiresOn</th>
            </tr>
          </thead>
          <tbody>
            {userO.map((obj, i) => {
              if (obj.role !== 0) {
                return <></>;
              }
              return (
                <tr key={`user${obj._id}`} className='userlist'>
                  <td>{obj.name}</td>
                  <td>{obj.email}</td>
                  <td colSpan='3'>
                    {obj.subject.map((o, i) => {
                      return (
                        <>
                          <div className='d-flex justify-content-between py-2'>
                            <span>
                              {o.name}
                            </span>

                            <span>
                              {o.value}
                            </span>

                            <span>
                              {o.expiresOn ? o.expiresOn : <>-</>}
                            </span>
                          </div>
                        </>
                      );
                    })}
                  </td>
                  {/* <td>{obj.expiresOn}</td> */}
                  <td>
                    <Input
                      type='select'
                      className='custom-select'
                      value={subject}
                      onChange={handleChange('subject')}
                    >
                      <option value='0' selected>
                        Subject
                      </option>
                      {sub.map((obj, i) => {
                        return (
                          <option key={i} value={obj._id}>
                            {obj.name}
                          </option>
                        );
                      })}
                    </Input>
                  </td>

                  <td>
                    <Input
                      type='Number'
                      name={validity}
                      id={validity}
                      placeholder='0'
                      value={validity}
                      onChange={handleChange('validity')}
                    ></Input>
                  </td>

                  <td>
                    <button
                      className='btn btn-sm btn-outline-primary'
                      onClick={addSubjectToUser.bind(null, obj._id)}
                    >
                      Add
                    </button>
                  </td>
                  {/* <td><i class="fa fa-plus text-info" style={{cursor:"pointer",marginRight:"20px"}} onClick={()=>{getSubject(obj._id)}} aria-hidden="true"></i>
                            <i class="fa fa-trash text-orange" style={{cursor:"pointer"}} onClick={()=>{deleteaSubject(obj._id)}} aria-hidden="true"></i></td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
        {userO.length === 0 && (
          <h3 className='text-center'>No Students Enrolled</h3>
        )}
      </CardBody>
    </Card>
  );
  return <React.Fragment>{dashboard()}</React.Fragment>;
};

export default Projects;
