import React,{useEffect,useState} from 'react';
import {getAllIssues,createIssue,deleteIssue} from '../Api/Index';
import Issue from './Issue'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardFooter,
    FormGroup,
    Input,
    Form,
    Table,
    Row,
    Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
  } from "reactstrap";


const Customer = () => {

  const [fetchedData,setFetchedData]=useState([]);
  const [title,setTitle]=useState([]);
  const [content,setContent]=useState([]);
  const [isClicked,setIsClicked]=useState(1);
  const [issueId,setissueId]=useState(0);

  const back=()=>{
    setIsClicked(1);
  }
  const user_id=localStorage.getItem('Id');
   useEffect(()=>{
      const fetchData=async()=>{
          setFetchedData(await getAllIssues());
      }
      fetchData();
  },[setFetchedData,setissueId])


    return (
        <div>
           {isClicked ?
           <Row>
           <Col lg="8" md="12">
             <Card>
               <CardHeader>
                 <CardTitle tag="h4">Issues</CardTitle>
               </CardHeader>
               <CardBody>
                 <Table className="tablesorter" >
                     
                   <thead className="text-primary">
                     <tr>
                       <th>Title</th>
                       <th>Status</th>
                       <th>Options</th>
                     </tr>
                   </thead>
                   <tbody>
       
                    {fetchedData.map((issue,i) =>{
                        return (
                           <tr>
                           <td> <a style={{cursor:"pointer"}} onClick={()=>{ console.log('clicked');setIsClicked(0);setissueId(issue.id)}}>  <h6>{issue.title}</h6></a></td>
                           <td> {issue.status}</td>
                           <td>
                           <UncontrolledDropdown>
                               <DropdownToggle
                                   caret
                                   className="btn-icon"
                                   color="link"
                                   data-toggle="dropdown"
                                   type="button"
                                   >
                                   <i className="tim-icons icon-settings-gear-63" />
                               </DropdownToggle>
                           <DropdownMenu aria-labelledby="dropdownMenuLink" center>
                               <DropdownItem
                                   color="red"
                                   onClick={ async ()=>{await deleteIssue(issue.id);setFetchedData(await getAllIssues())}}
                               >
                                   Delete
                               </DropdownItem>
                       </DropdownMenu>
                     </UncontrolledDropdown>
                        </td>
                        </tr>
                    )
                    }
                   )}
                   </tbody>
                 </Table>
               </CardBody>
             </Card>
           </Col>
       
           <Col lg="4" md="12">
             <Card className="card-tasks">
               <CardHeader>
                 <h6 className="title d-inline">Create an Issue</h6>
               </CardHeader>
               <CardBody>
               <Form>
                   <Row>
                     <Col className="pr-md-1" md="12">
                       <FormGroup >
                         <label>Issue Title</label>
                         <Input
                           placeholder="Title"
                           type="text"
                           onChange={(e)=>setTitle(e.target.value)}
                         />
                         <label>Issue Content</label>
       
                         <Input type="textarea" placeholder="Content" onChange={(e)=>setContent(e.target.value)}/>
       
                       </FormGroup>
                     </Col>
                   </Row>
                 </Form>
               </CardBody>
               <CardFooter>
                 <Button  onClick={async()=>{createIssue({title,content,user_id});setFetchedData(await getAllIssues())}}  className="btn-fill" color="info" type="button">
                   Save
                 </Button>
               </CardFooter>
             </Card>
           </Col>
           
         </Row>
           :  <Issue back={back} issueId={issueId}></Issue>
           }
        </div>
    )
}

export default Customer
