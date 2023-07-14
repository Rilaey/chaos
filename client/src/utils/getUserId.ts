export const getUserId = (): string => {
    const userJson: string | null = localStorage.getItem("user");
    const toJson: { user: { _id: string } } = JSON.parse(userJson as string);
    const statusCreator: string = toJson.user._id;

    return statusCreator;
  };