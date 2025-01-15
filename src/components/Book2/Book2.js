import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Supportpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // State to manage the selected date
  const [selectedDate, setSelectedDate] = useState("");
  console.log(!selectedDate.length > 0);

  const onSubmit = (data) => {
    // Alert the form data after submission
    alert(JSON.stringify(data));
    alert(selectedDate);
    // Reset the form after submission
    reset();
  };

  return (
    <div className="container my-5">
      <div class=" mt-5 d-flex justify-content-center my-5"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group text-black my-3">
          <label htmlFor="name" className="text-black">
            Name
          </label>
          <input
            type="text"
            className="form-control bg-body-secondary"
            id="name"
            placeholder="Enter Name"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-danger">Name is required</span>}
        </div>
        <div className="form-group text-white my-3">
          <label htmlFor="number" className="text-black">
            Phone Number
          </label>
          <input
            className="form-control bg-body-secondary"
            id="number"
            placeholder="Enter Number"
            {...register("number", { required: true })}
          />
          {errors.number && (
            <span className="text-danger">Number is required</span>
          )}
        </div>
        <div className="form-group text-white my-3">
          <label htmlFor="time" className="text-black">
            Time
          </label>
          <select
            className="form-control bg-body-secondary"
            id="time"
            {...register("time", { required: true })}
          >
            <option value="">Select Time</option>
            <option value="Day">Day</option>
            <option value="Night">Night</option>
          </select>
          {errors.time && <span className="text-danger">Time is required</span>}
        </div>

        <div className="form-group text-white my-3">
          <label htmlFor="calendar" className="text-black">
            Date
          </label>
          <br></br>
          <ReactDatePicker
            className="form-control bg-body-secondary"
            id="calendar"
            selected={selectedDate} // Use the selected date state
            onChange={(date) => setSelectedDate(date)} // Update selected date state
            placeholderText="Calendar"
            //  {...register("calendar", { required: true })}
            dateFormat="dd-MM-yyyy" // Customize date format if needed
          ></ReactDatePicker>
          {errors.calendar && (
            <span className="text-danger">Date is required</span>
          )}
        </div>

        <div class="d-flex justify-content-center my-5">
          <button
            type="submit"
            className="btn bg-dark text-white "
            disabled={selectedDate.length <= 0}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Supportpage;
