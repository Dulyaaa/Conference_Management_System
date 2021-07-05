import React, { Component } from 'react';

const api = 'http://localhost:8080';


    export const CommonGet = (controller, queryString) => {

       return fetch(api+'/'+controller+'/'+queryString);
        
    }

    export const CommonPost =  (controller,requestbody)=> {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
         },
            body: JSON.stringify(requestbody)
        };

        return fetch(api+'/'+controller,requestOptions);
       
    }



    export const CommonDeleteById = (controller, queryString) => {

    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },

    };

    return fetch(api+'/'+controller+'/'+queryString,requestOptions);


}



