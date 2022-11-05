import React, { useEffect, useState } from 'react'
import '../../App.css';
import UnitDataService from "../../services/unit.service"
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useHistory} from 'react-router-dom';


function Home( {getUnitId} ) {

  const [units, setUnits] = useState([]);
  useEffect(() => {
    getUnits();
  }, [])
  const getUnits = async () => {
    const data = await UnitDataService.getAllUnit();
    setUnits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  };

  const history = useHistory();
  return (
    <>
        <div className='table-wrap'>
              <h3 className='main-third'>Unit List</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Unit No</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {units.map((doc, index) => {
                  return (
                    <tr key={doc.id}>
                      <td>{index + 1}</td>
                      <td>{doc.newUnit}</td>
                      <td>
                        <Button
                          variant=''
                          className='edit'
                          onClick={(e) => {getUnitId(doc.id)
                            history.push('/viewunit', { state:doc.newUnit})
                          }
                        }
                        >
                          View
                        </Button>

                      </td>
                    </tr>
                  )
                })
                }
              </tbody>
            </Table>
        </div>
    </>
  );
}

export default Home