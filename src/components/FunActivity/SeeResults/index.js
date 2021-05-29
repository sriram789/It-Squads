import React, { useEffect, useState } from 'react';
import { IndividualResultWrapper, ResultsWrapper, Name, ResponderViewDetail, ResponderViewName, ResponderViewWrapper, IndividualResultData } from './style';
import axios from '../../../services/axios';

const ResponderView = ({result}) => {
  return (
    <ResponderViewWrapper>
      <ResponderViewName>{result.name}</ResponderViewName>
      <ResponderViewDetail>{result.data}</ResponderViewDetail>
    </ResponderViewWrapper>
  );
};

const IndividualResult = ({result}) => {
  return (
    <IndividualResultWrapper>
      <Name>{`${result.name}'s Data`}</Name>
      <IndividualResultData>
        {
          result.data.map((data) => {
            return <ResponderView key={data.name} result={data} />
          })
        }
      </IndividualResultData>
    </IndividualResultWrapper>
  );
};

const Results = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get('/results.json').then(({data}) => {
      console.log(data);
      let resultData = [];
      for(let item in data) {
        resultData.push(data[item]);
      }
      setResult(resultData);
    })
  }, []);

  return (
    <ResultsWrapper>
      {
        result.map((data) => {
          return <IndividualResult key={data.name} result={data} />
        })
      }
    </ResultsWrapper>
  );
};

export default Results;