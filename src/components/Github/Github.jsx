import  { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data , setData] = useState([])
    useEffect(()=>{

        fetch('https://api.github.com/users/abhilasyadav')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
    return (
        <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'> Public Repository: {data.public_repos} 
        <img className='rounded-lg' src={data.avatar_url} alt='Git profile' width={200}/>
        </div>
    )
}

export default Github

// export const githubInfoLoader = async() => {
//     const response = await fetch('https://api.github.com/users/abhilasyadav')
//     return response.json()

// }
