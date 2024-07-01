import React from 'react'
import { useState } from "react";
import { db } from "./Firebase-config";
import { collection, addDoc } from "@firebase/firestore";
import '../styles/Form.css';
import '../styles/Personal.css';
 import image from '../imgs/Comsats.jpg';




const Form = () => {

  const [newPersonal, setNewPersonal] = useState();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewPersonal(value);
  };
  const handleChange1 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewist(value);
  };
  const handleChange2 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewsec(value)
  };
  const handleChange3 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewthird(value)
  };
  const handleChange4 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewfourth(value)
  };
  const handleChange5 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewfifth(value)
  };
  const handleChange6 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewsixth(value)
  };
  const handleChange7 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewseventh(value)
  };
  const handleChange8 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNeweight(value)
  };
  const handleChange9 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewninth(value)
  };
  const handleChange10 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewtenth(value)
  };
  const handleChange11 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNeweleventh(value)
  };
  const handleChange12 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewtwelve(value)
  };
  const handleChange13 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewthirteen(value)
  };
  const handleChange14 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewbday1(value)
  };
  const handleChange15 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewbday2(value)
  };
  const handleChange16 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewbday3(value)
  };
  const handleChange17 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewbday4(value)
  };
  const handleChange18 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewbday5(value)
  };
  const handleChange19 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewbday6(value)
  };
  const handleChange20 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewbday7(value)
  };
  const handleChange21 = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNewbday8(value)
  };



  const [newist, setNewist] = useState();
  const [newsec, setNewsec] = useState();
  const [newthird, setNewthird] = useState();
  const [newfourth, setNewfourth] = useState();
  const [newfifth, setNewfifth] = useState();
  const [newsixth, setNewsixth] = useState();
  const [newseventh, setNewseventh] = useState();
  const [neweight, setNeweight] = useState();
  const [newninth, setNewninth] = useState();
  const [newtenth, setNewtenth] = useState();
  const [neweleventh, setNeweleventh] = useState();
  const [newtwelve, setNewtwelve] = useState();
  const [newthirteen, setNewthirteen] = useState();
  const [newdesignation, setNewdesignation] = useState();
  const [newDate, setNewDate] = useState();
  const [newDepartment, setNewDepartment] = useState();
  const [newDistrict, setNewDistrict] = useState();
  const [newBPS, setBPS] = useState();
  const [newDealingAccount, setNewDealingAccount] = useState();
  const [Newname1, setNewname1] = useState();
  const [Newname2, setNewname2] = useState();
  const [Newname3, setNewname3] = useState();
  const [Newname4, setNewname4] = useState();
  const [Newname5, setNewname5] = useState();
  const [Newname6, setNewname6] = useState();
  const [Newname7, setNewname7] = useState();
  const [Newname8, setNewname8] = useState();
  const [Newname9, setNewname9] = useState();
  const [Newname10, setNewname10] = useState();
  const [Newname11, setNewname11] = useState();
  const [Newname12, setNewname12] = useState();
  const [Newname13, setNewname13] = useState();
  const [Newname14, setNewname14] = useState();
  const [Newname15, setNewname15] = useState();
  const [Newname16, setNewname16] = useState();
  const [Newname17, setNewname17] = useState();
  const [Newname18, setNewname18] = useState();
  const [Newname19, setNewname19] = useState();
  const [Newfather1, setNewfather1] = useState();
  const [Newfather2, setNewfather2] = useState();
  const [Newfather3, setNewfather3] = useState();
  const [Newfather4, setNewfather4] = useState();
  const [Newfather5, setNewfather5] = useState();
  const [Newfather6, setNewfather6] = useState();
  const [Newfather7, setNewfather7] = useState();
  const [Newfather8, setNewfather8] = useState();
  const [Newfather9, setNewfather9] = useState();
  const [Newfather10, setNewfather10] = useState();
  const [Newfather11, setNewfather11] = useState();
  const [Newfather12, setNewfather12] = useState();
  const [Newfather13, setNewfather13] = useState();
  const [Newfather14, setNewfather14] = useState();
  const [Newfather15, setNewfather15] = useState();
  const [bday1, setNewbday1] = useState();
  const [bday2, setNewbday2] = useState();
  const [bday3, setNewbday3] = useState();
  const [bday4, setNewbday4] = useState();
  const [bday5, setNewbday5] = useState();
  const [bday6, setNewbday6] = useState();
  const [bday7, setNewbday7] = useState();
  const [bday8, setNewbday8] = useState();
  const [Newmale, setNewMale] = useState();
  const [Newfemale, setNewfemale] = useState();
  const [Newbd, setNewbd] = useState();
  const [mof, setNewmof] = useState();
 
  const userCollectionRef = collection(db, "Info");

  const cnicNo = [
    newist,
    newsec,
    newthird,
    newfourth,
    newfifth,
    newsixth,
    newseventh,
    neweight,
    newninth,
    newtenth,
    neweleventh,
    newtwelve,
    newthirteen
  ].join("");
  let str = cnicNo.toString();
  const name = [
    Newname1,
    Newname2,
    Newname3,
    Newname4,
    Newname5,
    Newname6,
    Newname7,
    Newname8,
    Newname9,
    Newname10,
    Newname11,
    Newname12,
    Newname13,
    Newname14,
    Newname15,
    Newname16,
    Newname17,
    Newname18,
    Newname19,
  ].join("");

  const father = [
    Newfather1,
    Newfather2,
    Newfather3,
    Newfather4,
    Newfather5,
    Newfather6,
    Newfather7,
    Newfather8,
    Newfather9,
    Newfather10,
    Newfather11,
    Newfather12,
    Newfather13,
    Newfather14,
    Newfather15,
  ].join("");

  const date = [
    bday1,
    bday2,
    bday3,
    bday4,
    bday5,
    bday6,
    bday7,
    bday8,
  ].join("");

  const gender = [
    Newmale,
    Newfemale,
  ].join("");

  const createUser = () => {

    if (newPersonal.trim().length === 0) {
      alert('personal is empty')
    }
    else if (newdesignation.trim().length === 0) {

      alert('designation is empty')
    }
    else if (newDate.trim().length === 0) {

      alert('date is empty')
    }
    else if (newBPS.trim().length === 0) {

      alert('BPS is empty')
    }
    else if (newDepartment.trim().length === 0) {

      alert('Department is empty')
    }
    else if (newDistrict.trim().length === 0) {

      alert('District is empty')
    }
    else if (newDealingAccount.trim().length === 0) {
      alert('Dealing Account is empty')
    }
    else if (newist.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (newsec.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (newthird.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (newfourth.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (newfifth.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (newsixth.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (newseventh.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (neweight.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (newninth.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (newtenth.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (neweleventh.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (newtwelve.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (newthirteen.trim().length === 0) {
      alert('CNIC is not properly filled')
    }
    else if (bday1.trim().length === 0) {
      alert('Date is not properly filled')
    }
    else if (bday2.trim().length === 0) {
      alert('Date is not properly filled')
    }
    else if (bday3.trim().length === 0) {
      alert('Date is not properly filled')
    }
    else if (bday4.trim().length === 0) {
      alert('Date is not properly filled')
    }
    else if (bday5.trim().length === 0) {
      alert('Date is not properly filled')
    }
    else if (bday6.trim().length === 0) {
      alert('Date is not properly filled')
    }
    else if (bday7.trim().length === 0) {
      alert('Date is not properly filled')
    }
    else if (bday8.trim().length === 0) {
      alert('Date is not properly filled')
    }


    else {
      addDoc(userCollectionRef, { personal: Number(newPersonal), desination: newdesignation, date: newDate, BPS: newBPS, department: newDepartment, district: newDistrict, dealingAccount: newDealingAccount, CNIC: str, name: name, father: father, Date: date, Gender: gender, Blood_Group: Newbd, Mark_of_identification: mof });
      setNewPersonal(' ');
      setNewdesignation(' ');
      setNewDate(' ');
      setBPS(' ');
      setNewDepartment(' ');
      setNewDistrict(' ');
      setNewDealingAccount(' ');
      setNewist('');
      setNewsec('');
      setNewthird('');
      setNewfourth('');
      setNewfifth('');
      setNewsixth('');
      setNewseventh('');
      setNeweight('');
      setNewninth('');
      setNewtenth('');
      setNeweleventh('');
      setNewtwelve('');
      setNewthirteen('');
      setNewname1('');
      setNewname2('');
      setNewname3('');
      setNewname4('');
      setNewname5('');
      setNewname6('');
      setNewname7('');
      setNewname8('');
      setNewname9('');
      setNewname10('');
      setNewname11('');
      setNewname12('');
      setNewname13('');
      setNewname14('');
      setNewname15('');
      setNewname16('');
      setNewname17('');
      setNewname18('');
      setNewname19('');
      setNewfather1('');
      setNewfather2('');
      setNewfather3('');
      setNewfather4('');
      setNewfather5('');
      setNewfather6('');
      setNewfather7('');
      setNewfather8('');
      setNewfather9('');
      setNewfather10('');
      setNewfather11('');
      setNewfather12('');
      setNewfather13('');
      setNewfather14('');
      setNewfather15('');
      setNewbday1('');
      setNewbday2('');
      setNewbday3('');
      setNewbday4('');
      setNewbday5('');
      setNewbday6('');
      setNewbday7('');
      setNewbday8('');
      setNewMale('');
      setNewfemale('');
      setNewbd('');
      setNewmof('');
      alert('data is submitted successfuly')
    }


  };

  return (
    <>
      <img src={image} alt="Failed to download" id='img' />
      <h1 id="govt">Comsats Isalambad</h1>
      <h1 id="generel">Sahiwal Campus</h1>
      {/* <h1 id="kybar">Khyber Pakhtunkhwa</h1> */}

      <div className="container">
        <h1 id="card">PENSIOR'S IDENTITY CARD FORM</h1>
      </div>

      <fieldset className="feild">

        <label htmlFor="" id='personal'>FPersonal No. <input id='text' value={newPersonal} onChange={handleChange} /></label>
        <label htmlFor="" id='designation'>FRetired as/Designation.<input id='text2' value={newdesignation} onChange={(event) => { setNewdesignation(event.target.value); }} /></label><br />
        <label htmlFor='' id="Date">FDate of Retirment. <input type="date" id="text1" value={newDate} onChange={(event) => { setNewDate(event.target.value); }} /></label>
        <label htmlFor='' id="bps">BPS <input type="text" id="text3" value={newBPS} onChange={(event) => { setBPS(event.target.value); }} /><p id="para">(BPS at the time Retirment)</p></label>
        <label htmlFor='' id="Department">Department <input type="text" id="text4" value={newDepartment} onChange={(event) => { setNewDepartment(event.target.value); }} /></label>
        <label htmlFor='' id="District">District <input type="text" id="text5" value={newDistrict} onChange={(event) => { setNewDistrict(event.target.value); }} /></label><br />
        <label htmlFor='' id="dealing">Dealing Account <input type="text" id="text6" value={newDealingAccount} onChange={(event) => { setNewDealingAccount(event.target.value) }} /></label>
        <fieldset className="img1"><h1 id="clip">clip Attested <br />(backside) <br /> Passport size <br /> photograph</h1></fieldset>
      </fieldset>
      <fieldset className='feild1'>
        {/* <Personal/> */}
        <div className="lengend">
          <legend>Personal Information</legend>
          <h1 id='line'>a</h1>
        </div>
        <label htmlFor="" id='cnic'>1. New CNIC Number 	<input type="text" id='ist' maxLength="1" value={newist} onChange={handleChange1} />
          <input type="text" id="sec" maxLength="1" value={newsec} onChange={handleChange2} />
          <input type="text" id="third" maxLength="1" value={newthird} onChange={handleChange3} />
          <input type="text" id="fourth" maxLength="1" value={newfourth} onChange={handleChange4} />
          <input type="text" id="fifth" maxLength="1" value={newfifth} onChange={handleChange5} ></input>
          <input type="text" id='sixth' placeholder='-' disabled />
          <input type="text" id="sec" maxLength="1" value={newsixth} onChange={handleChange6} />
          <input type="text" id="third" maxLength="1" value={newseventh} onChange={handleChange7} />
          <input type="text" id="fourth" maxLength="1" value={neweight} onChange={handleChange8} />
          <input type="text" id="fifth" maxLength="1" value={newninth} onChange={handleChange9} ></input>
          <input type="text" id="third" maxLength="1" value={newtenth} onChange={handleChange10} />
          <input type="text" id="fourth" maxLength="1" value={neweleventh} onChange={handleChange11} />
          <input type="text" id="fifth" maxLength="1" value={newtwelve} onChange={handleChange12} ></input>
          <input type="text" id='sixth' placeholder='-' disabled />
          <input type="text" id="fifth" maxLength="1" value={newthirteen} onChange={handleChange13} ></input>



        </label><br />
        <label htmlFor="" id='name'>2.    Name.  <input type="text" id='name1' maxLength="1" value={Newname1} onChange={(event) => { setNewname1(event.target.value) }} />
          <input type="text" id='name2' maxLength="1" value={Newname2} onChange={(event) => { setNewname2(event.target.value) }} />
          <input type="text" id='name3' maxLength="1" value={Newname3} onChange={(event) => { setNewname3(event.target.value) }} />
          <input type="text" id='name4' maxLength="1" value={Newname4} onChange={(event) => { setNewname4(event.target.value) }} />
          <input type="text" id='name5' maxLength="1" value={Newname5} onChange={(event) => { setNewname5(event.target.value) }} />
          <input type="text" id='name6' maxLength="1" value={Newname6} onChange={(event) => { setNewname6(event.target.value) }} />
          <input type="text" id='name7' maxLength="1" value={Newname7} onChange={(event) => { setNewname7(event.target.value) }} />
          <input type="text" id='name8' maxLength="1" value={Newname8} onChange={(event) => { setNewname8(event.target.value) }} />
          <input type="text" id='name9' maxLength="1" value={Newname9} onChange={(event) => { setNewname9(event.target.value) }} />
          <input type="text" id='name10' maxLength="1" value={Newname10} onChange={(event) => { setNewname10(event.target.value) }} />
          <input type="text" id='name11' maxLength="1" value={Newname11} onChange={(event) => { setNewname11(event.target.value) }} />
          <input type="text" id='name12' maxLength="1" value={Newname12} onChange={(event) => { setNewname12(event.target.value) }} />
          <input type="text" id='name13' maxLength="1" value={Newname13} onChange={(event) => { setNewname13(event.target.value) }} />
          <input type="text" id='name14' maxLength="1" value={Newname14} onChange={(event) => { setNewname14(event.target.value) }} />
          <input type="text" id='name15' maxLength="1" value={Newname15} onChange={(event) => { setNewname15(event.target.value) }} />
          <input type="text" id='name16' maxLength="1" value={Newname16} onChange={(event) => { setNewname16(event.target.value) }} />
          <input type="text" id='name17' maxLength="1" value={Newname17} onChange={(event) => { setNewname17(event.target.value) }} />
          <input type="text" id='name18' maxLength="1" value={Newname18} onChange={(event) => { setNewname18(event.target.value) }} />
          <input type="text" id='name19' maxLength="1" value={Newname19} onChange={(event) => { setNewname19(event.target.value) }} />


        </label><br />
        <label htmlFor="" id='father'>3. Father's/Husband's Name.
          <input type="text" id='father1' maxLength="1" value={Newfather1} onChange={(event) => { setNewfather1(event.target.value) }} />
          <input type="text" id='father2' maxLength="1" value={Newfather2} onChange={(event) => { setNewfather2(event.target.value) }} />
          <input type="text" id='father3' maxLength="1" value={Newfather3} onChange={(event) => { setNewfather3(event.target.value) }} />
          <input type="text" id='father4' maxLength="1" value={Newfather4} onChange={(event) => { setNewfather4(event.target.value) }} />
          <input type="text" id='father5' maxLength="1" value={Newfather5} onChange={(event) => { setNewfather5(event.target.value) }} />
          <input type="text" id='father6' maxLength="1" value={Newfather6} onChange={(event) => { setNewfather6(event.target.value) }} />
          <input type="text" id='father7' maxLength="1" value={Newfather7} onChange={(event) => { setNewfather7(event.target.value) }} />
          <input type="text" id='father8' maxLength="1" value={Newfather8} onChange={(event) => { setNewfather8(event.target.value) }} />
          <input type="text" id='father9' maxLength="1" value={Newfather9} onChange={(event) => { setNewfather9(event.target.value) }} />
          <input type="text" id='father10' maxLength="1" value={Newfather10} onChange={(event) => { setNewfather10(event.target.value) }} />
          <input type="text" id='father11' maxLength="1" value={Newfather11} onChange={(event) => { setNewfather11(event.target.value) }} />
          <input type="text" id='father12' maxLength="1" value={Newfather12} onChange={(event) => { setNewfather12(event.target.value) }} />
          <input type="text" id='father13' maxLength="1" value={Newfather13} onChange={(event) => { setNewfather13(event.target.value) }} />
          <input type="text" id='father14' maxLength="1" value={Newfather14} onChange={(event) => { setNewfather14(event.target.value) }} />
          <input type="text" id='father15' maxLength="1" value={Newfather15} onChange={(event) => { setNewfather15(event.target.value) }} />

        </label><br />

        <label htmlFor="" id='BDay'>4. Date of Birth  <input type="text" id='BDay1' maxLength="1" value={bday1} onChange={handleChange14} />
          <input type="text" id='BDay2' maxLength="1" value={bday2} onChange={handleChange15} />
          <input type="text" id='BDay3' placeholder='-' disabled />
          <input type="text" id='BDay4' maxLength="1" value={bday3} onChange={handleChange16} />
          <input type="text" id='BDay5' maxLength="1" value={bday4} onChange={handleChange17} />
          <input type="text" id='BDay6' placeholder='-' disabled />
          <input type="text" id='BDay7' maxLength="1" value={bday5} onChange={handleChange18} />
          <input type="text" id='BDay8' maxLength="1" value={bday6} onChange={handleChange19} />
          <input type="text" id='BDay9' maxLength="1" value={bday7} onChange={handleChange20} />
          <input type="text" id='BDay10' maxLength="1" value={bday8} onChange={handleChange21} />



        </label><br />
        <label htmlFor="" id='gender'>5. Gender
        <input type="text" id='male' placeholder='Male' value={Newmale}  onChange={(event) => { setNewMale(event.target.value) }} />
        <input type="text" id='female' placeholder='Female' value={Newfemale}  onChange={(event) => { setNewfemale(event.target.value) }}   />
        
        </label><br />

        <label htmlFor="" id='bd'>6. Blood Group <input type="text" id='BD' value={Newbd}  onChange={(event) => { setNewbd(event.target.value) }}  />
        
        </label><br />

        <label htmlFor="" id='moi'>7. Mark of identification <input type="text" id="MOF" value={mof}  onChange={(event) => { setNewmof(event.target.value) }}  />
        
        </label><br />

        <label htmlFor="" id='phone'>8. Phone No</label>
      
      </fieldset>
      <button onClick={createUser}> Create User</button>

    </>
  )
}

export default Form
