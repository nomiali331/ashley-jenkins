import React, { useEffect, useState } from 'react'
import '../../App.css';
import UnitDataService from "../../services/unit.services"
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useHistory, useLocation} from 'react-router-dom';


function Home( {id, setUnitId} ) {
  const [units, setUnits] = useState([]);
  useEffect(() => {
    const test = UnitDataService.getSelectedUnit(state.state).then(r => console.log(r));
    
   console.log("state =>",state.state)
   getUnits();
  }, [])
  const getUnits = async () => {
    const data = await UnitDataService.getSelectedUnit(state.state);
    if(!data.empty)
      setUnits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      
    else{
      console.log('error')
    }
  };
  const history = useHistory();
  const { state } = useLocation();
  return (
    <>
    <div className='table-wrap'>
        <h3 className='main-third'>Unit No:  {state.state}</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Unit No</th>
              <th>Appliance Type</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {units.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.setCurrentDate}</td>
                  <td>{doc.unitNo}</td>
                  <td>{doc.appliance}</td>
                  <td>{doc.setupdateDate ? doc.setupdateDate : '-'}</td>
                  <td>
                  <Button
                      variant=''
                      className='edit'
                      onClick={(e) => {
                        history.push('/update', { state:doc.id})
                      }
                    }
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              )
            })
            }
          </tbody>
        </Table>
        <div className='text-center'>
            <a href="#" className='text-dark'>View All</a>
        </div>
      </div>

    </>
  );
}

export default Home