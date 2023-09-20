import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Comparison = ({ personOne, personTwo, isSamePerson, isChecked, setPersonOne, setPersonTwo, checkIsSamePerson, children, setIsChecked }) => {
  //Menggunakan useEffet untuk mengecek personOne dan persone Two tanpa harus menggunakan button
  useEffect(() => {
    if (personOne && personTwo) {
      setIsChecked(true);
      checkIsSamePerson();
    } else {
      setIsChecked(false);
    }
  }, [personOne, personTwo, checkIsSamePerson, setIsChecked]);

  return (
    <>
      <div className="one">
        <label htmlFor="personeOne">Persone One: </label>
        <input type="text" value={personOne} onChange={(event) => setPersonOne(event.target.value)}></input>
      </div>
      <div className="two">
        <label htmlFor="personeTwo">Persone Two: </label>
        <input type="text" value={personTwo} onChange={(event) => setPersonTwo(event.target.value)}></input>
      </div>

      {/* Jika menggunakan useEffet maka kitra tidak perlu menggunakan button lagi untuk mengecek */}

      {/* <div className="button">
        <button type="submit" onClick={checkIsSamePerson}>
          Check..
        </button>
      </div> */}
      <div className="check">
        <h2>{isChecked && (isSamePerson ? "The Person is same!" : "Yep, Different peron!")}</h2>
      </div>
      {children}
    </>
  );
};

Comparison.propTypes = {
  personOne: PropTypes.string,
  personTwo: PropTypes.string,
  isSamePerson: PropTypes.bool,
  isChecked: PropTypes.bool,
  setPersonOne: PropTypes.func,
  setPersonTwo: PropTypes.func,
  checkIsSamePerson: PropTypes.func,
  children: PropTypes.node,
  setIsChecked: PropTypes.func,
};

export default Comparison;
