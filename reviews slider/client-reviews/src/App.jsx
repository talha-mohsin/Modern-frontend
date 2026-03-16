import { useState } from "react";
import "./App.css";

let i = 0;

function App() {
  const reviewsobj = [
    {
      id: 1,
      name: "Talha Mohsin",
      designation: "Software Engineer",
      review:
        "Their web service was incredibly fast and easy to navigate from start to finish. I found exactly what I needed in minutes and the checkout process was seamless.",
      imgUrl:
        "https://png.pngtree.com/png-clipart/20241127/original/pngtree-creative-boys-avatar-png-image_17327785.png",
    },
    {
      id: 2,
      name: "Hussain Lodhi",
      designation: "Web Developer",
      review:
        "The customer service team went above and beyond to resolve my technical issues promptly. They were professional, knowledgeable, and genuinely cared about my satisfaction.",
      imgUrl:
        "https://png.pngtree.com/png-vector/20250718/ourmid/pngtree-cartoon-hand-drawn-handsome-boy-avatar-png-image_16798195.webp",
    },
    {
      id: 3,
      name: "Muhammad Usama",
      designation: "Full Stack Developer",
      review:
        "I had a fantastic experience with this team. The website is user-friendly, the design is sleek, and they got our project done on time and in perfect condition!",
      imgUrl:
        "https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3445.jpg",
    },
    {
      id: 4,
      name: "Meelad Raza",
      designation: "Web Developer",
      review:
        "After struggling with low search rankings, this team revamped our site's SEO. Our traffic has tripled in three months! Truly experts in their field.",
      imgUrl:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 5,
      name: "Hassan Lodhi",
      designation: "Frontend Developer",
      review:
        "I’m not tech-savvy, but they made the entire process of building my e-commerce store smooth and stress-free. The staff is friendly and attentive.",
      imgUrl:
        "https://img.freepik.com/premium-vector/boy-with-hoodie-that-says-hes-boy_1230457-43316.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 6,
      name: "Ahmed Raza",
      designation: "Web Developer",
      review:
        "After trying several other companies, I finally found the perfect fit. Their attention to detail and commitment to quality is unparalleled.",
      imgUrl:
        "https://img.freepik.com/premium-vector/boy-with-shirt-that-says-hes-character_1230457-45561.jpg?semt=ais_rp_50_assets&w=740&q=80",
    },
    {
      id: 7,
      name: "Danish Kamran",
      designation: "Game Developer",
      review:
        "Our website has seen zero downtime since switching to their hosting service. Site speed is excellent, and their backend tools are easy to manage.",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/014/388/556/non_2x/avatar-portrait-of-a-kid-child-caucasian-boy-in-round-blue-frame-illustration-in-cartoon-flat-style-vector.jpg",
    },
    {
      id: 8,
      name: "Husnain",
      designation: "Resturant Owner",
      review:
        "As a new business, we needed a fast, affordable, but professional site. You delivered exactly what we needed within our budget. I will be using them again!",
      imgUrl:
        "https://icon2.cleanpng.com/lnd/20240918/p/a18b7a248bfc94580dad5c2301d081.webp",
    },
    {
      id: 9,
      name: "Ahsan Qadeer",
      designation: "GOVT Teacher",
      review:
        "I've been using their web maintenance services for over 5 years. They are trustworthy, reliable, and always available when I have a question. Fantastic support.",
      imgUrl:
        "https://img.favpng.com/4/6/13/3d-boy-avatar-3d-animated-boy-character-F7VjUURW.jpg",
    },
  ];

  const [obj, setObj] = useState(reviewsobj[0]);

  function leftBtnHandler() {
    i--;

    if (i < 0) {
      i = reviewsobj.length - 1;
    }

    setObj(reviewsobj[i]);
  }

  function rightBtnHandler() {
    i++;

    if (i > reviewsobj.length - 1) {
      i = 0;
    }

    setObj(reviewsobj[i]);
  }

    return (
    <div className="slider">
      <div key={obj.id} className="slide">
        <div className="image">
          <img src={obj.imgUrl} alt="" />
        </div>
        <p className="name">{obj.name}</p>
        <p className="designation">{obj.designation}</p>
        <p className="review">{obj.review}</p>
      </div>
      <i
        onClick={leftBtnHandler}
        className=" leftBtn fa-solid fa-angle-left"
      ></i>
      <i
        onClick={rightBtnHandler}
        className="rightBtn fa-solid fa-angle-right"
      ></i>
    </div>
    );
}

export default App;