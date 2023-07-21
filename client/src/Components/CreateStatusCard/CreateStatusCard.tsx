import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Box, Button, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useStatus } from "../../hooks/useCreateStatus";

interface StatusFormState {
  message: string;
  createdBy: unknown;
}

interface CreateStatusCardProps {
  onSubmit: () => Promise<void>;
}

// grab user _id from local storage to create status
const getUserId = (): string => {
  const userJson: string | null = localStorage.getItem("user");
  const toJson: { user: { _id: string } } = JSON.parse(userJson as string);
  const statusCreator: string = toJson.user._id;

  return statusCreator;
};

const CreateStatusCard = ({ onSubmit }: CreateStatusCardProps) => {
  const [statusForm, setStatusForm] = useState<StatusFormState>({
    message: "",
    createdBy: getUserId()
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

    await onSubmit();

    setStatusForm({
      message: "",
      createdBy: getUserId()
    });
  };

  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          // border: "2px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
          padding: "10px",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          width: "100%"
          // backgroundColor: "#2F2F31",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        {error && (
          <Typography
            sx={{
              color: "red",
              padding: "10px",
              border: "1px solid red",
              borderRadius: "4px",
              margin: "20px 0",
              background: "#ffefef"
            }}
          >
            {error}
          </Typography>
        )}
        <TextField
          sx={{ margin: "10px", width: "100%", padding: "10px" }}
          type="text"
          size="medium"
          placeholder="Create Status..."
          name="message"
          value={statusForm.message}
          onChange={handleChange}
        />
        <Button
          sx={{
            margin: "10px",
            backgroundColor: "#1E1E1E",
            color: "red",
            padding: "10px",
            width: "10%",
            borderRadius: "20px"
          }}
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
