function Channels(){
    return (
        <div className="containChannel">
        <h2 className="channelTitle">Canales</h2>
        
        <ul className="channelList">        
            <li className="channel active" ><a href="#" className=""># Canal 1</a></li>
            <li className="channel "><a href="#"># Canal 2</a></li>
            <li className="channel"><a href="#"># Canal 3</a></li>
        </ul>   
        
        <form className="addChannel">
            <input className="inputChannel" type="text" />
            <button type="submit"><i className="fas fa-plus-circle"></i></button>
        </form>

    </div>
    )
} 

export default Channels;