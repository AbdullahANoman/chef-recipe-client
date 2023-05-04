import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
  return (
    <>
      
      <div className="mt-10 my-container" ref={ref}>
        <p className="font-bold text-2xl">
          Question - 1 : Differences between uncontrolled and controlled
          components.?
        </p>
        <p className="font-semibold text-xl">Answer : </p>
        <p className="text-xl">
          A controlled component is a component whose value is controlled by
          React's state, while an uncontrolled component is one whose value is
          not controlled by React's state. Controlled components allow you to
          manipulate and validate the value of a form element using React's
          state management. Uncontrolled components do not provide any means to
          control or validate the form element value; instead, they rely on the
          DOM's own state.
        </p>

        <p className="font-bold text-2xl">
          Question - 2 : How to validate React props using PropTypes?
        </p>
        <p className="font-semibold text-xl">Answer : </p>
        <p className="text-xl">
          To validate React props using PropTypes, you need to import the
          'prop-types' module and declare the expected prop types for the
          component. PropTypes provide a way to validate the expected type,
          required properties, and default values for the props passed to a
          component.
        </p>

        <p className="font-bold text-2xl">
          Question - 3 : Difference between nodejs and express js.
        </p>
        <p className="font-semibold text-xl">Answer : </p>
        <p className="text-xl">
          Node.js is a runtime environment that allows you to run JavaScript
          code outside of a web browser. It is based on the V8 JavaScript engine
          and provides an event-driven, non-blocking I/O model that makes it
          ideal for building scalable, high-performance network applications.
          Express.js is a web application framework built on top of Node.js. It
          provides a set of tools and features that simplify the process of
          building web applications, such as routing, middleware, and templating
          engines.
        </p>

        <p className="font-bold text-2xl">
          Question - 4 : What is a custom hook, and why will you create a custom
          hook?
        </p>
        <p className="font-semibold text-xl">Answer : </p>
        <p className="text-xl">
          A custom hook is a reusable function that encapsulates a specific
          piece of functionality in a React application. It can be used to
          abstract away complex logic and state management and can be shared
          across multiple components.
        </p>
      </div>
      <div className="my-container ">
      <div className="text-center mt-10">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn-primary " onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      </div>
      </div>
    </>
  );
};

export default Blog;
