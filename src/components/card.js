const Card = (props) => {
    return (
      <div>
        <h2> {props.name}...</h2>
        <h1>Tu as {props.age} ans putain !!!</h1>
      </div>
    );
  }
  
  export default Card;