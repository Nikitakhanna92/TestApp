import React, { Component } from 'react';
import logo from './images/tpg-logo.png';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './form.js'
import CardView from './CardView.js'
class PostComment extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.state = {
            displayButton: '',
            formDisplay: 'hidden',
            contentDisplay: 'hidden',
            isSubmittedSuccessfully: false,
            formValues: [],

        },
            this.viewForm = this.viewForm.bind(this);
    }


    handleClick(e) {
        this.setState({
            displayButton: 'hidden',
            formDisplay: ''

        })
        if (this.state.isSubmittedSuccessfully) {
            this.setState({
                contentDisplay: 'hidden'
            })
        }

    }

    viewForm(data) {
        if (data) {
            this.setState({
                formValues: data
            })
        }
        this.setState({
            displayButton: '',
            formDisplay: 'hidden',
            contentDisplay: '',
            isSubmittedSuccessfully: true
        })
    }

    render() {
        return (
            <div>
                <button ref={this.buttonRef} type="button" onClick={(e) => this.handleClick(e)} className={this.state.displayButton + " commentButton btn btn-primary"}>Add Comment</button>
                <Form formValues={this.state.formValues} viewForm={this.viewForm} formDisplay={this.state.formDisplay} />
                <div className={this.state.contentDisplay}>
                    <CardView formValues={this.state.formValues ? this.state.formValues : []} />
                </div>
            </div>
        );
    }
}

export default PostComment;
