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
    <div className="flex justify-center mt-3 md:mt-0">
      <div className="w-full ">
        <div className="flex flex-row gap-2">
          <Input.TextArea
            name="message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Write your comment"
            rows={1}
          />
          <div className="flex justify-center">
            <button
              className="bg-[#f14c36] px-5 py-2 rounded-md text-white"
              onClick={handleChange}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-md md:text-[18px] mb-3">Comments</h1>
          {review?.map((item, i) => (
            <div key={i}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceReview;
