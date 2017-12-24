import React,{Component} from 'react';
import ListItem from './ListItem';

const List=(props)=>{
  console.log(typeof props.article[1]);
  if(props.article[1]!==undefined)
  {
    console.log(Object.keys(props.article[1]));
   
  return(
    props.article[1].map((ele,index) => {
      console.log(ele);
      return(
        <div id={index} style={{marginLeft:20}}>
            <ListItem topic={ele} description={props.article[2][index]} link={props.article[3][index]} />
        </div>
      );
    })
  );
  }
  else
  {
    return(
      <div >
    
      </div>
    );
  }
}

export default List;