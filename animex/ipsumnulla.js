const scene = {
  name: "Example Scene",
  description: "This is an example scene",
  objects: [
    { name: "Object 1", type: "Cube" },
    { name: "Object 2", type: "Sphere" }
  ]
};

const keys$1 = ["name", "description", "objects"];
const indent = 2;

const jsonString = JSON.stringify(scene, keys$1, indent);
console.log(jsonString);
