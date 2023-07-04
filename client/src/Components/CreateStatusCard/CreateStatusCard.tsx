import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Box, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

interface StatusFormState {
  message: string;
  createdBy: unknown;
}

const CreateStatusCard = () => {
  const [statusForm, setStatusForm] = useState<StatusFormState>({
    message: "",
    createdBy: localStorage.getItem("id")
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStatusForm((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/status/createStatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(statusForm),
      });

      const data = await response.json()

      console.log(data)

      setStatusForm({
        message: "",
        createdBy: localStorage.getItem("id")
      })
    } catch (err) {
      console.log(err);
    }
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
        <TextField
          sx={{ margin: "5px" }}
          type="text"
          size="medium"
          placeholder="Create Status..."
          name="message"
          value={statusForm.message}
          onChange={handleChange}
        />
        <Button sx={{ margin: "5px" }} variant="contained" type="submit">
          Post
        </Button>
      </Box>
    </Container>
  );
};

export default CreateStatusCard;
