import React, { Component } from 'react';

import 'whatwg-fetch'
import  cookie  from 'react-cookies';


class Posts extends Component {
    constructor(props) {
        super(props);
        

    }

    loadPosts(){
        let  endpoint = '/api/posts/'
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
            }).catch(function(error){
                console.log("Error", error)
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
        // call the method created above
        this.loadPosts();
    }
    render() {
        return (
            <div>
                <h1>this  is the posts home</h1>
            </div>
        );
    }
}


export default Posts;