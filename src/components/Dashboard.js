import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      password: '',
      error: false,
      loginSuccess: false,
    };
  }

  handleOnChangeLogout = e => {
    this.setState ({
        loginSuccess: false,
    });

     localStorage.setItem("login","false");
   
  };
  renderLogin=()=>{
   let islogin= localStorage.getItem("login")
  
    if(islogin=="false"){
         return <Redirect to='/login' />    
    } 
    
}
  render() {
    
    return (
        <div id="wrapper">
            {this.renderLogin() }    
        <header>
            <div class="container clearfix">
                <h1 id="logo">
                    Pratik
                </h1>
                
                <h3 onClick={this.handleOnChangeLogout}>Logout</h3>
                <nav>
                    <a href="">Lorem</a>
                    <a href="">Ipsum</a>
                    <a href="">Dolor</a>
                </nav>
            </div>
        </header>
        
        <div id="main">
            <div id="content">
                <section>
                    <div class="container">
                        <h1>Header Resize On Scroll with Animations</h1>
                        <p>Cupcake ipsum dolor sit amet lollipop. Macaroon candy cotton candy bear claw macaroon carrot cake pastry icing dessert. Cupcake pastry tart sesame snaps lollipop donut pie. Cookie apple pie toffee lemon drops jelly beans cheesecake sweet roll. Jelly-o soufflé donut candy canes wafer dragée sweet cheesecake. Macaroon caramels pie cookie gummi bears. Ice cream jelly-o toffee cookie gingerbread cookie. Soufflé fruitcake jelly-o jelly chupa chups jelly beans. Dragée marzipan pastry macaroon oat cake muffin soufflé topping liquorice. Jelly-o chocolate cake lollipop.</p>
                        <p>Sugar plum muffin cookie pastry oat cake icing candy canes chocolate. Gummi bears chupa chups fruitcake dessert jelly. Muffin cookie ice cream soufflé pastry lollipop gingerbread sweet. Unerdwear.com bonbon candy marzipan bonbon gummies chocolate cake gummi bears powder. Unerdwear.com tart halvah chocolate cake dragée liquorice. Sugar plum chocolate bar pastry liquorice dragée jelly powder. Jelly tootsie roll applicake caramels. Marzipan candy tootsie roll donut. Gummies ice cream macaroon applicake.</p>
                        <p>
                            <a href="https://www.facebook.com/pratik.chauhan.cp">« Connect With Me | Chauhan PRatik</a>
                            <a href="http://bootsnipp.com/cppratikcp">« Go back to all tutorials?</a>
                        </p>
                    </div>
                </section>
                <section class="color">
                    <div class="container">
                        <h1>Cupcakes for the people!</h1>
                        <p>Cupcake ipsum dolor sit amet lollipop. Macaroon candy cotton candy bear claw macaroon carrot cake pastry icing dessert. Cupcake pastry tart sesame snaps lollipop donut pie. Cookie apple pie toffee lemon drops jelly beans cheesecake sweet roll. Jelly-o soufflé donut candy canes wafer dragée sweet cheesecake. Macaroon caramels pie cookie gummi bears. Ice cream jelly-o toffee cookie gingerbread cookie. Soufflé fruitcake jelly-o jelly chupa chups jelly beans. Dragée marzipan pastry macaroon oat cake muffin soufflé topping liquorice. Jelly-o chocolate cake lollipop.</p>
                        <p>Sugar plum muffin cookie pastry oat cake icing candy canes chocolate. Gummi bears chupa chups fruitcake dessert jelly. Muffin cookie ice cream soufflé pastry lollipop gingerbread sweet. Unerdwear.com bonbon candy marzipan bonbon gummies chocolate cake gummi bears powder. Unerdwear.com tart halvah chocolate cake dragée liquorice. Sugar plum chocolate bar pastry liquorice dragée jelly powder. Jelly tootsie roll applicake caramels. Marzipan candy tootsie roll donut. Gummies ice cream macaroon applicake.</p>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <h1>Chocolate, vanilla, and red velvet</h1>
                        <p>Cupcake ipsum dolor sit amet lollipop. Macaroon candy cotton candy bear claw macaroon carrot cake pastry icing dessert. Cupcake pastry tart sesame snaps lollipop donut pie. Cookie apple pie toffee lemon drops jelly beans cheesecake sweet roll. Jelly-o soufflé donut candy canes wafer dragée sweet cheesecake. Macaroon caramels pie cookie gummi bears. Ice cream jelly-o toffee cookie gingerbread cookie. Soufflé fruitcake jelly-o jelly chupa chups jelly beans. Dragée marzipan pastry macaroon oat cake muffin soufflé topping liquorice. Jelly-o chocolate cake lollipop.</p>
                        <p>Sugar plum muffin cookie pastry oat cake icing candy canes chocolate. Gummi bears chupa chups fruitcake dessert jelly. Muffin cookie ice cream soufflé pastry lollipop gingerbread sweet. Unerdwear.com bonbon candy marzipan bonbon gummies chocolate cake gummi bears powder. Unerdwear.com tart halvah chocolate cake dragée liquorice. Sugar plum chocolate bar pastry liquorice dragée jelly powder. Jelly tootsie roll applicake caramels. Marzipan candy tootsie roll donut. Gummies ice cream macaroon applicake.</p>
                    </div>
                </section>
                <section class="color">
                    <div class="container">
                        <h1>Come to me!</h1>
                        <p>Cupcake ipsum dolor sit amet lollipop. Macaroon candy cotton candy bear claw macaroon carrot cake pastry icing dessert. Cupcake pastry tart sesame snaps lollipop donut pie. Cookie apple pie toffee lemon drops jelly beans cheesecake sweet roll. Jelly-o soufflé donut candy canes wafer dragée sweet cheesecake. Macaroon caramels pie cookie gummi bears. Ice cream jelly-o toffee cookie gingerbread cookie. Soufflé fruitcake jelly-o jelly chupa chups jelly beans. Dragée marzipan pastry macaroon oat cake muffin soufflé topping liquorice. Jelly-o chocolate cake lollipop.</p>
                        <p>Sugar plum muffin cookie pastry oat cake icing candy canes chocolate. Gummi bears chupa chups fruitcake dessert jelly. Muffin cookie ice cream soufflé pastry lollipop gingerbread sweet. Unerdwear.com bonbon candy marzipan bonbon gummies chocolate cake gummi bears powder. Unerdwear.com tart halvah chocolate cake dragée liquorice. Sugar plum chocolate bar pastry liquorice dragée jelly powder. Jelly tootsie roll applicake caramels. Marzipan candy tootsie roll donut. Gummies ice cream macaroon applicake.</p>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <h1>Sugar rush, oh my...</h1>
                        <p>Cupcake ipsum dolor sit amet lollipop. Macaroon candy cotton candy bear claw macaroon carrot cake pastry icing dessert. Cupcake pastry tart sesame snaps lollipop donut pie. Cookie apple pie toffee lemon drops jelly beans cheesecake sweet roll. Jelly-o soufflé donut candy canes wafer dragée sweet cheesecake. Macaroon caramels pie cookie gummi bears. Ice cream jelly-o toffee cookie gingerbread cookie. Soufflé fruitcake jelly-o jelly chupa chups jelly beans. Dragée marzipan pastry macaroon oat cake muffin soufflé topping liquorice. Jelly-o chocolate cake lollipop.</p>
                        <p>Sugar plum muffin cookie pastry oat cake icing candy canes chocolate. Gummi bears chupa chups fruitcake dessert jelly. Muffin cookie ice cream soufflé pastry lollipop gingerbread sweet. Unerdwear.com bonbon candy marzipan bonbon gummies chocolate cake gummi bears powder. Unerdwear.com tart halvah chocolate cake dragée liquorice. Sugar plum chocolate bar pastry liquorice dragée jelly powder. Jelly tootsie roll applicake caramels. Marzipan candy tootsie roll donut. Gummies ice cream macaroon applicake.</p>
                    </div>
                </section>
            </div>
        </div>
        
        
        <footer>
        <div id="info-bar">
            <div class="container clearfix">
                <span class="all-tutorials"><a href="http://bootsnipp.com/cppratikcp">← all tutorials</a></span>
                <span class="back-to-tutorial"><a href="https://www.facebook.com/pratik.chauhan.cp">CHUAHAN PRATIK</a></span>
            </div>
        </div>
        </footer>
        
        
        
        </div>
   );
  }
}
