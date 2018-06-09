import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostInline extends Component {
    render() {

        const { post }  = this.props
        const {elClass} = this.props
        const showContent = elClass === 'card' ? 'd-block' : 'd-none'
        return (
            <div>
                {post !== undefined ? <div className={elClass}>
                    <h1>{ post.title }</h1>
                <p className={showContent}>{post.content} </p>
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