import React from 'react'
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
    return (
        <div>
            <Row>
            <Col lg="8" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Publishers</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" >
                      
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Created_date</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>

                     {fetchedData.map((publisher,i) =>{
                         return (
                            <tr>
                            <td key={i} value={publisher.id}>{publisher.name}</td>
                            <td key={i} value={publisher.id}>{new Date(publisher.created_at).toDateString()}</td>
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
                                    onClick={ async ()=>{/*pbi=publisherId;fetchTrackingLists(publisher.id);*/}}
                                >
                                    Daily Tracking 
                                </DropdownItem>
                                <DropdownItem
                                    color="red"
                                    onClick={()=>deletePub(publisher.id)}
                                >
                                    Delete
                                </DropdownItem>
                          <DropdownItem
                            onClick={()=>{/*setIsUpdate(1);setIPublisherId(publisher.id)*/}}
                           >
                            Update
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
                  <h6 className="title d-inline">Publisher</h6>
                </CardHeader>
                <CardBody>
                <Form>
                    <Row>
                      <Col className="pr-md-1" md="12">
                        <FormGroup >
                          <label>Publisher Name</label>
                          <Input
                            placeholder="Name"
                            type="text"
                            onChange={(e)=>setPublisherName(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button onClick={()=>isUpdate?updatePub(publisherId,publisherName):AddPub(publisherName)}  className="btn-fill" color="info" type="submit">
                   {isUpdate? "Update" : "Save"}
                  </Button>
                  {isUpdate ? updateBtn : null}   
                  <ToastContainer />
                </CardFooter>
              </Card>
            </Col>
            
          </Row>
        </div>
    )
}

export default Customer
