import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Student from "../components/Student";
import Data from "../Data.json";

const Students = () => {
  return (
    <Container className="mt-4">
      <Row className="g-4 d-flex gap-4 sm:gap-4">
        {Data.map((student) => (
          <Col key={student.id} md={4}>
            <Student name={student.name} className={student.class} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Students;
