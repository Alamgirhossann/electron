export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_URL ||
    "https://electron-backend-server.vercel.app/api/v1"
  );
};
