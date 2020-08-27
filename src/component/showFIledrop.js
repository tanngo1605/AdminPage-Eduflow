<div>
                        {this.state.exam.files.map((file)=>(
                          <div className='flexrow' style={{marginLeft:'1.5vw',marginTop:'0.8vh'}} key={file.name}>
                            <p> {file.name} </p>
                            <MdClose onClick={()=>this.removeItem(file)} style={{marginTop:'1vh'}}/>
                            
                          </div>
                        ))} 
                        </div>