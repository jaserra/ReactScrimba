// ReactDOM.render(<p>Hello, everyone</p>, document.getElementById("root"));

// ReactDOM.render(
//     <ul>
//         <li>first</li>
//         <li>second</li>
//     </ul>,
//     document.getElementById("root")
// );

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">
//                 Navbar
//             </a>
//             <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//             >
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="nav-item active">
//                         <a className="nav-link" href="#">
//                             Home <span className="sr-only">(current)</span>
//                         </a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">
//                             Link
//                         </a>
//                     </li>
//                     <li className="nav-item dropdown">
//                         <a
//                             className="nav-link dropdown-toggle"
//                             href="#"
//                             id="navbarDropdown"
//                             role="button"
//                             data-toggle="dropdown"
//                             aria-haspopup="true"
//                             aria-expanded="false"
//                         >
//                             Dropdown
//                         </a>
//                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                             <a className="dropdown-item" href="#">
//                                 Action
//                             </a>
//                             <a className="dropdown-item" href="#">
//                                 Another action
//                             </a>
//                             <div className="dropdown-divider"></div>
//                             <a className="dropdown-item" href="#">
//                                 Something else here
//                             </a>
//                         </div>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link disabled" href="#">
//                             Disabled
//                         </a>
//                     </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//                         Search
//                     </button>
//                 </form>
//             </div>
//         </nav>
//     );
// }

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// function MainContent() {
//     return <h1>I'm Learning React</h1>;
// }
// // Afterward, render it below the Navbar (which
// // you can do inside the ReactDOM.render call below)

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// );

// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1 = document.createElement("h1");
// h1.textContent("This is an imperative way to programm");
// h1.className = "header";
// document.getElementById("root").append(h1);
// const navbar = (
//     <nav>
//         <h1>website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// );

// // ReactDOM.render(navbar, document.getElementById("root"));

// ReactDOM.createRoot(document.getElementById("root")).render(navbar);

// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px"></img>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// );
// ReactDOM.render(page, document.getElementById("root"));

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

import Header from "./Header.js";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js";

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
