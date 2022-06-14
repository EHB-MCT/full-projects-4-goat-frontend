import { useEffect, useState } from 'react'
import cover_1 from '../../../Assets/cover_1.png'
import cover_2 from '../../../Assets/cover_2.png'
import cover_3 from '../../../Assets/cover_3.png'
import cover_4 from '../../../Assets/cover_4.png'
import cover_5 from '../../../Assets/cover_5.png'
import cover_6 from '../../../Assets/cover_6.png'
import '../../../SCSS/DetailSide.scss'


export default function DetailSide(props: any) {

    const [cover, setCover] = useState(String)

    useEffect(() => {

        console.log(props.cassette.cassetteNumber)
    
        if (props.cassette.cassetteNumber === 1){
            setCover(cover_1)
        }else if (props.cassette.cassetteNumber === 2){
            setCover(cover_2)
        } else if (props.cassette.cassetteNumber === 3){
            setCover(cover_3)
        }else if (props.cassette.cassetteNumber === 4){
            setCover(cover_4)
        }else if (props.cassette.cassetteNumber === 5){
            setCover(cover_5)
        }else if (props.cassette.cassetteNumber === 6){
            setCover(cover_6)
        }
    }, [])


    return (
    <div>
        <img src={cover} alt="" className='cover'/>
    </div>
    )
}