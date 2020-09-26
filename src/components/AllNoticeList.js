import React, { useState, useEffect } from "react";
import NoticeItem from "./NoticeItem";
import { getAllNotices } from "./helper";
import { toast } from 'react-toastify';
const AllNoticeList = () => {
  const [noticeO, setnoticeO] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, seterror] = useState(false);

  const loadAllnotices = () => {
    getAllNotices().then((data) => {
      console.log(data);
      if (data)
        if (data.error) { toast(data.error,{type:"error"})
          seterror(data.error);
        } else {
          setnoticeO(data);
        }
    });
  };

  useEffect(() => {
    loadAllnotices();
  }, []);

  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <React.Fragment>
      <section className="section">
        <div className="container1">
          <div className="row">
            <div className="col-12">
              <ul className="list-unstyled">
                {noticeO.map((obj, index) => {
                  return (
                    <NoticeItem
                      key={index}
                      date={obj.date.substring(8, 10)}
                      month={Month[parseInt(obj.date.substring(5, 7) - 1)]}
                      year={obj.date.substring(0, 4)}
                      title={obj.title}
                      des={obj.description}
                    ></NoticeItem>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AllNoticeList;
