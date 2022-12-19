export default process.env.NODE_ENV === "development"
  ? `http://localhost:2300/api/v1/`
  : `https://izon-voice.vercel.app/api/v1/`;
