import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Box, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useStatus } from "../../hooks/useStatus";

interface StatusFormState {
  message: string;
  createdBy: unknown;
}

// grab user _id from local storage to create status
const userJson = localStorage.getItem("user")
const toJson = JSON.parse(userJson)
const statusCreator = toJson.user._id

const CreateStatusCard = () => {
  const [statusForm, setStatusForm] = useState<StatusFormState>({
    message: "",
    createdBy: statusCreator
  });

  const { createStatus, error, isLoading } = useStatus();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStatusForm((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createStatus(statusForm.message, statusForm.createdBy);
  };

  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          // border: "2px solid red",
          display: "flex",
          justifyContent: "center",
          margin: "10px"
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        {error && <div>{error}</div>}
        <TextField
          sx={{ margin: "5px" }}
          type="text"
          size="medium"
          placeholder="Create Status..."
          name="message"
          value={statusForm.message}
          onChange={handleChange}
        />
        <Button
          sx={{ margin: "5px" }}
          variant="contained"
          type="submit"
          disabled={isLoading}
        >
          Post
        </Button>
      </Box>
    </Container>
  );
};

export default CreateStatusCard;
