import  React, { Component } from "react";

export class UserComponent extends Component{
  render(){
    return(
      <div class="col-md-3 col-sm-6">
        <figure class="card " data-name={this.props.name}>
          <img src={this.props.img} class="card-img-top" alt={this.props.name} />

          <div class="card-body">
            <h2 class="card-title">{this.props.name}</h2>
            <address class="card-text">{this.props.email} </address>
          </div>
          <button class="btn btn-primary">Greeting <span aria-label="greeting" role="img">  ✋ </span></button>
        </figure>
      </div>
    )
  }
}