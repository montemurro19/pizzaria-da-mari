export default function InputText({label, id, register=()=>{}, name, ...props}){
    return(
        <div className="flex flex-col gap-1 my-2">
            <label htmlFor={id} className="text-m text-gray-700">{label}</label>
            <input 
                className="bg-amber-200 border-b border-gray-700"
                type="text" 
                id={id} 
                {...register(name)}
                {...props}
            />
        </div>
    )
}