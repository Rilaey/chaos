import * as React from "react"

export const useChangeProfilePicture = () => {
  const [selectedFile, setSelectedFile] = React.useState<unknown>(null);
  const [uploadStatus, setUploadStatus] = React.useState<string>('');

  const handleFileChange = (event: { target: { files: React.SetStateAction<null>[]; }; }) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (id: unknown) => {
    try {
      const formData = new FormData();
      formData.append('profilePicture', selectedFile);

      const response = await fetch(`/api/user/profilePicture/${id}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus('Profile picture uploaded successfully!');
        // Handle any other actions after successful upload if needed
        location.reload()
      } else {
        setUploadStatus('Error uploading profile picture.');
        // Handle error cases if needed
      }
    } catch (error) {
      console.error(error);
      setUploadStatus('Error uploading profile picture.');
      // Handle any other error cases if needed
    }
  };

  return {
    selectedFile,
    uploadStatus,
    handleFileChange,
    handleUpload,
  };
};
