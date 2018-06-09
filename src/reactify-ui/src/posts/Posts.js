import React, { Component } from 'react';

import 'whatwg-fetch'
import  cookie  from 'react-cookies';
import PostInline from './PostInline';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
        }
        

    }

    loadPosts(){
        let  endpoint = '/api/posts/'
        let thisComp = this
        let lookupOptions = {
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        }

        fetch(endpoint, lookupOptions)
            .then(function(response){
                return response.json()
            }).then(function(responseData){
                console.log(responseData)
                thisComp.setState({
                    posts:responseData
                })
            }).catch(function(error){
                console.log("Error",error)
            })
    }


    createPost(){
        let  endpoint = '/api/posts/'
        const csrfToken = cookie.load('csrftoken')
        let data = {

                "slug": "",
                "title": "",
                "content": "",
                "draft": false,
                "publish": null   
            }
        if (csrfToken  !== undefined){

            let lookupOptions = {
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'X-CSRFToken': csrfToken
                },
                body:JSON.stringify(data),
                credentials:'include'
            }
    
            fetch(endpoint, lookupOptions)
                .then(function(response){
                    return response.json()
                }).then(function(responseData){
                    console.log(responseData)
                }).catch(function(error){
                    console.log("Error", error)
                })

        }
        
    }


    componentDidMount(){
        this.setState({
            posts:[]
        })
        
        this.loadPosts();  // call the method created above
    }
    render() {

        const {posts} = this.state

        console.log(this.state)
        return (
            <div>
                <h1>this  is the posts home</h1>
                {/* {posts.length >0 ? '':<p>No posts pound!!</p>} */}
                
                {posts.length > 0 ? posts.map((postItem, index)=>{
                    return(
                        <PostInline post={postItem}/>
                    )

                }):<p>No posts pound!!</p>}
            </div>
        );
    }
}


export default Posts;