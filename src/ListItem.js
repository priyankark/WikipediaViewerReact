import React,{Component} from 'react';

export default class ListItem extends Component
{
  
  
  render()
  {
    

    return(
      <div>
        <div className="media" style={{backgroundColor:"#d3d3d3",borderRadius:5}}>
          <div className="media-body">
            <h4 className="media-heading text-center" style={{backgroundColor:'maroon',color:'white'}}> {this.props.topic} </h4>
            <p style={{marginLeft:5}}> 
              {this.props.description}
              <a href={this.props.link} target="_blank" className="text-center"> More>> </a>
            </p> 
          </div>
         </div>
        
        <br/>

      </div>  
    );
  }
}