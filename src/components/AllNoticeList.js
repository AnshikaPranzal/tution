import React from 'react';
import NoticeItem from './NoticeItem';

const AllNoticeList = () => {
    return(
        <React.Fragment>
            <section class="section">
                <div class="container">
                    <div class="row">
                    <div class="col-12">
                        <ul class="list-unstyled">
                            <NoticeItem 
                            date="30" 
                            month="APRIL" 
                            year="2019" 
                            title="Teaching Materials and Testing Methods" 
                            des=">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!">
                            </NoticeItem>
                            <NoticeItem 
                            date="30" 
                            month="MAY" 
                            year="2020" 
                            title="Teaching Materials and Testing Methods" 
                            des=">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!">
                            </NoticeItem>
                            <NoticeItem 
                            date="25" 
                            month="JAUARY" 
                            year="2020" 
                            title="Teaching Materials and Testing Methods" 
                            des=">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!">
                            </NoticeItem>
                            <NoticeItem 
                            date="13" 
                            month="APRIL" 
                            year="2020" 
                            title="Teaching Materials and Testing Methods" 
                            des=">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!">
                            </NoticeItem>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AllNoticeList;