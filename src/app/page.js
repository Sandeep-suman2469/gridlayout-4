import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <div className="nav">
        <div className="layout navbar">Layout4</div>
        <div className="about navbar">about</div>
        <div className="services navbar">services</div>
        <div className="contact navbar">contact</div>
      </div>
      <div className="container">
          <div className="box-1">
            <h1 className="heading">Blog Post Title</h1>
            <div className="sec-text">
               <div>by<span className="test">Test</span></div>
            </div>
            <div className="date">⏰ Posted on August 24, 2013 at 9:00 PM</div>
             <div className="box">900 x 300</div>
             <div className="para">
               <div className="p">Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus
                 ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis
                  tempus leo eu aenean sed diam.</div>
               <div className="p1">Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.</div>
               <div className="p1">Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.</div>
               <div className="p1">Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.</div>
               <div className="p1">Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.</div>
               <div className="copyright">Copyright © Your Website 2014</div>
             </div>
          </div>
          <div className="box-2">
             <div className="searchbar">
                <h2 className="h2">Blog Search</h2>
                <div className="search">
                <input type="text"></input>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                            </svg>
                      </div>
             </div>
             <div className="aside">
               <h2 className="h2">Blog Catogeries</h2>
               <div className="para3">
                  <div className="p3">
                     <div className="p4">Category Name</div>
                     <div className="p4">Category Name</div>
                     <div className="p4">Category Name</div>
                     <div className="p4">Category Name</div>
                  </div>
                  <div className="p3">
                     <div className="p4">Category Name</div>
                     <div className="p4">Category Name</div>
                     <div className="p4">Category Name</div>
                     <div className="p4">Category Name</div>
                  </div>
               </div>
             </div>
             <div className="footer">
               <div className="para1">Side Widge Well</div>
               <div className="para2">
                   Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae
                   pellentesque sem placerat in id cursus mi.
               </div>
             </div>
          </div>
      </div>
      

    </>
  );
}

       
