import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register"); // Redirect to /register
  };

  return (
    <div className="h-screen">
      <h1 className="p-6 text-center font-bold text-white text-3xl">
        Start uploading your photos with <br /> <br />Share.ly !
      </h1>
      <div className="flex w-full justify-center p-6">
        <Button className="p-12 text-4xl" onClick={handleGetStarted}>
          Get started !
        </Button>
      </div>
    </div>
  );
}
