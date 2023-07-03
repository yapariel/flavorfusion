import "./Home.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import mainfood from "../Assets/mainfood.png";
import food1 from "../Assets/food1.png";
import food2 from "../Assets/food2.png";
import food3 from "../Assets/food3.png";
import food4 from "../Assets/food4.png";
import review from "../Assets/review.png";

const Home = () => {
  const ButtonClick = () => {
    window.open("https://flavorfusion.creativeariel.studio/", "_blank");
  };

  return (
    <Container className="dashboard-page">
      <Navbar />

      <Container id="home" className="content-container">
        <Row className="content-row">
          <Col className="content">
            <h1 className="title-main">
              Flavor Fusion <span>Uniting Global Tastes in Every Bite!</span>
            </h1>
            <h3 className="description">
              Experience a tantalizing fusion of international flavors expertly
              crafted to satisfy your culinary wanderlust.
            </h3>
            {/* <br /> */}
            <Button
              variant="primary"
              className="custom-button"
              onClick={ButtonClick}
            >
              Get Started
            </Button>
          </Col>
          <Col xs={12} md={6} className="logo-col">
            <img src={mainfood} className="logo" alt=" main food" />
          </Col>
        </Row>
      </Container>

      <Container id="menu" className="services">
        <Col>
          <h2 className="serv-title">Our Delicious Dish</h2>
          <h2 className="serv-des">
            A culinary masterpiece crafted with passion and precision, each bite
            of our exquisite creation is a journey of flavors and pure
            satisfaction
          </h2>
        </Col>
        <Row className="services-container">
          <Col className="food">
            <img src={food1} alt="Food 1" className="plate" />
            <h2>Leafy Delight</h2>
            <h4>
              Fish infused with vibrant leaves for a harmonious blend of flavors
              and textures
            </h4>
            <Col className="buttons">
              <Button className="price">₱ 999</Button>
              <Button className="cart">Add to Cart</Button>
            </Col>
          </Col>

          <Col className="food">
            <img src={food2} alt="Food 1" className="plate" />
            <h2>Chicken Medley</h2>
            <h4>
              Succulent chicken breast adorned with a delightful assortment of
              aromatic leaves.
            </h4>
            <Col className="buttons">
              <Button className="price">₱ 999</Button>
              <Button className="cart">Add to Cart</Button>
            </Col>
          </Col>
          <Col className="food">
            <img src={food3} alt="Food 1" className="plate" />
            <h2>Salmon Sensation</h2>
            <h4>
              Tender salmon fillet enhanced with a tantalizing blend of fresh
              herbs.
            </h4>
            <Col className="buttons">
              <Button className="price">₱ 999</Button>
              <Button className="cart">Add to Cart</Button>
            </Col>
          </Col>

          <Col className="food">
            <img src={food4} alt="Food 1" className="plate" />
            <h2>Chicken Supreme</h2>
            <h4>
              Succulent chicken infused with a luscious tomato glaze for a burst
              of savory goodness
            </h4>
            <Col className="buttons">
              <Button className="price">₱ 999</Button>
              <Button className="cart">Add to Cart</Button>
            </Col>
          </Col>
        </Row>
      </Container>

      <Container id="reviews" className="reviews">
        <Row className="review-container">
          <Col>
            <h2 className="rev-title">What our Customer Are Saying</h2>
            <h2 className="rev-des">
              Discover honest and mouthwatering food reviews straight from the
              heart of our satisfied customers.
            </h2>
          </Col>
          <Row>
            <Col className="review-box">
              <img src={review} alt="Food 1" className="people" />
              <h1 className="rev-title">Rowan Sebastian Atkinson</h1>
              <Col>
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="gold-star-icon">
                    &#9733;
                  </span>
                ))}
              </Col>
              <h1 className="rev-des">
                "The food at Flavor Fusion is simply incredible! Every bite is
                bursting with flavor and the presentation is impeccable. A truly
                delightful experience!"
              </h1>
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
