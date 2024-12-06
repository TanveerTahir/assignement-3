

const ChildernComponent = (props:any) => {
    return (
        <div className=" h-fit text-7xl bg-blue-950 text-center text-white">
    
            {props.name}
            {props.color}
            {props.food}
        </div>
    )
}

export default ChildernComponent