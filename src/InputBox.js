import React,{Component} from 'react';
import List from './List';

export default class InputBox extends Component
{

  baseUrl ="https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=opensearch&search=";
  randomArticleUrl ="https://en.wikipedia.org/wiki/Special:Random";
  
  state={
    value:"",
    article:""
  }

  handleSubmit=()=>{
    var ref=this;
    fetch(ref.baseUrl+ref.state.value).then(function (resp) {
      console.log(ref.baseUrl + ref.state.value);
      console.log(JSON.stringify(resp)+"first");
      //ref.setState({ article: resp })
      return resp.json()
    }).then(function (data) {
        ref.setState({ article: data })
      
    });
     // console.log(JSON.stringify(ref.state.article)+"second");
  }

  handleChange=(event)=>{
    this.setState({value:event.target.value});
    this.handleSubmit();
  }

  handleRandom=(event)=>{
    var ref=this;
    window.open(ref.randomArticleUrl,'_blank');

  }

  render()
  {
    return(
      <div style={{backgroundColor:'purple'}} >
      <div className="row">
        <div className="jumbotron">
        <div className="row">
          <div className="col-sm-6 col-lg-12">
          <h2 className="text-center">
            Wikipedia Viewer
          </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-lg-12">
          <h5 className="text-center">
            ~Priyankar Kumar
          </h5>
          </div>
        </div>  
        </div>
        </div>
        
        <div className="row">

        <div className="text-center form-group">
          <div className="col-sm-offset-1 col-sm-3 col-lg-offset-4 col-lg-4">
          <input type="text" className="form-control" onChange={this.handleChange} />
          <input type="submit" className="btn btn-sm btn-danger" value="Search" onClick={this.handleSubmit} />
          <input type="submit" className="btn btn-sm btn-success" value="Random Article" onClick={this.handleRandom} />
          </div>
        </div>
        </div>
        <br/>

        <div className="text-center">
        <div className="row">
        <div className="col-lg-offset-2 col-lg-8">
        <List article={this.state.article} />
        </div>
        </div>
        </div>
      </div>
    );
  }
}