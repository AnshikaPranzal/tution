import React, { useState, useEffect } from 'react';
import NoticeItem from './NoticeItem';
import { getAllNotices } from './helper';

const AllNoticeList = () => {

    const [noticeO, setnoticeO] = useState([])
  const [error, seterror] = useState(false)


  const loadAllnotices = () =>{
    getAllNotices().then(data =>{
        console.log(data)
      if(data.error){
        seterror(data.error)
      }
      else{
        setnoticeO(data)
      }
    })
  }
  
  useEffect (() => {
    loadAllnotices()
    },[])
    
    return(
        <React.Fragment>
            <section class="section">
                <div class="container">
                    <div class="row">
                    <div class="col-12">
                        <ul class="list-unstyled">
                            {
                            
                            noticeO.map((obj, index) => {
                                return(
                                    <NoticeItem 
                            date="30" 
                            month="MAY" 
                            year="2020" 
                            title={obj.title} 
                            des={obj.description}>
                            </NoticeItem>
                                )
                            })

                            }
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AllNoticeList;