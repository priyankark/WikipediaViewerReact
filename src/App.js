import React,{Component} from 'react';
import InputBox from './InputBox';

export default class App extends Component
{
  render()
  {
    return(

      <div style={{ backgroundColor: 'purple' }} className="col-lg-12">
        <InputBox/>
        <div style={{ backgroundColor: 'purple' }}>
        </div>
      </div>
    );
  }
}
