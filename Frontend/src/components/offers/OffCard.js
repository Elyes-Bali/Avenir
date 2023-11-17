import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OffCard.css";
import { CurrentUser } from "../../apis/UserApi";

const OffCard = ({ off }) => {
  const [user, setUser] = useState({});

  const isLoggedIn = async () => {
    const userLg = await CurrentUser();
    setUser(userLg.data.user);
  };

  useEffect(async () => {
    isLoggedIn();
  }, []);
  return (
    <div>
      {off &&
        off?.ideas?.map((el, idx) => (
      <Card style={{ width: "55rem", margin: "1%" }}>
        <Card.Body>
          <ModalTitle><b>Idées : </b>{el.topic}</ModalTitle>
         <br/>
          <Card.Text><b>Description :</b>{el.description}</Card.Text>
          <Card.Text><b>Date de publication : </b>{el?.date}</Card.Text>
         
          
        </Card.Body>
      </Card>))}
    
    
    </div>
  );
};

export default OffCard;
