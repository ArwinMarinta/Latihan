import { useState } from "react";
import Comparison from "../components/Comparison";
import { Container, Card } from "react-bootstrap";

function PeopleComparison() {
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [isSamePerson, setIsSamePerson] = useState("");
  const [isChecked, setIsChacked] = useState(false);

  const checkIsSamePerson = () => {
    setIsChacked(true);
    if (personOne === personTwo) {
      setIsSamePerson(true);
    } else {
      setIsSamePerson(false);
    }
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Body>
          <div>
            <Comparison
              personOne={personOne}
              personTwo={personTwo}
              isSamePerson={isSamePerson}
              isChecked={isChecked}
              checkIsSamePerson={checkIsSamePerson}
              setPersonOne={setPersonOne}
              setPersonTwo={setPersonTwo}
              setIsChecked={setIsChacked}
            >
              <p>Lorem ipsum dolor</p>
            </Comparison>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PeopleComparison;
