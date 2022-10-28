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

function UnitCreateForm({ id, setUnitId }) {

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
        console.log(url)
        reader.onloadend = function (e) {
            setimgSrc(reader.result)
            console.log("data-======>", reader.result)
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
        }
        console.log(newUnit);
        try {
            await UnitDataService.addUnits(newUnit);
            setMessage({ error: false, msg: "New Unit added successfully!" });
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
            console.log("fetched data" + docSnap.data().unitNo);
            setModelNo(docSnap.data().modelNo);
            setPoNo(docSnap.data().poNo);
            setSerialNo(docSnap.data().serialNo);
            setApplianceType(docSnap.data().appliance)
            setUnitColor(docSnap.data().colorUnit)
            setAge(docSnap.data().unitNo)
            setimgSrc(docSnap.data().imgsrc)
            //imgsrc(docSnap.data().imgsrc)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        console.log("hello", state.state)
        if (state.state !== undefined && state.state !== "") {
            editHandler();
        }
    }, [id]);
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
                                    <MenuItem value={101}>104</MenuItem>
                                    <MenuItem value={102}>102</MenuItem>
                                    <MenuItem value={103}>103</MenuItem>
                                    <MenuItem value={104}>104</MenuItem>
                                    <MenuItem value={121}>121</MenuItem>
                                    <MenuItem value={122}>122</MenuItem>
                                    <MenuItem value={123}>123</MenuItem>
                                    <MenuItem value={124}>124</MenuItem>
                                    <MenuItem value={201}>201</MenuItem>
                                    <MenuItem value={202}>202</MenuItem>
                                    <MenuItem value={203}>203</MenuItem>
                                    <MenuItem value={204}>204</MenuItem>
                                    <MenuItem value={221}>221</MenuItem>
                                    <MenuItem value={222}>222</MenuItem>
                                    <MenuItem value={223}>223</MenuItem>
                                    <MenuItem value={224}>224</MenuItem>
                                </Select>
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
                                    <MenuItem value={'white'}>White</MenuItem>
                                    <MenuItem value={'black'}>Black</MenuItem>
                                    <MenuItem value={'almond'}>Almond</MenuItem>
                                    <MenuItem value={'StainlessSteel'}>Stainless Steel</MenuItem>
                                </Select>
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
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicimage">
                            <input type="file" onChange={(e) => { handleInputFileChange(e.target.files[0]) }} />
                        </Form.Group>
                        <img src={imgsrc ? imgsrc : ''} className="upload_photo_main" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit">
                            Save & Continue
                        </Button>
                    </Col>
                </Row>

            </Form>
        </>
    );
}

export default UnitCreateForm