import projectimg from './assets/image.png'
function Card(){
    return(
       
        <dev className="card">
            <img className = "card-image" src ={projectimg}alt ="project picture"></img>
            <h2 className = "card-header">ANPR</h2>
            <p className = "card-info">my first project</p>
        </dev>
      
    );
}

export default Card