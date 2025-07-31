import { useState, useEffect } from "react";
const User = (props) => {
  const [count] = useState(0);
  useEffect(() => {
    console.log("use Effect");

    return () => {
      console.log("unmount");
    };
  }, []);
  console.log("Render");
  return (
    <div className="user-card">
      <h1>Count = {count} </h1>
      <h2>Name : Uday</h2>
      <h3>Location : Ghaziabad</h3>
      <h4>Contact : @udaytyagi0014</h4>
    </div>
  );
};
export default User;
