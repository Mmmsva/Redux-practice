import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        const {posts} = this.props;
        return(
            <div>
            { 
            posts ? (
                posts.map((post) => {
                    return <div key={post.id} > {post.title}></div>;
                })
            ) : (
                <div> Loading...</div>
            )
            }
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        posts: state.props,
    };
};
export default connect (mapStatetoProps)(Home);