import { Button } from "@mui/material"

interface AddCommentButtonProps {
  showCard: () => void;
}

const AddCommentButton = ({ showCard }: AddCommentButtonProps) => {
  return (
    <>
       <Button sx={{
        backgroundColor: "#1E1E1E",
        color: "red",
        width: "100%",
        border: "2px solid black",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        margin: "5%",
        padding: "10px",
        fontSize: "16px"
       }} variant="contained" onClick={showCard}>Add Comment</Button>
    </>
  )
}

export default AddCommentButton