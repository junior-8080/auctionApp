import React, { useEffect, useState } from "react";
import moment from "moment/moment";

interface CountdownProps {
  targetTime: string;
  targetDate: any;
  className?: string;
  text?: string;
  onExpire?: () => void;
}

const CountdownComponent: React.FC<CountdownProps> = ({
  targetTime,
  targetDate,
  className,
  onExpire,
  text,
}) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDateTime = `${moment(targetDate).format(
        "YYYY-MM-DD",
      )}T${targetTime}:00Z`;
      const launchDateTime = new Date(targetDateTime);

      const now = new Date().getTime();
      // @ts-ignore
      const distance = launchDateTime - now;

      if (distance <= 0 && onExpire) onExpire();
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // setTimeLeft(
      //   `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      // );
      setTimeLeft(`${hours} hours, ${minutes} minutes`);
    };

    const intervalId = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(intervalId);
  }, [targetTime, targetDate]);

  return (
    <div className={`text-center ${className}`}>
      <p className={`text-2xl ${className}`}>
        {timeLeft} {text}
      </p>
    </div>
  );
};

export default CountdownComponent;
