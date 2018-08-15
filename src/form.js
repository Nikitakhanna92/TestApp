import React, { Component } from 'react';
import logo from './images/tpg-logo.png';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:'',
            title:'',
            comment:'',
            formObject:{},
            isSubmittedSuccessfully:false,
            displayError:'hidden'
        }
        this.formRef = React.createRef();

    }
    handleFormSubmit(event,data){
        let that = this;
        event.preventDefault();
        if(event.target[0].value && event.target[1].value && event.target[2].value)
        {
            that.setState({
                displayError:'hidden'
            })
            isSubmittedSuccessfully:true;
            let formVals= that.props.formValues
            formVals.push(that.state.formObject)
            that.props.viewForm(formVals);
            
           
        }else{
            that.setState({
                displayError:''
            })
        }
       
    }
    
    handleChange(event){
        
        let obj=this.state.formObject?this.state.formObject:{};
        obj[event.target.name]=event.target.value;
        if(event.target.name=='user'){
         this.setState({
             user:event.target.value
         })}else if(event.target.name=='title')
         {
            this.setState({
                title:event.target.value
            })
         }else{
            this.setState({
                comment:event.target.value
            })
         }
        this.setState({
            formObject:obj,
           
        })
    }

   
  
    render() {
        return (
            <div className={this.props.formDisplay}>
             <div className={this.state.displayError + " alert alert-danger"}>
               All fields are required.
            </div>
            <form className="form" onSubmit={(e)=>this.handleFormSubmit(e)}>
                <div className="form-group">
                    <label for='user'>
                        Name:
                    </label>
                <input type="text" name ="user" value = {this.state.user} className="form-control"  onChange={(e)=>this.handleChange(e)}/>

                </div>
                <div className="form-group">
                    <label for='title'>
                        Title:
                    </label>
                    <input type="text" name="title"  value = {this.state.title} className="form-control"  onChange={(e)=>this.handleChange(e)} />

                </div>
                <div className="form-group">
                    <label for='comment'>
                        Comment:
                    </label>
                    <input type="text" name="comment"  value = {this.state.comment} className="form-control" onChange={(e)=>this.handleChange(e)} />

                </div>
                <input type="submit" className="btn btn-default" value="Submit" />
            </form>
        </div>
        );
    }
}

export default Form;
