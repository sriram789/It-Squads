import React, { useEffect, useState } from 'react';
import axios from '../../../services/axios';
import { ConsolidatedResultsWrapper, ListContent, MainContent, StyledLI, StyledUL, UserName } from './style';

const Results = () => {
  const [result, setResult] = useState({});
  const [currentResult, setCurrentResult] = useState(result[0]);
  useEffect(() => {
    axios.get('/results.json').then(({data}) => {
      let resultData = {};
      for(let item in data) {
        let tempData = data[item].data;
        for(let itr = 0; itr < tempData.length; itr++) {
          if (resultData[tempData[itr].name]) {
            resultData[tempData[itr].name].push(tempData[itr].data);
          } else {
            resultData[tempData[itr].name] = [tempData[itr].data];
          }
        }
      }
      setCurrentResult(Object.keys(resultData)[0]);
      setResult(resultData);
    })
  }, []);

  const onClickHandler = (key) => {
    setCurrentResult(key);
  }

  return (
    <ConsolidatedResultsWrapper>
      {
        Object.keys(result).length > 0 && <ListContent>
          {
            Object.keys(result).map((key) => {
              return (
                <UserName data-current={currentResult === key} onClick={() => onClickHandler(key)} key={key}>
                  {
                    key
                  }
                </UserName>
              );
            })
          }
        </ListContent>
      }
      {
        result[currentResult] && <MainContent>
          <h3>Strengths</h3>
          <StyledUL>
          {
            result[currentResult].map((data, index) => {
              return (
                <StyledLI key={index}>
                  <div>
                    {
                      data
                    }
                  </div>
                </StyledLI>
              );
            })
          }
          </StyledUL>
        </MainContent>
      }
    </ConsolidatedResultsWrapper>
  );
};

export default Results;