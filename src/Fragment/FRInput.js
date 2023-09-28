import React from "react";

// function FRInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }

// new way to define it //1a replace the traditional function to an arrow function then to forward ref we will use the react.forward ref method is going to be assigned to the constant like this
const FRInput = React.forwardRef((props, ref) => {
  // so the arrow function passed as a parameter to the forward ref method and we know that every functional component receives porps as its parameter but  let me tell you   when a component passed as  a parameter to the create ref method it will receive the ref attribute as 2nd parameter and we can use the ref parameter and pass it as a value to the ref attribute on the native input element like this
  return (
    <div>
      {/* like this this ref parameter will point to the value of the ref attribute from the parent component or in other words the ref is being forwareded from parent to native input element or child */}
      <input type="text" ref={ref} />
    </div>
  );
});
export default FRInput;

// what our goal similar to the input.js when we clic kthe button the parentComponent the input from child component should receive focus however unlike last video ref pointing to class component in this video we use the forwarding ref technique to allow parent component direcly reference the native input element
// 1st step create ref on parent compnent
// 2nd step attach ref to child using ref attribute
// 3rd step forwardd this ref to the input  element in child component and fowarding can be achieved using forward ref method from react library
