import React, { Component } from 'react';
import { UserComponent } from './UserComponent';
import "./mystyle.css"


export class HelloWorld extends Component {
  constructor(){
    super();
    this.users = [{
      img:"https://robohash.org/laborumnecessitatibusdeleniti.bmp?size=200x200&amp;set=set1",
      name:"Jada Foulks", 
      email:"jfoulks0@ifeng.com" 
    },{
      img:"https://robohash.org/earumdoloremquenecessitatibus.jpg?size=200x200&amp;set=set1",
      name:"Saw Pridmore", 
      email:"spridmore1@liveinternet.ru " 
    },{
      img:"https://robohash.org/earumdoloremquenecessitatibus.jpg?size=200x200&amp;set=set1",
      name:"Valerie Polley", 
      email:"vpolley2@eventbrite.com " 
    },{
      img:"https://robohash.org/quisnequeexplicabo.jpg?size=200x200&amp;set=set1",
      name:"Bogey Strong", 
      email:"bstrong3@reference.com" 
    },{
      img:"https://robohash.org/inventoreaspernaturfacilis.png?size=200x200&amp;set=set1",
      name:"Claudelle Guislin", 
      email:"cguislin4@opera.com" 
    },{
      img:"https://robohash.org/consequaturvoluptatepariatur.png?size=200x200&amp;set=set1",
      name:"Mignon Bourgeois", 
      email:"mbourgeois5@elpais.com"
    },{
      img:"https://robohash.org/molestiaeillonon.bmp?size=200x200&amp;set=set1",
      name:"Bogey Strong", 
      email:"bstrong3@reference.com" 
    },{
      img:"https://robohash.org/molestiaeillonon.bmp?size=200x200&amp;set=set1",
      name:"Derrek Gaskin", 
      email:"shimpson6@hatena.ne.jp" 
    },{
      img:"https://robohash.org/pariaturnamfuga.bmp?size=200x200&amp;set=set1",
      name:"Berry Sketchley", 
      email:"bsketchley7@gov.uk" 
    }]
  }

  render() {
    return (
      <div>
      <h1> <img src="https://wildcodeschool.com/wp-content/uploads//2019/01/logo_pink_176x60.png" alt="WCS" /> User list</h1>

      <div class="container-fluid">
        <div class="row">
          {this.users.map(user=>{
            return (
              <UserComponent 
                img={user.img}
                name= {user.name}
                email = {user.email}
              />
            )
          })}
        </div>
      </div>
      </div>
    )
  }
}