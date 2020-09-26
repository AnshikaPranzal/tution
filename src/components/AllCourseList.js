import React, { useState, useEffect } from 'react';
import CourseItem from './CourseItem';
import Reading from '../images/svg/reading.png';

import { loadCart, getAllSubjects } from './helper';

const AllCourseList = () => {
  const [product, setproduct] = useState();
  const [sub, setsub] = useState();
  const update = () => {
    console.log('hi', loadCart());
    if (!loadCart()) {
      console.log('in', loadCart());
      setproduct({ p: 0, c: 0, m: 0, b: 0 });
    } else {
      console.log('in2', loadCart());
      setproduct(loadCart());
    }
  };
  const [subject, setsubject] = useState([]);
  const [errorF, seterrorF] = useState(false);

  const loadAllSubjects = () => {
    getAllSubjects().then((data) => {
      //   console.log(data)
      if (data)
        if (data.error) {
          seterrorF(data.error);
        } else {
          setsubject(data);
        }
    });
  };
  useEffect(() => {
    loadAllSubjects();
  }, []);

  console.log('jkkkk', product);
  return (
    <React.Fragment>
      <section className="section">
        <div className="container1">
          <div className="row justify-content-center">
            <div className="col-12 align-self text-center">
              <img src={Reading} alt="" className="img-fluid" />
            </div>
            {subject?.length > 0 &&
              subject.map((obj, i) => {
                return (
                  <CourseItem
                    key={i}
                    subjectid={obj._id}
                    product={product}
                    price={obj.price}
                    topic={obj.name}
                    des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna."
                  ></CourseItem>
                );
              })}
            {!subject && subject.length === 0 && (
              <div className="col-12">
                <div className="container p-0">
                  <div className="row py-5 d-flex text-center">
                    <div className="col-12 align-self">
                      <p className="display-4">
                        <div
                          style={{
                            animation: 'linear infinite 2s animateNotice',
                          }}
                        >
                          {' '}
                          No notice for now!
                        </div>
                        Please come back soon...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AllCourseList;
