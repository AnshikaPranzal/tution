import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Row } from 'reactstrap';
import{ getAUserQuizResult, isAuthenticated } from '../../../../helper/index'
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';


const SalesSummary = () => {
  const { user, token } = isAuthenticated();
  const [result, setResult] = useState();
  const [call, setCall] = useState(true)
  const loadQuizResult = () => {
    getAUserQuizResult(user._id, token)
      .then((data) => {
        if (data) {
          console.log(data)
          setResult(data);
        } else {
          console.log('no result');
        }
      })
      .catch((err) => console.log(err));
      setCall(false)
  };
  useEffect(loadQuizResult, call);
  return (
    <Card style={{ height: '60vh' }}>
      <CardBody>
        <div className='d-flex align-items-center'>
          <div>
            <CardTitle>Performance Summary</CardTitle>
            <CardSubtitle>Quiz Percentages</CardSubtitle>
          </div>
        </div>
        <Row>
          <Col lg='12'>
            <div className='campaign ct-charts'>
              <div
                className='chart-wrapper'
                style={{ width: '100%', margin: '0 auto', height: 250 }}
              >
                <Line
                  data={result === undefined? {} :{
                    labels: result.Quiznames,
                    datasets: [
                      {
                        label: 'Quiz Percentage',
                        borderWidth: 1,
                        backgroundColor: '#A0E9DA',
                        borderColor: 'rgb(94,114,228)',
                        pointBorderColor: 'rgb(94,114,228)',
                        pointBackgroundColor: 'rgb(94,114,228)',
                        data: result.QuizPercentage,
                      },
                    ],
                  }}
                  options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: false,
                      labels: { fontFamily: 'Nunito Sans' },
                    },
                    scales: {
                      yAxes: [
                        {
                          stacked: true,
                          gridLines: { display: false },
                          ticks: { fontFamily: 'Nunito Sans' },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: { display: false },
                          ticks: { fontFamily: 'Nunito Sans' },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SalesSummary;
