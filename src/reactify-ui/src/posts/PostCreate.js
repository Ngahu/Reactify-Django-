import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostCreate extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            
                <form className='col-md-6'>
                    <div className='form-group'>
                    <label for='title'>Post Title</label>
                    <input type='text' id='title' name='title' className='form-control' placeholder='Blog post title' />
                    </div>

                    <div className='form-group'>
                    <label for='content'>Content </label>
                    <textarea id='content' name='content' className='form-control' placeholder='Blog post content' />
                    </div>

                    <div className='form-group'>
                    <label for='draft'>
                    <input type='checkbox' id='draft' name='draft' className='mr-2'/>
                    Draft</label>
                    </div>

                    <div className='form-group'>
                    <label for='title'>Publish Date</label>
                    <input type='date' id='publish' name='publish' className='form-control'/>
                    </div>

                    <button className='btn btn-primary'>Save</button>
                </form>
            
        );
    }
}

PostCreate.propTypes = {

};

export default PostCreate;