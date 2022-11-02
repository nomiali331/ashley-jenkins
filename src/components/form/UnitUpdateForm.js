import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Alert, Col, Row } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { async } from '@firebase/util';
import UnitDataService from "../../services/unit.services"
import { useLocation } from 'react-router-dom';
import unitService from '../../services/unit.service';
import colorService from '../../services/color.service'
import Moment from 'moment';
import Modal from 'react-bootstrap/Modal';

function UnitCreateForm({ id, setUnitId }) {
    const setupdateDate = Moment().format('DD-MM-YYYY')

    const [modelNo, setModelNo] = useState("");
    const [serialNo, setSerialNo] = useState("");
    const [poNo, setPoNo] = useState("");
    const [unitNo, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [colorUnit, setUnitColor] = React.useState('');
    const colorChange = (event) => {
        setUnitColor(event.target.value);
    };
    const [appliance, setApplianceType] = React.useState('');
    const applianceChange = (event) => {
        setApplianceType(event.target.value);
    };

    const [imgsrc, setimgSrc] = React.useState('');
    const handleInputFileChange = (event) => {
        //setimage(event)
        var file = event

        var reader = new FileReader();
        // console.log(file);

        var url = reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            setimgSrc(reader.result)
        };
    }
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (modelNo === "") {
            setMessage({ error: true, msg: "All Fields are mandatory" });
            return;
        }
        const newUnit = {
            modelNo,
            poNo,
            serialNo,
            unitNo,
            colorUnit,
            appliance,
            imgsrc,
            setupdateDate,
        }
        try {
            if (state.state !== undefined && state.state !== "") { 
            await UnitDataService.updateUnit(state.state, newUnit);
            setUnitId("");
            setMessage({ error: false, msg: "Update successfully!" });
            }
            else{
                await UnitDataService.addUnits(newUnit);
                setMessage({ error: false, msg: "New Unit added successfully!" });

            }
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
        setModelNo("");
        setPoNo("")
        setSerialNo("")
        setApplianceType("")
        setUnitColor("")
        setAge("")
        setimgSrc("")
        imgsrc("")
    };

    const { state } = useLocation()
    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await UnitDataService.getUnit(state.state);
            setModelNo(docSnap.data().modelNo);
            setPoNo(docSnap.data().poNo);
            setSerialNo(docSnap.data().serialNo);
            setApplianceType(docSnap.data().appliance)
            setUnitColor(docSnap.data().colorUnit)
            setAge(docSnap.data().unitNo)
            setimgSrc(docSnap.data().imgsrc)
            //imgsrc(docSnap.data().imgsrc)
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
    }
    useEffect(() => {
        if (state.state !== undefined && state.state !== "") {
            editHandler();
        }
    }, [state.state]);

    const [units, setUnits] = useState([]);
    useEffect(() => {
      getUnits();
    }, [])
    const getUnits = async () => {
      const data = await unitService.getAllUnit();
      setUnits(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    const [colors, setColors] = useState([]);
  useEffect(() => {
    getColor();
  }, [])
  const getColor = async () => {
    const data = await colorService.getAllColor();
    setColors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  };
  const [newColor, setNewColor] = useState("");
  const handleColorSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (newColor === "") {
      setMessage({ error: true, msg: "Please Insert Color" });
      return;
    }
    const addNewColor = {
      newColor,
    }
    try {
      await colorService.addColor(addNewColor);
      setMessage({ error: false, msg: "New Color added successfully!" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setNewColor("");
    getColor();

  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow(false);
  const handleShow2 = () => setShow(true);
  const [newUnit, setNewUnit] = useState("");
  const handleUnitSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (newUnit === "") {
      setMessage({ error: true, msg: "All Fields are mandatory" });
      return;
    }
    const addNewUnit = {
      newUnit,
    }
    try {
      await unitService.addUnit(addNewUnit);
      setMessage({ error: false, msg: "New Unit added successfully!" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setNewUnit("");
    getUnits();

  };
    return (
        <>
            {message?.msg && (
                <Alert
                    variant={message?.error ? 'danger' : 'success'}
                    dismissible
                    onClose={() => setMessage("")}
                >
                    {message?.msg}
                </Alert>
            )}
            <div className='create-new-form'>
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Unit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {message?.msg && (
              <Alert
                variant={message?.error ? 'danger' : 'success'}
                dismissible
                onClose={() => setMessage("")}
              >
                {message?.msg}
              </Alert>
            )}
            <Form onSubmit={handleUnitSubmit} >
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicModel">
                    <TextField fullWidth label="Unit No" id="unit-no" value={newUnit} onChange={(e) => setNewUnit(e.target.value)} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className='btn-align'>
                  <Button variant="primary" type="submit">
                    Save & Continue
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
        <Modal show={show} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Color</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {message?.msg && (
              <Alert
                variant={message?.error ? 'danger' : 'success'}
                dismissible
                onClose={() => setMessage("")}
              >
                {message?.msg}
              </Alert>
            )}
            <Form onSubmit={handleColorSubmit} >
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicModel">
                    <TextField fullWidth label="Color" id="Color" value={newColor} onChange={(e) => setNewColor(e.target.value)} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className='btn-align'>
                  <Button variant="primary" type="submit">
                    Save & Continue
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicUnit">
                <FormControl fullWidth>
                  <InputLabel id="unitNoLabel">Unit No.</InputLabel>
                  <Select
                    labelId="unitNoLabel"
                    id="unitNoSelect"
                    value={unitNo}
                    label="Age"
                    onChange={handleChange}
                  >
                    {units.map((doc, index) => {
                    return (
                      <MenuItem value={doc.newUnit}>{doc.newUnit}</MenuItem>
                    )
                  })
                }
                  </Select> 
                  <Button onClick={handleShow}> + </Button>
                </FormControl>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicColor">
                <FormControl fullWidth>
                  <InputLabel id="colorLabel">Color</InputLabel>
                  <Select
                    labelId="colorLabel"
                    id="colorSelect"
                    value={colorUnit}
                    label="Color"
                    onChange={colorChange}
                  >
                   {colors.map((doc, index) => {
                    return (
                      <MenuItem value={doc.newColor}>{doc.newColor}</MenuItem>
                    )
                  })
                }
                  </Select>
                  <Button onClick={handleShow}> + </Button>
                </FormControl>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasictype">
                <FormControl fullWidth>
                  <InputLabel id="applianceType">Appliance Type</InputLabel>
                  <Select
                    labelId="applianceType"
                    id="applianceTypeSelect"
                    value={appliance}
                    label="Appliance Type"
                    onChange={applianceChange}
                  >
                    <MenuItem value={'Refrigerator'}>Refrigerator</MenuItem>
                    <MenuItem value={'Stove'}>Stove</MenuItem>
                    <MenuItem value={'Dishwasher'}>Dishwasher</MenuItem>
                    <MenuItem value={'Rangehood'}>Rangehood</MenuItem>
                    <MenuItem value={'Microwave'}>Microwave</MenuItem>
                    <MenuItem value={'GarbageDisposal'}>Garbage Disposal</MenuItem>
                    <MenuItem value={'Washer'}>Washer</MenuItem>
                    <MenuItem value={'Dryer'}>Dryer</MenuItem>
                    <MenuItem value={'WaterHeater'}>Water Heater</MenuItem>
                    <MenuItem value={'Condenser'}>Condenser</MenuItem>
                    <MenuItem value={'AirHandler'}>Air Handler</MenuItem>
                  </Select>
                </FormControl>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicModel">
                <TextField fullWidth label="Model No." id="model-no" value={modelNo} onChange={(e) => setModelNo(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicSerial">
                <TextField fullWidth label="Serial No." id="serial-no" value={serialNo} onChange={(e) => setSerialNo(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicpo">
                <TextField fullWidth label="PO No." id="po-no" value={poNo} onChange={(e) => setPoNo(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className='image-field'>
              <h4>Add Images</h4>
              <img src={imgsrc ? imgsrc : ''} className="upload_photo_main" />
              <Form.Group className="mb-3 image-file" controlId="formBasicimage">
                <input type="file" onChange={(e) => { handleInputFileChange(e.target.files[0]) }} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className='btn-align'>
              <Button variant="primary" type="submit">
                Save & Continue
              </Button>
            </Col>
          </Row>

        </Form>

      </div>
        </>
    );
}

export default UnitCreateForm