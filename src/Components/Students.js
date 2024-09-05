import { useEffect, useState } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Students = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/data')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])
    return (
        <div>
            {
                data && data.length && data.map((ele) => {
                    return (
                        <div >
                            <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"green",margin:"12px"}}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {ele.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                          {ele.college}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Students;