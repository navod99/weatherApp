const DateBuilder = () => {

    const datebuilder=(d)=>{   
        let year=d.getFullYear();
        let date=d.getDate();
        let month=d.getMonth();
        let today = new Date(),

        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        
        return ` ${date}/${month}/${year} ${time} `;
       
    }
    return ( 
        <div className="datebuilder">
            {datebuilder(new Date())}
        </div>
     );
}
 
export default DateBuilder;