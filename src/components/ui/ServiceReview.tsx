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
            className="bg-[#1677ff] mt-3"
            type="primary"
            onClick={handleChange}
          >
            Add
          </Button>
        </div>
        <div className="mt-4">
          {review?.map((item, i) => (
            <div key={i}>
              <h1 className="text-md md:text-xl mb-3">Comments</h1>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceReview;
