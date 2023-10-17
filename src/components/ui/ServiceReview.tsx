import { Button, Input } from "antd";
import { useState } from "react";

function ServiceReview() {
  const [inputValue, setInputValue] = useState<string>("");
  console.log(inputValue);

  const [review, setReview] = useState<any[]>([]);

  console.log(review);

  const handleChange = () => {
    setReview([...review, inputValue]);
    setInputValue("");
  };

  return (
    <div className="flex justify-center mt-3">
      <div className="w-full md:w-2/4">
        <Input.TextArea
          name="message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write your comment"
        />
        <div className="flex justify-center">
          <Button
            className="bg-blue-500 mt-3"
            type="primary"
            onClick={handleChange}
          >
            Add
          </Button>
        </div>
        <div className="mt-4">
          {review?.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceReview;
