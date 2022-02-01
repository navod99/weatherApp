const DateBuilder = () => {
    
    const datebuilder=(d)=>{
    

        let year=d.getFullYear();
        let date=d.getDate();
        let month=d.getMonth();
        

        
        return ` ${date}/${month}/${year} `;
       
    }



    return ( 
        <div className="datebuilder">
            {datebuilder(new Date())}
            


        </div>
     );
}
 
export default DateBuilder;