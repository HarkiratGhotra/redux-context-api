import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchPosts } from '../actions/postActions';
// import propTypes from 'prop-types';
import { ProductConsumer } from '../context';

class Post extends Component {
    // constructor(props){
    //     super(props);
    //     console.log('props', this.props)
    // }

    // componentWillMount() {
    //     this.props.fetchPosts();

    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    //     if(nextProps.newPost) {
    //         this.props.posts.unshift(nextProps.newPost);
    //     }
    // }

    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             posts: data
    //         })
    //     })
    // }
    // componentDidMount(nextProps){
    //     console.log('nextProps', nextProps)
    //     this.state.posts.unshift(nextProps);
    //     console.log(this.state)
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log('nextProps', nextProps)
    //     this.state.posts.unshift(nextProps);
    //     console.log(this.state)
    // }
    render() {
        console.log("sdfsf", this.props)
        return (
            <div>
                <p>POST</p>
                <ProductConsumer>
                    {value => {
                        return value.posts.map(item => {
                            return (
                                <React.Fragment key={item.id}>
                                    <p>{item.title}</p>
                                    <p>{item.body}</p>
                                </React.Fragment>
                            )
                        })
                    }}
                </ProductConsumer>
                {/* {this.props.posts.map(item => {
                    return (
                        <React.Fragment key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </React.Fragment>
                    )
                })} */}
            </div>
        )
    }
}

// Post.propTypes = {
//     fetchPosts: propTypes.func.isRequired,
//     posts: propTypes.array.isRequired,
//     newPost: propTypes.object
// }

// const mapStateToProps = state => ({
//     posts: state.posts.items,
//     newPost: state.posts.item
// });

// export default connect(mapStateToProps, { fetchPosts })(Post);

export default Post;