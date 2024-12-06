import ChildernComponent from "./ChildernComponent"

const ParentComponent = () => {
    let name = "TANVEER"
    let food = "Biryani"
    let color = "Black"
    return (
    <div className="w-fit text-5xl">
       <h1 className="bg-fuchsia-500 text-center text-gray-300"> My Name is: </h1> <ChildernComponent name={name}/> 
        <h1 className="bg-fuchsia-500 text-center text-gray-300">My favorite food is: </h1><ChildernComponent food={food}/>
       <h1 className="bg-fuchsia-500 text-center text-gray-300">my favorite color is: </h1> <ChildernComponent color={color}/>
    </div>
    )
}

export default ParentComponent