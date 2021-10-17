import SingleCard from "./SingleCard";

function QuestionCard(){
    return (
        <>
         
         <SingleCard signal={true} quetsionno="1" question="what is html" link="https://daveceddia.com/react-image-tag/"/>
         <SingleCard signal={false} quetsionno="2" question="what is css" link="https://daveceddia.com/react-image-tag/" />
         <SingleCard signal={false} quetsionno="3" question="what is css" link="https://daveceddia.com/react-image-tag/"/>
         <SingleCard signal={false} quetsionno="4" question="what is css" link="https://daveceddia.com/react-image-tag/" />
         <SingleCard signal={false} quetsionno="5" question="what is css"  link="https://daveceddia.com/react-image-tag/"/>
         <SingleCard signal={false} quetsionno="6" question="what is css" link="https://daveceddia.com/react-image-tag/"  />
         <SingleCard signal={true} quetsionno="7" question="what is html" link="https://daveceddia.com/react-image-tag/" />
         <SingleCard signal={false} quetsionno="8" question="what is css"  link="https://daveceddia.com/react-image-tag/" />
         <SingleCard signal={false} quetsionno="9" question="what is css" link="https://daveceddia.com/react-image-tag/" />
         <SingleCard signal={false} quetsionno="10" question="what is css" link="https://daveceddia.com/react-image-tag/" />
         <SingleCard signal={false} quetsionno="11" question="what is css" link="https://daveceddia.com/react-image-tag/"  />
         <SingleCard signal={false} quetsionno="12" question="what is css" link="https://daveceddia.com/react-image-tag/" />
         
        </>
       
    )

}
export default QuestionCard ;