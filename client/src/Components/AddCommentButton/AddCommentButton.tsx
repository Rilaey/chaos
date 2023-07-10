import { Button } from "@mui/material"

const AddCommentButton = () => {
  return (
    <>
       <Button sx={{
        backgroundColor: "#1E1E1E",
        color: "red",
        width: "100%",
        // paddingRight: "10px"
        margin: "5%"
       }} variant="contained">Add Comment</Button>
    </>
  )
}

export default AddCommentButton