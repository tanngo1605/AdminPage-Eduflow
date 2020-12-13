import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getCurrentUser, setCurrentUser } from "../../../redux/Stores/AccountReducer";
import { getSectionAndClass } from "../../../redux/Action/SchoolAction";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { connect } from "react-redux";
import Drawer from "../../../component/Drawer/Drawer";
import Header from "../../../component/Header/HeaderAdmin";
import { createUsers } from "../../../redux/Action/UserAction";
import { studentProfileSchema } from "../../../userData/ValidationSchema/StudentSchema"
import { studentProfileInitialValue } from "../../../userData/InitialData/Student"
import { marginBottom20vh, marginLeft60vw, marginLeft20vw, marginBottom55vh } from "../../../styles/marginStyles";
import { image130vw, image50vw } from "../../../styles/imageStyles"
import { image40vwLeft10vw, image95vwLeft30vw } from "../../../styles/imageMarginStyles"
import { FcHighPriority } from "react-icons/fc";
import dateFnsFormat from 'date-fns/format';
// import dateFnsParse from 'date-fns/parse';
// import { DateUtils } from 'react-day-picker';
// import { parseISO, toDate } from "date-fns";

// function parseDate(str, format, locale) {
//   const parsed = dateFnsParse(str, format, new Date(), { locale });
//   if (DateUtils.isDate(parsed)) {
//     return parsed;
//   }
//   return undefined;
// }

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

const StudentProfile = (props) => {
  let [classsection, setClassSection] = useState([]);
  const [edit, setEdit] = useState(props.location.studentdata ? false : true)
  const [studentData, setStudentData] = useState(props.location.studentdata ? props.location.studentdata : [])


  useEffect(() => {
    async function getClassSection() {
      props.dispatch(setCurrentUser(JSON.parse(sessionStorage.getItem('userdata'))))
      props.dispatch(getCurrentUser())
      try {
        const userData = props.account.userData.data.data;
        const sectionclassData = await getSectionAndClass(userData.school.uuid, userData.token)

        setClassSection(sectionclassData)
      }
      catch (err) {
        console.log(err)
      }
    }
    getClassSection();
  }, [])

  const displayImage = (propsForm) => {

    if (!edit) return (
      <div className="profileimage">
        <img src={{}} alt="" className="profileimagepreview" />
      </div>
    );

    const image = propsForm.values.image;
    // console.log(typeof image)
    // console.log(image)
    if (image.length > 1)
      return (
        <div className="profileimage">
          <label htmlFor="image">
            <img src={image} alt="" className="profileimagepreview" />
          </label>
          <input type="file" name="image" accept="image/*" onChange={(event) => propsForm.setFieldValue("image", event.target.files[0])} />
        </div>
      );

    return (
      <div>
        <label htmlFor="image" className="profileimage"></label>
        <input type="file" id="image" className="profileimage" name="image" accept="image/*" onChange={(event) => propsForm.setFieldValue("image", URL.createObjectURL(event.target.files[0]))} />
      </div>
    );
  };

  const handleSubmit = (values) => {

    console.log(values);
    console.log(props.account);
    try {
      const userData = props.account.userData.data.data;

      if (edit) {


        createUsers(userData.token, values, "student")
        props.history.push(
          {
            pathname: '/studentsearch',
            // state: { detail: values }
          }
        );

      }
      else {

        createUsers(userData.token, values, "student")
        props.history.push(
          {
            pathname: '/studentsearch',
            // state: { detail: values }
          }
        );
      }

    }
    catch (error) {
      console.log(error)
    }
    //props.dispatch(modifystudentData({ value: values }));
    //props.dispatch(addstudentData({ value: values }));


  };
  console.log(props, edit);

  return (
    <div className="dashboard">
      <div className="flexrow">
        <Drawer />
        <div className="flexcolumn">
          <Header {...props} />
          <div className="form">
            <h1 className="titleform">Student Profile </h1>
            <div className="flexrow">

              <div >

                {edit ? (
                  <Formik
                    initialValues={studentProfileInitialValue}
                    validationSchema={studentProfileSchema}
                    onSubmit={(values, actions) => {
                      handleSubmit(values);
                      actions.resetForm()
                    }}
                  >

                    {(propsForm) => (
                      console.log(props),
                      <Form className="flexrow">
                        {displayImage(propsForm)}
                        {console.log(propsForm.values)}
                        <div className="flexcolumn">
                          <div className="formforinfo">
                            <Scrollbars>
                              <div className="flexrow" style={propsForm.errors.name && propsForm.touched.name ? marginBottom55vh : marginBottom20vh}>
                                <label className="section" style={image130vw} >Name</label>
                                <div className="flexcolumn">
                                  <Field type="text" name="name" className="shortbox" style={marginLeft60vw} placeholder={studentData.name} />
                                  <div style={{ position: "absolute", left: "120px" }}>
                                    <div className="errMessOuter " style={propsForm.errors.name && propsForm.touched.name ? null : { display: "none" }}>
                                      <FcHighPriority className="iconErrMess" size="1.5vw" />
                                      <ErrorMessage name="name" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flexrow" style={propsForm.errors.dob && propsForm.touched.dob ? marginBottom55vh : marginBottom20vh}>
                                <label className="section" style={image130vw}>Date of birth</label>
                                <DayPickerInput format={'dd-MM-yyyy'} className="shortbox" name="dob" onDayChange={(day) => propsForm.setFieldValue("dob", formatDate(new Date(day), "DD-MM-YYYY"))} style={marginLeft60vw} inputProps={{ readOnly: true }} dayPickerProps={{ disabledDays: { after: new Date() } }} placeholder={studentData.dateofbirth ? studentData.dateofbirth : 'DD-MM-YYYY'} />
                                <div style={{ position: "absolute", left: "120px" }}>
                                  <div className="errMessOuter " style={propsForm.errors.dob && propsForm.touched.dob ? null : { display: "none" }}>
                                    <FcHighPriority className="iconErrMess" size="1.5vw" />
                                    <ErrorMessage name="dob" />
                                  </div>
                                </div>
                              </div>
                              <div className="flexrow" style={marginBottom20vh}>
                                <label htmlFor="email" className="section" style={image130vw}>Email</label>
                                <Field type="email" name="email" className="shortbox" style={marginLeft60vw} placeholder={studentData.email} />

                              </div>
                              <div className="flexrow" style={marginBottom20vh}>
                                <label htmlFor="Mobile" className="section" style={image130vw}>Mobile</label>
                                <Field type="Mobile" name="Mobile" className="shortbox" style={marginLeft60vw} placeholder={studentData.mobile} />

                              </div>
                              <div className="flexrow" style={propsForm.errors.admissnumber && propsForm.touched.admissnumber ? marginBottom55vh : marginBottom20vh}>
                                <label htmlFor="admissnumber" className="section" style={image130vw}>Admission number</label>
                                <Field type="text" name="admissnumber" className="shortbox" style={marginLeft60vw} placeholder={studentData.name} />
                                <div style={{ position: "absolute", left: "120px" }}>
                                  <div className="errMessOuter " style={propsForm.errors.admissnumber && propsForm.touched.admissnumber ? null : { display: "none" }}>
                                    <FcHighPriority className="iconErrMess" size="1.5vw" />
                                    <ErrorMessage name="admissnumber" />
                                  </div>
                                </div>
                              </div>
                              <div className="flexrow" style={propsForm.errors.gender && propsForm.touched.gender ? marginBottom55vh : marginBottom20vh}>
                                <label htmlFor="gender" className="section" style={image130vw}>Gender</label>
                                <Field as="select" name="gender" className="shortbox" style={marginLeft60vw}>
                                  <option value="" defaultValue>{" "}{studentData.gender}</option>
                                  <option value="male" >{" "}Male</option>
                                  <option value="female">{" "}Female</option>
                                </Field>
                                <div style={{ position: "absolute", left: "120px" }}>
                                  <div className="errMessOuter " style={propsForm.errors.gender && propsForm.touched.gender ? null : { display: "none" }}>
                                    <FcHighPriority className="iconErrMess" size="1.5vw" />
                                    <ErrorMessage name="gender" />
                                  </div>
                                </div>
                              </div>
                              <div className="flexrow" style={propsForm.errors.fathername && propsForm.touched.fathername ? marginBottom55vh : marginBottom20vh}>
                                <label htmlFor="fathername" className="section" style={image130vw}>Father's name</label>
                                <Field type="text" name="fathername" className="shortbox" style={marginLeft60vw} placeholder={studentData.name} />
                                <div style={{ position: "absolute", left: "120px" }}>
                                  <div className="errMessOuter " style={propsForm.errors.fathername && propsForm.touched.fathername ? null : { display: "none" }}>
                                    <FcHighPriority className="iconErrMess" size="1.5vw" />
                                    <ErrorMessage name="fathername" />
                                  </div>
                                </div>
                              </div>
                              <div className="flexrow" style={propsForm.errors.mothername && propsForm.touched.mothername ? marginBottom55vh : marginBottom20vh}>
                                <label htmlFor="mothername" className="section" style={image130vw}>Mother's name</label>
                                <Field type="text" name="mothername" className="shortbox" style={marginLeft60vw} placeholder={studentData.name} />
                                <div style={{ position: "absolute", left: "120px" }}>
                                  <div className="errMessOuter " style={propsForm.errors.mothername && propsForm.touched.mothername ? null : { display: "none" }}>
                                    <FcHighPriority className="iconErrMess" size="1.5vw" />
                                    <ErrorMessage name="mothername" />
                                  </div>
                                </div>
                              </div>
                              <div className="flexrow" style={propsForm.errors.fatheroccupation && propsForm.touched.fatheroccupation ? marginBottom55vh : marginBottom20vh}>
                                <label htmlFor="fatheroccupation" className="section" style={image130vw}>Father's occupation</label>
                                <Field type="text" name="fatheroccupation" className="shortbox" style={marginLeft60vw} placeholder={studentData.name} />
                                <div style={{ position: "absolute", left: "120px" }}>
                                  <div className="errMessOuter " style={propsForm.errors.fatheroccupation && propsForm.touched.fatheroccupation ? null : { display: "none" }}>
                                    <FcHighPriority className="iconErrMess" size="1.5vw" />
                                    <ErrorMessage name="fatheroccupation" />
                                  </div>
                                </div>
                              </div>
                              <div className="flexrow" style={propsForm.errors.motheroccupation && propsForm.touched.motheroccupation ? marginBottom55vh : marginBottom20vh}>
                                <label htmlFor="motheroccupation" className="section" style={image130vw}>Mother's occupation</label>
                                <Field type="text" name="motheroccupation" className="shortbox" style={marginLeft60vw} placeholder={studentData.name} />
                                <div style={{ position: "absolute", left: "120px" }}>
                                  <div className="errMessOuter " style={propsForm.errors.motheroccupation && propsForm.touched.motheroccupation ? null : { display: "none" }}>
                                    <FcHighPriority className="iconErrMess" size="1.5vw" />
                                    <ErrorMessage name="motheroccupation" />
                                  </div>
                                </div>
                              </div>
                              <div className="flexrow" style={marginBottom20vh}>
                                <label htmlFor="corresaddress" className="section" style={image130vw}>Correspondence Address</label>
                                <Field component="textarea" name="corresaddress" className="shortbox" style={{ marginLeft: "6vw", height: "15vh" }} placeholder={studentData.name} />
                              </div>

                              <div className="flexrow" style={marginBottom20vh}>
                                <label htmlFor="correscity" className="section" style={{ width: "7%" }}>City</label>
                                <Field type="text" name="correscity" className="shortbox" style={{ width: "9vw", marginLeft: '1vw' }} placeholder={studentData.name} />
                                <label htmlFor="corresstate" className="section" style={{ width: "7%", marginLeft: "2vw" }} >State</label>
                                <Field type="text" name="corresstate" className="shortbox" style={{ width: "9vw", marginLeft: '1vw' }} placeholder={studentData.name} />
                                <label htmlFor="correspcode" className="section" style={{ width: "7%", marginLeft: "2vw" }}>Postcode</label>
                                <Field type="text" name="correspcode" className="shortbox" style={{ width: "9vw", marginLeft: '2vw' }} placeholder={studentData.name} />
                              </div>
                              <div className="flexrow" style={marginBottom20vh}>
                                <label htmlFor="checkbox" className="section" style={image130vw}>Same Permanent Address</label>
                                <Field name="checkbox" className="abc" component="input" type="checkbox" style={marginLeft60vw} checked={propsForm.values.checkbox} />
                              </div>
                              <div className="flexrow" style={marginBottom20vh}>
                                <label htmlFor="permaaddress" className="section" style={image130vw} >Permanent Address</label>
                                {propsForm.values.checkbox && propsForm.values.corresaddress !== "" ?
                                  <>
                                    <div style={{ display: "none" }}>{propsForm.values.permaaddress = propsForm.values.corresaddress}</div>
                                    <Field component="textarea" name="permaaddress" className="shortbox" style={{ marginLeft: "6vw", height: "15vh" }} placeholder={propsForm.values.corresaddress} disabled />
                                  </>
                                  :
                                  <>
                                    <div style={{ display: "none" }}>{propsForm.values.permaaddress = ""}</div>
                                    <Field component="textarea" name="permaaddress" className="shortbox" style={{ marginLeft: "6vw", height: "15vh" }} placeholder={studentData.name} />
                                  </>
                                }

                              </div>
                              <div className="flexrow" style={marginBottom20vh}>
                                {propsForm.values.checkbox && propsForm.values.correscity !== ""
                                  ?
                                  <>
                                    <div style={{ display: "none" }}>{propsForm.values.permacity = propsForm.values.correscity}</div>

                                    <label htmlFor="permacity" className="section" style={{ width: "7%" }}>City</label>
                                    <Field type="text" name="permacity" className="shortbox" style={{ width: "9vw", marginLeft: '1vw' }} placeholder={propsForm.values.correscity} disabled />
                                  </>
                                  :
                                  <>
                                    <div style={{ display: "none" }}>{propsForm.values.permacity = ""}</div>
                                    <label htmlFor="permacity" className="section" style={{ width: "7%" }}>City</label>
                                    <Field type="text" name="permacity" className="shortbox" style={{ width: "9vw", marginLeft: '1vw' }} placeholder={studentData.name} />

                                  </>
                                }
                                {propsForm.values.checkbox && propsForm.values.corresstate !== ""
                                  ?
                                  <>
                                    <div style={{ display: "none" }}>{propsForm.values.permastate = propsForm.values.corresstate}</div>

                                    <label htmlFor="permastate" className="section" style={{ width: "7%", marginLeft: "2vw" }}>State</label>
                                    <Field type="text" name="permastate" className="shortbox" style={{ width: "9vw", marginLeft: '1vw' }} placeholder={propsForm.values.corresstate} disabled />
                                  </>
                                  :
                                  <>
                                    <div style={{ display: "none" }}>{propsForm.values.permastate = ""}</div>
                                    <label htmlFor="permastate" className="section" style={{ width: "7%", marginLeft: "2vw" }}>State</label>
                                    <Field type="text" name="permastate" className="shortbox" style={{ width: "9vw", marginLeft: '1vw' }} placeholder={studentData.name} />

                                  </>
                                }
                                {propsForm.values.checkbox && propsForm.values.correspcode !== ""
                                  ?
                                  <>
                                    <div style={{ display: "none" }}>{propsForm.values.permapcode = propsForm.values.correspcode}</div>

                                    <label htmlFor="permapcode" className="section" style={{ width: "7%", marginLeft: "2vw" }}>Postcode</label>
                                    <Field type="text" name="permapcode" className="shortbox" style={{ width: "9vw", marginLeft: '2vw' }} placeholder={propsForm.values.correspcode} disabled />
                                  </>
                                  :
                                  <>
                                    <div style={{ display: "none" }}>{propsForm.values.permapcode = ""}</div>
                                    <label htmlFor="permapcode" className="section" style={{ width: "7%", marginLeft: "2vw" }}>Postcode</label>
                                    <Field type="text" name="permapcode" className="shortbox" style={{ width: "9vw", marginLeft: '2vw' }} placeholder={studentData.name} />

                                  </>
                                }

                              </div>
                              <div className="flexrow" style={propsForm.errors.name && propsForm.touched.name ? marginBottom55vh : marginBottom20vh}>
                                <label htmlFor="classvalue" className="section" style={image50vw}>Class</label>
                                <Field type="text" name="classvalue" className="shortbox" style={image95vwLeft30vw} placeholder={studentData.name} />
                                <label htmlFor="section" className="section" style={marginLeft20vw} >Section</label>
                                <Field type="text" name="section" className="shortbox" style={image95vwLeft30vw} placeholder={studentData.name} />

                              </div>
                              <div className="flexrow" style={propsForm.errors.teachername && propsForm.touched.teachername ? marginBottom55vh : marginBottom20vh}>
                                <label htmlFor="teachername" className="section" style={image130vw}>Class Teacher Name</label>
                                <Field type="text" name="teachername" className="shortbox" style={marginLeft60vw} placeholder={studentData.subject} />
                              </div>
                              <div className="flexrow" style={propsForm.errors.fathermobileno && propsForm.touched.fathermobileno ? marginBottom55vh : marginBottom20vh}>
                                <label htmlFor="fathermobileno" className="section" style={image130vw}>Father's Mobile No.</label>
                                <Field type="text" name="fathermobileno" className="shortbox" style={marginLeft60vw} placeholder={studentData.role} />
                              </div>
                              <div className="flexrow" style={propsForm.errors.alternatephoneno && propsForm.touched.alternatephoneno ? marginBottom55vh : marginBottom20vh}>
                                <label htmlFor="alternatephoneno" className="section" style={image130vw}>Alternate's Mobile No.</label>
                                <Field type="text" name="alternatephoneno" className="shortbox" style={marginLeft60vw} placeholder={studentData.phone} />
                              </div>
                            </Scrollbars>

                          </div>
                          <div className="flexrow" style={{ marginLeft: "7vw", marginTop: "2vh" }}>
                            <button type="button" className="button" onClick={() => console.log("dont have anything to edit")}>Edit</button>
                            <button type="submit" className="button">Save</button>
                          </div>
                        </div>

                      </Form>

                    )}


                  </Formik>
                ) : (

                    <div className="flexrow">
                      {displayImage(props)}
                      <div className="flexcolumn">

                        <div className="formforinfo" style={{ paddingTop: "3.5vh" }}>
                          <Scrollbars>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Name</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.name}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Date of birth</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.dob}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Admission Number</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.admissnumber}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Gender</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.gender}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Father's name</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.fathername}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Mother"s name</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.mothername}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Father's occupation</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.fatheroccupation}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Mother's occupation</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.motheroccupation}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div htmlFor="corresaddress" className="section" style={image130vw}>Correspondence Address</div>
                              <div className="shortbox" style={{ marginLeft: "6vw", height: "15vh" }}>{studentData.corresaddress}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={{ width: "7%" }}>City</div>
                              <div className="shortbox" style={{
                                width: "9vw",
                                marginLeft: '1vw'
                              }}>{studentData.correscity}</div>
                              <div htmlFor="state" className="section" style={{ width: "7%", marginLeft: "2vw" }} >State</div>
                              <div className="shortbox" style={{
                                width: '9vw',
                                marginLeft: '1vw'
                              }}>{studentData.corresstate}</div>
                              <div htmlFor="Postcode" className="section" style={{ width: "7%", marginLeft: "2vw" }} >Postcode</div>
                              <div className="shortbox" style={{
                                width: '9vw',
                                marginLeft: '2vw'
                              }}>{studentData.correspcode}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div htmlFor="permaaddress" className="section" style={image130vw}>Permanent Address</div>
                              <div className="shortbox" style={{ marginLeft: "6vw", height: "15vh" }} placeholder={studentData.permaaddress}></div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={{ width: "7%" }}>City</div>
                              <div className="shortbox" style={{
                                width: "9vw",
                                marginLeft: '1vw'
                              }}>{studentData.permacity}</div>
                              <div htmlFor="state" className="section" style={{ width: "7%", marginLeft: "2vw" }} >State</div>
                              <div className="shortbox" style={{
                                width: '9vw',
                                marginLeft: '1vw'
                              }}>{studentData.permastate}</div>
                              <div htmlFor="Postcode" className="section" style={{ width: "7%", marginLeft: "2vw" }} >Postcode</div>
                              <div className="shortbox" style={{
                                width: '8vw',
                                marginLeft: '2vw'
                              }}>{studentData.permapcode}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image50vw}>Class</div>
                              <div className="shortbox" style={image95vwLeft30vw}>{studentData.classvalue}</div>
                              <div className="section" style={marginLeft20vw}>Section</div>
                              <div className="shortbox" style={image95vwLeft30vw}>{studentData.section}</div>

                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Class Teacher Name</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.teachername}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Father's Mobile No.</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.fathermobileno}</div>
                            </section>
                            <section className="flexrow" style={marginBottom20vh}>
                              <div className="section" style={image130vw}>Alternate's Mobile No.</div>
                              <div className="shortbox" style={marginLeft60vw}>{studentData.alternatephoneno}</div>
                            </section>

                          </Scrollbars>
                        </div>
                        <div className="flexrow" style={{ marginLeft: "7vw", marginTop: "2vh" }}>
                          <button type="button" className="button" onClick={() => setEdit(true)}>Edit</button>
                          <button type="button" className="button" onClick={() => console.log("dont have anything to save")}>Save</button>
                        </div>
                      </div>
                    </div>
                  )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

const mapStateToProps = (state) => ({
  account: state.account,
});

export default React.memo(connect(mapStateToProps)(StudentProfile));
