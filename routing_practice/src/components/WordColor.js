const WordColor = (props) => {
  const { word, fontColor, backgroundColor } = props;
  if (isNaN(word)) {
    return (
      <h1 style = {{ color: fontColor, backgroundColor: backgroundColor }} >
       The word is: {word}
      </h1>
    );
  } else {
    
    return <h1 style = {{ color: fontColor, backgroundColor: backgroundColor }} >The number is: {word}</h1>;
  }
};

export default WordColor;

console.log(isNaN(""));