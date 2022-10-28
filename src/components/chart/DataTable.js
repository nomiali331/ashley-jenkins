import React, { useEffect, useState } from 'react'
import '../../App.css';
import UnitDataService from "../../services/unit.services"
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

  const deleteHandler = async (id) => {
    await UnitDataService.deleteUnit(id);
    getUnits();
  };

  const history = useHistory();
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {units.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.unitNo}</td>
                <td>{doc.serialNo}</td>
                <td>
                  <Button
                    variant='secondary'
                    className='edit'
                    onClick={(e) => {getUnitId(doc.id)
                      history.push('/update', { state:doc.id})
                    }
                  }
                  >
                    Edit
                  </Button>
                  <Button
                    variant='danger'
                    className='delete'
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
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