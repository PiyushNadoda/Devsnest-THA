import { useState } from "react";

const Meme = ({meme, setMeme}) => {
    const [form, setForm] = useState({
        template_id:meme.id,
        username:"Piyush0078",
        password:"PIYUSH@img",
        boxes: [],
    })


    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box, index) => {
        url += `&boxes[${index}][text]=${box.text}`
        if(box.text === ""){
            alert("fill all the valus")
        }
        return "";
    })
    
    for(let i=0; i< form.boxes.length; i++){
        if(form.boxes[i].text === ""){
            break;
        } else{
            console.log(form.boxes.forEach( box => box === null ));
            fetch(url)
            .then(res => res.json())
            .then(data =>  {
                setMeme({...meme, url: data.data.url})
            })
        }
    }
    };

    return(
        <div className="meme">
            <img src={meme.url} alt="" />
            <div>
            {
                [...Array(meme.box_count)].map((_, index) => (
                    <input type="text" key={index} placeholder={`Meme Caption ${index+1}`} onChange={(e)=>{
                        const newBoxes = form.boxes;
                        newBoxes[index] = {text: e.target.value}
                        setForm({...form, boxes: newBoxes})
                    }}/>               
                     ))
            }</div>
            <div>
                <button onClick={generateMeme}>Generate Meme</button>
                <button onClick={() => setMeme(null)} > Choose template</button>
            </div>
        </div>
    )
}

export default Meme;