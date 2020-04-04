import React, { Component } from 'react';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts:[],
            title:'',
            body:''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    };
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            this.setState({
                posts: data
            })
        })
    }
    onSubmit(e) {
        e.preventDefault();
        console.log("hello");
        const data = {
            title:this.state.title,
            body:this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            const dummyPost =[...this.state.posts];
            dummyPost.unshift(data);
            this.setState({
                posts:dummyPost
            })

        })
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render () {
        return (
            <ProductContext.Provider value ={{
                ...this.state,
                onSubmit:this.onSubmit,
                onChange: this.onChange
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};