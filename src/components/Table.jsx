const TableRow = ({ dataMap }) => {
    return (
        <table
            style={{
                borderCollapse: "collapse",
                width: "100%",
                marginTop: "10px",
                color:"white",
              
                

            }}
        >
            <tr
                style={{
                    marginBottom: "10px",
                   
                    margin:"10px",

                }}
            >
                <th>Sl. No.</th>
                <th>Names</th>
                <th>Points</th>
            </tr>
            {
                dataMap.map((data, index) => {
                    return(<tr key={index}>
                        {
                            (data) ? data.map((item, index) => <td style={{
                                fontSize: "14px",
                             
                            }} className="table-row" key={index}>{item}</td>) : null
                        }
                        <td>
                        </td>
                    </tr>)
                })
            }
        </table> 
    );
}

export default TableRow;