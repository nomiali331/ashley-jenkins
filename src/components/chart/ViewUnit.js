import React, { useEffect, useState } from 'react'
import '../../App.css';
import UnitDataService from "../../services/unit.services"
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useHistory, useLocation} from 'react-router-dom';


function Home(  ) {
const { state } = useLocation();
  const [units, setUnits] = useState([]);
  useEffect(() => {
    getUnits();
    console.log()
  }, [])
  const getUnits = async () => {
    const data = await UnitDataService.getSelectedUnit(state.state);
    console.log(data);
  };

  const history = useHistory();
  return (
    <>
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
                <td>{doc.appli}</td>
                <td>
                  <Button
                    variant='secondary'
                    className='edit'
                
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

    </>
  );
}

export default Home