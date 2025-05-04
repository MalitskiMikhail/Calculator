type GreetProps = {
    name: string
}

export const Greet = (props: GreetProps) => {
 return (
     <div>
         <h2> Welcome {props.name} ! Epta</h2>
     </div>

 )
}