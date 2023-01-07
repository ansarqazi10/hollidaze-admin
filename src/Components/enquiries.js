import { useEffect, useState } from "react";
import axios from 'axios';

function Enquiries() {
    let [data, setData] = useState([]);
    const port = "https://hollidaze-api.vercel.app/enquiries";

    useEffect(() => {
        axios.get(port)
        .then(res => { setData(res.data) })
        .catch(err => { console.log(err) })
    }, [])

    const delRec = id => {
        axios.delete(`${port}/`+id)
        .then(res => { window.location.href = "https://hollidaze-admin-panel.netlify.app" })
        .catch(err => { console.log(err) })
    }

    return (
        <div className="container">
        <h1 className="m-3">Enquiries</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque praesentium in ipsam itaque numquam incidunt optio. Dolores quaerat recusandae molestiae reiciendis, modi magnam, iusto aliquam praesentium quasi, soluta quod.</p>
            <div className="row">
                <div className="col">
                    <table className="table table-bordered table-hover table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Address</th>
                                <th>Price</th>
                                <th>Contact Number</th>
                                <th>Description</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((elem, idx) => {
                                return <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{elem.address}</td>
                                    <td>{elem.price}</td>
                                    <td>{elem.contactNo}</td>
                                    <td>{elem.description}</td>
                                    <td><button className="btn btn-danger btn-sm" onClick={e => delRec(elem._id)}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );  
}

export default Enquiries;