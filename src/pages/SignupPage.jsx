import { Link } from  "react-router-dom";
export default function SignupPage(){
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-28">
            <h1 className="text-4xl text-center mb-4">Register Here</h1>
            <form className="max-w-md mx-auto ">
                <input type="text" placeholder="enter name here" />
                <input type="email" placeholder="your@email.com"/>
                <input type="password" placeholder="password"/>
                <button className="primary"> Submit </button>
                <div className=" text-center py-2 text-gray-500"> already a member? <Link
                className="underline text-black" to={'/login'}>login</Link></div>
            </form>
            </div>
            
        </div>
    );
}