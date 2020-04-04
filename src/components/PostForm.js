import React, { Component } from 'react';
import { ProductConsumer } from '../context';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { createPost } from '../actions/postActions';

class PostForm extends Component {

    constructor(props){
        super(props);
        // this.state= {
        //     title: '',
        //     body: ''
        // }
        // this.onSubmit = this.onSubmit.bind(this);
        // this.onChange = this.onChange.bind(this);
    }

    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts',{
    //         method:'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    // }

    // onChange(e) {
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }
    // onSubmit(e) {
    //     e.preventDefault();
    //     console.log("hello");
    //     const data = {
    //         title:this.state.title,
    //         body:this.state.body
    //     }
    //     fetch('https://jsonplaceholder.typicode.com/posts',{
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         const dummyPost =[...this.state.posts];
    //         dummyPost.unshift(data);
    //         this.setState({
    //             posts:dummyPost
    //         })

    //     })
    // }
    // onChange(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    render() {
        // console.log(this.props)
        return (
            <div>
                <ProductConsumer>
                    {value => {
                        return <form onSubmit={value.onSubmit}>
                            <input type="text" name="title" value={value.title} onChange={value.onChange} />
                            <textarea name="body" value={value.body} onChange={value.onChange} />
                            <button type="submit">button</button>
                        </form>
                    }}
                </ProductConsumer>
            </div>

        )
    }
}

// export default connect(null, { createPost })(PostForm);
export default PostForm;