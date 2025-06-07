export const formatAPIError = (error: unknown) => {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
    };
  }
  return {
    name: 'Unknown',
    message: 'Internal Server Error',
  };
};
