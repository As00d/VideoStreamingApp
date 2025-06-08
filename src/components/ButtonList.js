import Button from "./Button";

const listOfButton = [
  "All",
  "Music",
  "Mixes",
  "Ranveer Brar",
  "Shark Tank",
  "Web development",
  "Thoughts",
  "Computer programming",
  "Live",
  "Thrillers",
  "Lectures",
];
function ButtonList() {
  return listOfButton.map((button) => {
    return <Button button={button} key={button} />;
  });
}

export default ButtonList;
