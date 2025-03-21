import {
  Button,
  Input,
  Select,
  Option,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const ContactUsModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 w-full lg:max-w-lg xl:max-w-2xl h-full lg:h-[85vh] xl:h-[75vh] flex flex-col">
        <h2 className="text-xl font-bold mb-1 text-center">
          Get in Touch with Us
        </h2>
        <Typography
          as="paragraph"
          variant="paragraph"
          className="text-sm text-center mb-6 font-thin text-blue-gray-800"
        >
          Fill in your details, and our team will reach out to you shortly.
        </Typography>
        <div className="md:flex-grow md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4">
          <div>
            <Input label="First Name" required />
          </div>
          <div>
            <Input label="Last Name" required />
          </div>
          <div>
            <Input label="Contact Number" required />
          </div>
          <div>
            <Input label="Email Address" required />
          </div>
          <div className="md:col-span-2">
            <Select label="Select a Service" required>
              <Option value="0">Select a Service</Option>
              <Option value="1">Sales</Option>
              <Option value="2">Support</Option>
              <Option value="3">Feedback</Option>
            </Select>
          </div>
          <div className="md:col-span-2 h-full">
            <Textarea
              label="Project Description"
              className="h-80"
              size="lg"
              resize={true}
              required
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-end">
          <Button
            className="w-full py-2 px-4 rounded mt-4 mr-4"
            onClick={onClose}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            className="w-full bg-gray-500 text-white py-2 px-4 rounded mt-4"
            onClick={() => alert("Form Submitted!")}
            variant="filled"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
