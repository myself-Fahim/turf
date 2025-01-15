// import React from "react";
// function Login() {
//   return (
//     <div class=" login templete d-flex justify-content-center mt-5 100-w vh-50">
//       <div class=" mt-5 40-w p-5 mb-2 bg-light text-dark rounded">
//         <form>
//           <div class="mb-3">
//             <label for="exampleInputUsername1" class="form-label text-black">
//               Username
//             </label>
//             <input
//               type="Username"
//               placeholder="Enter Username"
//               class="form-control bg-transparent "
//               id="exampleInputUsername1"
//             />
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputEmail1" class="form-label text-black">
//               Email address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               class="form-control bg-transparent"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputPassword1" class="form-label text-black">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               class="form-control bg-transparent"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div class="d-grid">
//             <button
//               type="login"
//               class="btn bg-dark text-white rounded-circle fs-6 "
//             >
//               Login
//             </button>
//           </div>
//           {/* <div className="row"> */}
//           {/* <p class="text-white my-2">
//               <a href="" class="text-dark ">
//                 Forgot Password?
//               </a>
//             </p> */}
//           <p className="text-black my-3">
//             Don't have any account?
//             <a href="/signup" class="text-dark nav link">
//               SignUp
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Login;

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Supportpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // State to manage the selected date
  // const [selectedDate, setSelectedDate] = useState("");
  // console.log(!selectedDate.length > 0);

  const onSubmit = (data) => {
    // Alert the form data after submission
    alert(JSON.stringify(data));
    // alert(selectedDate);
    // Reset the form after submission
    reset();
  };
  return (
    <div class=" login templete d-flex justify-content-center mt-5 100-w vh-50">
      <div class=" mt-5 40-w p-5 mb-2 bg-light text-dark rounded">
        <form>
          <div class="mb-3">
            <label
              htmlFor="exampleInputUsername1"
              class="form-label text-black"
            >
              Username
            </label>
            <input
              type="Username"
              placeholder="Enter Username"
              class="form-control bg-transparent "
              id="exampleInputUsername1"
              {...register("exampleInputUsername1", { required: true })}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label text-black">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              class="form-control bg-transparent"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("exampleInputEmail1", { required: true })}
            />
          </div>
          <div class="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              class="form-label text-black"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              class="form-control bg-transparent"
              id="exampleInputPassword1"
              {...register("exampleInputPassword1", { required: true })}
            />
          </div>
          <div class="d-grid">
            <button
              type="login"
              class="btn bg-dark text-white rounded-circle fs-6 "
            >
              Login
            </button>
          </div>
          {/* <div className="row"> */}
          {/* <p class="text-white my-2">
                  <a href="" class="text-dark ">
                    Forgot Password?
                  </a>
                </p> */}
          <p className="text-black my-3">
            Don't have any account?
            <a href="/signup" class="text-dark nav link">
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Supportpage;
