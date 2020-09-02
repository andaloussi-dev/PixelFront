import React,{useEffect,useState} from 'react'
import {getIssueById} from '../Api/Index';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    Col,
    Button
  } from "reactstrap";

const Issue = ({issueId,back}) => {
    const [fatchedData, setFetchedData] = useState({})
    useEffect(() => {
      const fetchData=async()=>{
        setFetchedData( await getIssueById(issueId));
    }
    fetchData();
    }, [setFetchedData])
    return (
        <div>
                <Col md="12">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <h5 className="title">{fatchedData.title}</h5>
 
                    <p className="description">{fatchedData.status}</p>
                  </div>
                  <div className="card-description">
                  {fatchedData.content}
                  </div>
                </CardBody>
                <CardFooter>
                <Button onClick={()=>back()} color="info"><i className="tim-icons icon-minimal-left"></i></Button>
                </CardFooter>
              </Card>
            </Col>
        </div>
    )
}

export default Issue
