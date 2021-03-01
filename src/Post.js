import React, {Component} from 'react';
import {connect} from 'react-redux'

class Post extends Component {
    render() {
        return(
            <div>
             {
                 this.props.post ? (
                      <div>
                    <div>
                 {this.props.post.title}
              </div>
          <p>{this.props.post.content}</p>
               <button onClick={this.handleDelete}>Delete</button>
              </div>
                    ) : (
                     <div>Loading ...</div>
                    )
                }
            </div> )
            }
        }
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        posts: state.posts.find(post => post.id === id),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch ({type: "DELETE_POST", id:id})
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Post);