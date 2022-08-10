import React from 'react'
import { Col, Image, Row } from "react-bootstrap"
import User1 from "../images/user1.jpg"


const ConversationList = () => {
    const users = [{
        name:"ibrahim",
        message:"good morinig"
    }
    ,{
        name:"hamza",
        message:"good morinig"
    },
    {
        name:"ibrahim",
        message:"good morinig"
    }
    ,{
        name:"hamza",
        message:"good morinig"
    },
    {
        name:"ibrahim",
        message:"good morinig"
    }
    ,{
        name:"hamza",
        message:"good morinig"
    },
    {
        name:"ibrahim",
        message:"good morinig"
    }
    ,{
        name:"hamza",
        message:"good morinig"
    }
]
    return (
            <div>
                <div className='bg-chat-img'></div>
            <div style={{overflow:"auto", height:"100vh"}} >
                {
                    users.map(ele => {
                        return (<Row md="2" lg="2" className='bg-card d-flex px-4 py-1 my-3' >
                        <Col lg="4" md="4" style={{backgroundImage:`url(${User1})`}} className="bg-users m-auto"></Col>
                        {/* <Image src={User1} /> */}
                        <Col lg="8" md="8" className="m-auto">
                            <h3>
                                {ele.name}
                            </h3>
                            <p style={{fontSize:"20px"}}>{ele.message}</p>
                        </Col>
                    </Row>)
                    })
                }
                
            </div>
            </div>
    )
}

export default ConversationList
