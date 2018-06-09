import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostInline extends Component {
    render() {

        const { post }  = this.props
        return (
            <div>
                {post !== undefined ? <div>
                    <h1>{ post.title }</h1>
                <p>{post.content} </p>
                </div>
                : ""    
            }

            </div>
        );
    }
}

PostInline.propTypes = {

};

export default PostInline;