import React, { useEffect, useState } from 'react';
import { IndividualResultWrapper, ResultsWrapper, Name, ResponderViewDetail, ResponderViewName, ResponderViewWrapper, IndividualResultData } from './style';

const resultData = [
  {
    name: 'user1',
    data: [
      {
        name: 'user2',
        fact: 'some random text'
      },
      {
        name: 'user3',
        fact: 'some random text'
      }
    ]
  },
  {
    name: 'user2',
    data: [
      {
        name: 'user1',
        fact: 'some random text'
      },
      {
        name: 'user3',
        fact: 'some random text'
      }
    ]
  },
  {
    name: 'user3',
    data: [
      {
        name: 'user1',
        fact: 'some random text'
      },
      {
        name: 'user2',
        fact: 'some random text'
      }
    ]
  }
];

const ResponderView = ({result}) => {
  return (
    <ResponderViewWrapper>
      <ResponderViewName>{result.name}</ResponderViewName>
      <ResponderViewDetail>{result.fact}</ResponderViewDetail>
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
    setResult(resultData);
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