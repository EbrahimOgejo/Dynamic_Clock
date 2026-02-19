import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Dynamic color based on seconds
  const dynamicColor = `hsl(${currentTime.getSeconds() * 6}, 70%, 50%)`;

  const formattedDate = format(currentTime, "EEEE, MMMM do yyyy");
  const formattedTime = format(currentTime, "hh:mm:ss a");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: dynamicColor,
        transition: "background 0.5s ease",
      }}
    >
      <div style={styles.clockContainer}>
        <h2 style={styles.date}>{formattedDate}</h2>
        <h1 style={styles.time}>{formattedTime}</h1>
      </div>
    </div>
  );
}

const styles = {
  clockContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    padding: "50px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
    textAlign: "center",
    color: "white",
    fontFamily: "Segoe UI, sans-serif",
  },
  date: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    letterSpacing: "1px",
  },
  time: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
};

export default App;
